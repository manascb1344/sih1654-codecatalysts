// contexts/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	AuthProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		const storedUser = localStorage.getItem('user');
		if (token && storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const backendUrl = "http://localhost:5000";

	const signin = async (username, password) => {
		try {
			const response = await fetch(`${backendUrl}/api/auth/signin`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password }),
			});
			const data = await response.json();

			if (response.ok) {
				localStorage.setItem('token', data.token);
				const userData = { id: data.userId, role: data.role };
				localStorage.setItem('user', JSON.stringify(userData));
				setUser(userData);
				return true;
			} else {
				throw new Error(data.error || 'Signin failed');
			}
		} catch (error) {
			console.error('Signin Error:', error);
			return false;
		}
	};

	const signup = async (username, password, role) => {
		try {
			const response = await fetch(`${backendUrl}/api/auth/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password, role }),
			});
			if (response.ok) {
				return true;
			} else {
				const data = await response.json();
				throw new Error(data.error || 'Signup failed');
			}
		} catch (error) {
			console.error('Signup Error:', error);
			return false;
		}
	};

	const signout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, signin, signup, signout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
