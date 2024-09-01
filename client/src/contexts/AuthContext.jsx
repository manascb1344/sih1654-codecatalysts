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
		console.log('AuthProvider: Initializing...');
		const token = localStorage.getItem('token');
		const storedUser = localStorage.getItem('user');
		if (token && storedUser) {
			console.log('AuthProvider: Found token and user in local storage.');
			setUser(JSON.parse(storedUser));
		} else {
			console.log('AuthProvider: No token or user found in local storage.');
		}
		setLoading(false);
		console.log('AuthProvider: Initialization complete.');
	}, []);

	const backendUrl = "http://localhost:5000";

	const signin = async (username, password) => {
		console.log('Signin: Starting signin process...');
		try {
			const response = await fetch(`${backendUrl}/api/auth/signin`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password }),
			});
			const data = await response.json();
			console.log('Signin: Response data received:', data);

			if (response.ok) {
				localStorage.setItem('token', data.token);
				const userData = { id: data.userId, role: data.role };
				localStorage.setItem('user', JSON.stringify(userData));
				setUser(userData);
				console.log('Signin: Signin successful, user data updated.');
				return true;
			} else {
				console.error('Signin: Error in response data:', data.error || 'Signin failed');
				throw new Error(data.error || 'Signin failed');
			}
		} catch (error) {
			console.error('Signin: Error occurred during signin:', error);
			return false;
		}
	};

	const signup = async (username, password, role) => {
		console.log('Signup: Starting signup process...');
		try {
			const response = await fetch(`${backendUrl}/api/auth/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password, role }),
			});
			const data = await response.json();
			console.log('Signup: Response data received:', data);

			if (response.ok) {
				console.log('Signup: Signup successful.');
				return true;
			} else {
				console.error('Signup: Error in response data:', data.error || 'Signup failed');
				throw new Error(data.error || 'Signup failed');
			}
		} catch (error) {
			console.error('Signup: Error occurred during signup:', error);
			return false;
		}
	};

	const signout = () => {
		console.log('Signout: Starting signout process...');
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setUser(null);
		console.log('Signout: Signout complete.');
	};

	return (
		<AuthContext.Provider value={{ user, signin, signup, signout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
