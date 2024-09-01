import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Applicants from './components/Applicants';
import InterviewPanelPage from './components/InterviewPanel';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applications"
            element={
              <ProtectedRoute>
                <Applicants />
              </ProtectedRoute>
            }
          />
          <Route
            path="/panelist"
            element={
              <ProtectedRoute>
                <InterviewPanelPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;