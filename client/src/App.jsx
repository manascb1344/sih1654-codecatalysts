// src/App.jsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import RoleBasedRoute from './components/RoleBasedRoute'; // Role-based route component
import Unauthorized from './components/Unauthorized';
import ErrorBoundary from './ErrorBoundary';
import Footer from './components/Footer';

// Role-based routing components

import NotFound from './components/NotFound';
import AdminRoutes from './Admin/AdminRoutes';
import ExpertRoutes from './Expert/ExpertRoutes';
import CandidateRoutes from './Candidate/CandidateRoutes';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <RoleBasedRoute requiredRole="admin">
                  <AdminRoutes />
                </RoleBasedRoute>
              }
            />

            {/* Expert Routes */}
            <Route
              path="/expert/*"
              element={
                <RoleBasedRoute requiredRole="expert">
                  <ExpertRoutes />
                </RoleBasedRoute>
              }
            />

            {/* Candidate Routes */}
            <Route
              path="/candidate/*"
              element={
                <RoleBasedRoute requiredRole="candidate">
                  <CandidateRoutes />
                </RoleBasedRoute>
              }
            />

            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
