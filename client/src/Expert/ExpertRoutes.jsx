// src/components/Expert/ExpertRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpertDashboard from './ExpertDashboard';
import ExpertProfile from './ExpertProfile';
// import ExpertSettings from './ExpertSettings';
// import ExpertProjects from './ExpertProjects';

const ExpertRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ExpertDashboard />} />
			<Route path="/profile" element={<ExpertProfile />} />
			{/* <Route path="settings" element={<ExpertSettings />} />
			<Route path="projects" element={<ExpertProjects />} /> */}
		</Routes>
	);
};

export default ExpertRoutes;
