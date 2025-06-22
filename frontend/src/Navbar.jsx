import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, onLoginClick, onLogoutClick }) {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          AI Code Reviewer
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <NavLink to="/" label="Home" />
          <NavLink to="/review" label="Review" />
          {user?.role === 'admin' && (
            <NavLink to="/admin" label="Admin" />
          )}

          {/* User Info / Auth Button */}
          {user ? (
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="text-sm text-gray-300 hidden md:block">
                  Welcome, {user.name}
                </span>
              </div>
              <button
                onClick={onLogoutClick}
                className="text-red-400 hover:text-red-600 font-medium transition px-3 py-1 rounded hover:bg-red-900/20"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-red-500 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Login / Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="relative group text-white font-medium"
    >
      <span className="group-hover:text-pink-400 transition duration-200">{label}</span>
      <span className="block h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
}
