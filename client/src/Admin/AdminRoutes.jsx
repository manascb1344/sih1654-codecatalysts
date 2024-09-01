// src/components/Admin/AdminRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
// import AdminSettings from './AdminSettings';
// import AdminUsers from './AdminUsers';

const AdminRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<AdminDashboard />} />
			{/* <Route path="settings" element={<AdminSettings />} />
			<Route path="users" element={<AdminUsers />} /> */}
		</Routes>
	);
};

export default AdminRoutes;
