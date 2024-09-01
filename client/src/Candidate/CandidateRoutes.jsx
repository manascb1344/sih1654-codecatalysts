// src/components/Candidate/CandidateRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CandidateDashboard from './CandidateDashboard';
import DRDOApplicationForm from '@/components/Application';
// import CandidateProfile from './CandidateProfile';
// import CandidateApplications from './CandidateApplications';

const CandidateRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<CandidateDashboard />} />

			<Route path="/form" element={<DRDOApplicationForm />} />

			{/* <Route path="profile" element={<CandidateProfile />} />
			<Route path="applications" element={<CandidateApplications />} /> */}
		</Routes>
	);
};

export default CandidateRoutes;
