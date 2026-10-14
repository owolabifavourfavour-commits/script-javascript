import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-bold text-xl text-indigo-400 mb-2">BrandName</div>
          <p className="text-sm text-slate-400">
            Building simple and intuitive web applications.
          </p>
        </div>

        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        <p className="text-xs text-slate-500">
          © BrandName. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;