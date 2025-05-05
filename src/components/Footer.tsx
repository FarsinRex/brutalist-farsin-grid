
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-brutalist-900 text-brutalist-100 py-5 px-6 md:px-8 mt-auto">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">© {new Date().getFullYear()} Farsin. All rights reserved.</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Dadar, Mumbai, 40074</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
