
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto w-full h-full flex items-center justify-end px-6 md:px-12 lg:px-16">
      <ul className="flex space-x-8 text-sm">
        <li>
          <Link to="/about" className="text-brutalist-900 relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-brutalist-900 relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-brutalist-900 relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/hire-me" className="text-brutalist-900 relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
