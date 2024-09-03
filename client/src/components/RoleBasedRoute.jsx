// components/RoleBasedRoute.jsx
import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ requiredRoles, children }) => {
	const { user, loading } = useAuth();
	console.log("User", user);

	if (loading) {
		return <div>Loading...</div>;
	}

	return user && requiredRoles.includes(user?.role) ? children : <Navigate to="/unauthorized" />;
};

RoleBasedRoute.propTypes = {
	requiredRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
	children: PropTypes.node.isRequired,
};

export default RoleBasedRoute;
