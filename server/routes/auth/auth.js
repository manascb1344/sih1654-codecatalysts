import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../db/index.js";
import { users } from "../../db/schema.js";
import { authenticateToken } from "../../middleware/auth.js";
import { eq } from "drizzle-orm";

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
	try {
		const { email, password, role } = req.body;
		console.log("Email: ", email);
		console.log("Role: ", role);
		console.log("Password: ", password);

		// Enforce the role to be "candidate" or "expert"
		if (role.toLowerCase() !== "candidate" && role.toLowerCase() !== "expert") {
			return res
				.status(403)
				.json({ error: "You can only sign up as a candidate or expert." });
		}

		// Check if the email already exists
		const existingUser = await db
			.select()
			.from(users)
			.where({ email })
			.limit(1);
		if (existingUser.length > 0) {
			return res.status(400).json({ error: "Email already in use." });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert new user into the database
		const newUser = await db
			.insert(users)
			.values({
				email,
				passwordHash: hashedPassword,
				role,
			})
			.returning(["id", "email", "role"]); // Specify returning columns

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
		const { email, password } = req.body;

		console.log("Signing in user...");

		// Find user in the database
		console.log("Email: ", email);
		console.log("Password: ", password);
		// const tp = await db.select().from(users).where(eq(users.email, email)); // `eq` is used for equality comparison

		// console.log("tp", tp);

		const user = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1);
		if (user.length > 1) {
			console.log("More than one user found with the same email");
			return res.status(500).json({ error: "Error signing in" });
		}
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
		console.log("Data", { token, userId: user[0].id, role: user[0].role });
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
