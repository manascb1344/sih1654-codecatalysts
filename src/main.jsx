import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { DarkModeProvider } from './contexts/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isDarkMode = localStorage.getItem('theme') === 'dark';
if (isDarkMode) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthProvider>
        <Router>
          <App />
          <Analytics />
        </Router>
      </AuthProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
