import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	console.log("Auth Header:", authHeader);
	console.log("Token:", token);

	if (!token) {
		console.log("Token not found");
		return res.sendStatus(401); // Unauthorized
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			console.log("Token verification failed:", err.message);
			return res.sendStatus(403); // Forbidden
		}
		req.user = user;
		console.log("User:", user);
		next();
	});
}
