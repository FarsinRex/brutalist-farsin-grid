
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto w-full h-full flex items-center justify-end px-6 md:px-12 lg:px-16">
      <ul className="flex space-x-8 text-sm">
        <li>
          <a href="/#about" className="text-brutalist-900 relative group">
            About
            <span className="absolute -bottom-1 left-1/2 w-0 h-0 bg-brutalist-900/20 rounded-full transform -translate-x-1/2 group-hover:w-[30px] group-hover:h-[30px] transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="/#projects" className="text-brutalist-900 relative group">
            Projects
            <span className="absolute -bottom-1 left-1/2 w-0 h-0 bg-brutalist-900/20 rounded-full transform -translate-x-1/2 group-hover:w-[30px] group-hover:h-[30px] transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="/#contact" className="text-brutalist-900 relative group">
            Contact
            <span className="absolute -bottom-1 left-1/2 w-0 h-0 bg-brutalist-900/20 rounded-full transform -translate-x-1/2 group-hover:w-[30px] group-hover:h-[30px] transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a href="/#hire-me" className="text-brutalist-900 relative group">
            Hire Me
            <span className="absolute -bottom-1 left-1/2 w-0 h-0 bg-brutalist-900/20 rounded-full transform -translate-x-1/2 group-hover:w-[30px] group-hover:h-[30px] transition-all duration-300"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
