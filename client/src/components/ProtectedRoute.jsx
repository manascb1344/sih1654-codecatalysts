// components/ProtectedRoute.jsx
import React, { useEffect, useState } from 'react';
import { verifyToken } from '../services/api'; // Ensure this API call is correctly implemented.
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await verifyToken();
				if (response.status === 200) {
					setIsAuthenticated(true);
				} else {
					setIsAuthenticated(false);
				}
			} catch (error) {
				setIsAuthenticated(false);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuth();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
