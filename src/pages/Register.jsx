import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [role, setRole] = useState('user');
	const [error, setError] = useState('');
	const { register } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password || !name) {
			setError('Email, name, and password are required.');
			return;
		}
		try {
			await register(email, password, name, role);
			navigate('/dashboard');
		} catch (error) {
			setError('Failed to register. Please try again.');
			console.error('Failed to register', error);
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
			<h1>Register</h1>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				style={{ display: 'block', margin: '10px 0', width: '100%', padding: '10px' }}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				style={{ display: 'block', margin: '10px 0', width: '100%', padding: '10px' }}
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				style={{ display: 'block', margin: '10px 0', width: '100%', padding: '10px' }}
			/>
			<button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
				Register
			</button>
		</form>
	);
};

export default Register;
