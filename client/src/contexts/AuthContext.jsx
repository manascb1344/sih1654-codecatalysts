import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setUser(JSON.parse(localStorage.getItem('user')));
		}
		setLoading(false);
	}, []);

	const signin = async (username, password) => {
		try {
			const response = await fetch('/api/signin', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password }),
			});
			const data = await response.json();
			if (response.ok) {
				localStorage.setItem('token', data.token);
				localStorage.setItem('user', JSON.stringify({ id: data.userId, role: data.role }));
				setUser({ id: data.userId, role: data.role });
				return true;
			} else {
				throw new Error(data.error);
			}
		} catch (error) {
			console.error('Signin error:', error);
			return false;
		}
	};

	const signup = async (username, password, role) => {
		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password, role }),
			});
			const data = await response.json();
			if (response.ok) {
				return true;
			} else {
				throw new Error(data.error);
			}
		} catch (error) {
			console.error('Signup error:', error);
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

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
