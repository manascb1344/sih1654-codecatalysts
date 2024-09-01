import express from "express";
import { authorizeRole } from "../../middleware/authorizeRole.js";
import { authenticateToken } from "../../middleware/auth.js";

const router = express.Router();

// Apply authentication middleware
router.use(authenticateToken);

// Apply role-based authorization for expert routes
router.use(authorizeRole(["expert", "admin"]));

// Define your expert routes
router.get("/profile", (req, res) => {
	res.send("Expert Profile");
});

export default router;
