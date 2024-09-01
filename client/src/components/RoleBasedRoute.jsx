// components/RoleBasedRoute.jsx
import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ requiredRole, children }) => {
	const { user, loading } = useAuth();
	console.log("User", user);
	if (loading) {
		return <div>Loading...</div>;
	}

	return user && user.role === requiredRole ? children : <Navigate to="/unauthorized" />;
};

export default RoleBasedRoute;
