import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	AuthProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};
	const [user, setUser] = useState(null);

	const login = async (email, password) => {
		try {
			const loggedInUser = await loginUser(email, password);
			setUser(loggedInUser);
		} catch (error) {
			console.error("Login failed", error);
		}
	};

	const register = async (email, password, name = '', role = 'user') => {
		try {
			const newUser = await registerUser(email, password, name, role);
			setUser(newUser);
		} catch (error) {
			console.error("Registration failed", error);
		}
	};

	const logout = () => {
		setUser(null);
	};

	const value = {
		user,
		login,
		register,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};
