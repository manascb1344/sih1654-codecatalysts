import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/authService";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	AuthProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = async (email, password) => {
		try {
			const loggedInUser = await loginUser(email, password);
			setUser(loggedInUser);
			localStorage.setItem("user", JSON.stringify(loggedInUser));
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const register = async (email, password, name = "", role = "user") => {
		try {
			const newUser = await registerUser(email, password, name, role);
			setUser(newUser);
			localStorage.setItem("user", JSON.stringify(newUser));
		} catch (error) {
			console.error("Registration failed", error);
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	const value = {
		user,
		loading,
		login,
		register,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
