import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './HomePage';
import CodeReview from './CodeReview';
import AdminDashboard from './AdminDashboard';
import Navbar from './Navbar';
import AuthModal from './AuthModal';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        handleLogout();
      }
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    toast.success(`Welcome back, ${userData.name}! 🎉`);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.info('Logged out successfully');
    navigate('/');
    setAuthModalOpen(true);
  };

  return (
    <>
      <Navbar
        user={user}
        onLoginClick={() => setAuthModalOpen(true)}
        onLogoutClick={handleLogout}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/review" element={<CodeReview user={user} />} />
        {user?.role === 'admin' && (
          <Route path="/admin" element={<AdminDashboard user={user} />} />
        )}
      </Routes>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
