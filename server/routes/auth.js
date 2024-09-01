import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
	try {
		const { username, password, role } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		console.log("Creating a new user...");

		const newUser = await db
			.insert(users)
			.values({
				username,
				passwordHash: hashedPassword,
				role,
			})
			.returning();

		console.log("User created successfully");

		res
			.status(201)
			.json({ message: "User created successfully", userId: newUser[0].id });
	} catch (error) {
		console.error(error); // Log the error
		res.status(500).json({ error: "Error creating user" });
	}
});

router.post("/signin", async (req, res) => {
	try {
		const { username, password } = req.body;

		console.log("Signing in user...");

		const user = await db
			.select()
			.from(users)
			.where(users.username === username)
			.limit(1);

		if (user.length === 0) {
			console.log("Invalid credentials");
			return res.status(401).json({ error: "Invalid credentials" });
		}

		const isPasswordValid = await bcrypt.compare(
			password,
			user[0].passwordHash
		);

		if (!isPasswordValid) {
			console.log("Invalid credentials");
			return res.status(401).json({ error: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ userId: user[0].id, role: user[0].role },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" }
		);

		console.log("User signed in successfully");

		res.json({ token, userId: user[0].id, role: user[0].role });
	} catch (error) {
		console.error(error); // Log the error
		res.status(500).json({ error: "Error signing in" });
	}
});

router.get("/verify-token", authenticateToken, (req, res) => {
	console.log("Verifying token...");

	res.json({ userId: req.user.userId, role: req.user.role });
});

export default router;
