import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { users } from './db/schema.js';
import cors from 'cors';
import { db } from './db/index.js';
import { saveResumeToDatabase, getResumeById, getAllResumes } from './db/dbServices.js';

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

app.post('/api/signup', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.insert(users).values({
      username,
      passwordHash: hashedPassword,
      role,
    }).returning();

    res.status(201).json({ message: 'User created successfully', userId: newUser[0].id });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.post('/api/signin', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.select().from(users).where(users.username.eq(username)).limit(1);

    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user[0].id, role: user[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, userId: user[0].id, role: user[0].role });
  } catch (error) {
    res.status(500).json({ error: 'Error signing in' });
  }
});

// Add a new route to verify the token
app.get('/api/verify-token', authenticateToken, (req, res) => {
  res.json({ userId: req.user.userId, role: req.user.role });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Resume routes
app.post('/api/resume', async (req, res) => {
  try {
    const resumeId = await saveResumeToDatabase(req.body);
    res.status(201).json({ message: 'Resume saved successfully', resumeId });
  } catch (error) {
    res.status(500).json({ error: 'Error saving resume' });
  }
});

app.get('/api/resume/:id', async (req, res) => {
  try {
    const resume = await getResumeById(req.params.id);
    if (resume) {
      res.json(resume);
    } else {
      res.status(404).json({ error: 'Resume not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching resume' });
  }
});

app.get('/api/resumes', async (req, res) => {
  try {
    const resumes = await getAllResumes();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching resumes' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));