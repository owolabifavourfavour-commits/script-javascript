import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="font-bold text-xl tracking-wide text-indigo-400">
          BrandName
        </div>

        <div className="flex space-x-8">
          <Link to="/" className="text-slate-300 hover:text-white transition text-sm font-medium">
            Home
          </Link>
          <Link to="/about" className="text-slate-300 hover:text-white transition text-sm font-medium">
            About
          </Link>
          <Link to="/services" className="text-slate-300 hover:text-white transition text-sm font-medium">
            Services
          </Link>
          <Link to="/contact" className="text-slate-300 hover:text-white transition text-sm font-medium">
            Contact
          </Link>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;