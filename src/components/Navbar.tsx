
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Folder, Mail, Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-1/4 p-6 md:p-8 z-50">
      <ul className="space-y-4 md:space-y-6">
        <li>
          <Link to="/about" className="nav-item group flex items-center">
            <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
              <User className="w-full h-full" />
            </span>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-item group flex items-center">
            <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
              <Folder className="w-full h-full" />
            </span>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item group flex items-center">
            <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-full h-full" />
            </span>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/hire-me" className="nav-item group flex items-center">
            <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
              <Briefcase className="w-full h-full" />
            </span>
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
