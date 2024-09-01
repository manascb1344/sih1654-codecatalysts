import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useAuth } from '@/hooks/useAuth';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [role, setRole] = useState('expert'); // Default role
	const [error, setError] = useState('');
	const { signup, signin } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		if (password !== confirmPassword) {
			setError("Passwords don't match");
			return;
		}
		try {
			const success = await signup(username, password, role);
			if (success) {
				await signin(username, password); // Perform login procedure
				navigate('/dashboard'); // Redirect to dashboard after successful login
			} else {
				setError('Failed to register. Please try again.');
			}
		} catch (error) {
			console.error('Failed to register', error);
			setError('An unexpected error occurred. Please try again.');
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-50">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold">Create an account</CardTitle>
					<CardDescription>Enter your email and password to register</CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-4">
						{error && (
							<Alert variant="destructive">
								<AlertCircle className="h-4 w-4" />
								<AlertTitle>Error</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirmPassword">Confirm Password</Label>
							<Input
								id="confirmPassword"
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col space-y-4">
						<Button type="submit" className="w-full">Register</Button>
						<p className="text-sm text-center text-gray-600">
							Already have an account?{' '}
							<Link to="/login" className="text-blue-600 hover:underline">
								Login
							</Link>
						</p>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
};

export default Register;