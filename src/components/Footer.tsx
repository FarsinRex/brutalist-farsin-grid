
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start border-t border-brutalist-200 pt-8">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-brutalist-600">© {new Date().getFullYear()} Farsin. All rights reserved.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-brutalist-600">Dadar, Mumbai, 40074</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
