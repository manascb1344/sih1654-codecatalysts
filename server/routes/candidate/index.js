import express from "express";
import { authorizeRole } from "../../middleware/authorizeRole.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication middleware
router.use(authenticateToken);

// Apply role-based authorization for candidate routes
router.use(authorizeRole(["candidate", "admin"]));

// Define your candidate routes
router.get("/profile", (req, res) => {
	res.send("Candidate Profile");
});

export default router;
