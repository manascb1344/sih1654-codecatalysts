// services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const signup = (userData) => api.post("/auth/signup", userData);
export const signin = (credentials) => api.post("/auth/signin", credentials);
export const verifyToken = async () => {
	try {
		const token = localStorage.getItem("token");
		if (!token) throw new Error("No token found");

		const response = await api.get("/auth/verify-token", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (error) {
		return error.response || { status: 500 };
	}
};

export default api;
