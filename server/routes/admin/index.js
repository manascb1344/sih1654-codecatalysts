import express from "express";
import { authorizeRole } from "../../middleware/authorizeRole.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication middleware
router.use(authenticateToken);

// Apply role-based authorization for admin routes
router.use(authorizeRole(["admin"]));

// Define your admin routes
router.get("/dashboard", (req, res) => {
	res.send("Admin Dashboard");
});

export default router;
