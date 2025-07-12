import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
