import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../db/index.js";
import { users } from "../../db/schema.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
	try {
		const { username, password, role } = req.body;

		// Enforce the role to be "candidate" or "expert"
		if (role !== "candidate" && role !== "expert") {
			return res
				.status(403)
				.json({ error: "You can only sign up as a candidate or expert." });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert new user into the database
		const newUser = await db
			.insert(users)
			.values({
				username,
				passwordHash: hashedPassword,
				role,
			})
			.returning();

		res.status(201).json({
			message: "User created successfully",
			userId: newUser[0].id,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error creating user" });
	}
});

// Signin route
router.post("/signin", async (req, res) => {
	try {
		const { username, password } = req.body;

		console.log("Signing in user...");

		// Find user in the database
		const user = await db
			.select()
			.from(users)
			.where(users.username === username)
			.limit(1);

		if (user.length === 0) {
			console.log("Invalid credentials");
			return res.status(401).json({ error: "Invalid credentials" });
		}

		// Check if the password is valid
		const isPasswordValid = await bcrypt.compare(
			password,
			user[0].passwordHash
		);

		if (!isPasswordValid) {
			console.log("Invalid credentials");
			return res.status(401).json({ error: "Invalid credentials" });
		}

		// Generate JWT token
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

// Token verification route
router.get("/verify-token", authenticateToken, (req, res) => {
	console.log("Verifying token...");

	res.json({ userId: req.user.userId, role: req.user.role });
});

export default router;
