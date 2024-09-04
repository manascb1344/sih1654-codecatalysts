import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../db/index.js";
import { users } from "../../db/schema.js";
import { authenticateToken } from "../../middleware/auth.js";
import { eq } from "drizzle-orm";

const router = express.Router();

console.log("Auth router initialized");

const ROLES = {
	CANDIDATE: "candidate",
	EXPERT: "expert",
};

console.log("ROLES defined:", ROLES);

const createUser = async (email, password, role) => {
	console.log("Creating user:", { email, role });
	const hashedPassword = await bcrypt.hash(password, 10);
	console.log("Password hashed");
	try {
		const [newUser] = await db
			.insert(users)
			.values({ email, passwordHash: hashedPassword, role })
			.returning({ id: users.id, email: users.email, role: users.role });

		if (!newUser) {
			throw new Error("User creation failed");
		}
		console.log("New user created:", newUser);
		return newUser;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

const findUserByEmail = async (email) => {
	console.log("Finding user by email:", email);
	try {
		const [user] = await db
			.select()
			.from(users)
			.where(eq(users.email, email))
			.limit(1);
		console.log("User found:", user ? "Yes" : "No");
		return user;
	} catch (error) {
		console.error("Error finding user by email:", error);
		throw error;
	}
};

const validatePassword = async (password, hashedPassword) => {
	console.log("Validating password");
	const isValid = await bcrypt.compare(password, hashedPassword);
	console.log("Password validation result:", isValid);
	return isValid;
};

const generateToken = (userId, role) => {
	console.log("Generating token for user:", userId);
	const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});
	console.log("Token generated");
	return token;
};

// Signup route
router.post("/signup", async (req, res) => {
	console.log("Signup route called");
	try {
		const { email, password, role } = req.body;
		console.log("Signup attempt:", { email, role });

		if (!Object.values(ROLES).includes(role.toLowerCase())) {
			console.log("Invalid role attempted:", role);
			return res.status(403).json({
				error: "Invalid role. You can only sign up as a candidate or expert.",
			});
		}

		const existingUser = await findUserByEmail(email);
		if (existingUser) {
			console.log("Signup failed: Email already in use");
			return res.status(400).json({ error: "Email already in use." });
		}

		const newUser = await createUser(email, password, role.toLowerCase());
		console.log("Signup successful:", newUser.id);
		res.status(201).json({
			message: "User created successfully",
			userId: newUser.id,
		});
	} catch (error) {
		console.error("Error in signup route:", error);
		res
			.status(500)
			.json({ error: "Error creating user. Please try again later." });
	}
});

// Signin route
router.post("/signin", async (req, res) => {
	console.log("Signin route called");
	try {
		const { email, password } = req.body;
		console.log("Signin attempt:", { email });

		const user = await findUserByEmail(email);
		if (!user) {
			console.log("Signin failed: User not found");
			return res.status(401).json({ error: "Invalid credentials" });
		}

		const isPasswordValid = await validatePassword(password, user.passwordHash);
		if (!isPasswordValid) {
			console.log("Signin failed: Invalid password");
			return res.status(401).json({ error: "Invalid credentials" });
		}

		const token = generateToken(user.id, user.role);
		console.log("Signin successful:", user.id);
		res.json({ token, userId: user.id, role: user.role });
	} catch (error) {
		console.error("Error in signin route:", error);
		res
			.status(500)
			.json({ error: "Error signing in. Please try again later." });
	}
});

// Token verification route
router.get("/verify-token", authenticateToken, (req, res) => {
	console.log("Token verification route called");
	console.log("Token verified for user:", req.user.userId);
	res.json({ userId: req.user.userId, role: req.user.role });
});

console.log("Auth routes setup completed");

export default router;
