import React, { useState } from 'react';
import { API_ENDPOINTS } from './config/api';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }

    if (!isLogin && !validatePassword(password)) {
      setMessage('Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number.');
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }

    if (!isLogin && name.trim().length < 2) {
      setMessage('Name must be at least 2 characters long.');
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }

    const endpoint = isLogin ? API_ENDPOINTS.LOGIN : API_ENDPOINTS.SIGNUP;
    const requestBody = isLogin 
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`${isLogin ? 'Login' : 'Signup'} successful!`);
        setIsSuccess(true);
        
        // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setTimeout(() => {
          setMessage('');
          onLoginSuccess(data.user);
          onClose();
          resetForm();
        }, 1000);
      } else {
        setMessage(data.message || 'Something went wrong.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Server error. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setIsSuccess(false);
    setIsLoading(false);
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isLogin}
              disabled={isLoading}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-lg transition ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white`}
          >
            {isLoading ? 'Processing...' : (isLogin ? 'Log In' : 'Sign Up')}
          </button>
        </form>

        {message && (
          <p className={`text-sm text-center mt-2 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <div className="text-sm text-center mt-4">
          {isLogin ? 'Don\'t have an account?' : 'Already registered?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
              setIsSuccess(false);
            }}
            className="text-blue-500 font-medium underline"
            disabled={isLoading}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}
