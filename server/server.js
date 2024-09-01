import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth/auth.js";
import adminRoutes from "./routes/admin/index.js";
import candidateRoutes from "./routes/candidate/index.js";
import expertRoutes from "./routes/expert/index.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/expert", expertRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log("Server started successfully.");
