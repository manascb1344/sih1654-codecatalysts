// src/components/Expert/ExpertRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpertDashboard from './ExpertDashboard';
// import ExpertSettings from './ExpertSettings';
// import ExpertProjects from './ExpertProjects';

const ExpertRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ExpertDashboard />} />
			{/* <Route path="settings" element={<ExpertSettings />} />
			<Route path="projects" element={<ExpertProjects />} /> */}
		</Routes>
	);
};

export default ExpertRoutes;
