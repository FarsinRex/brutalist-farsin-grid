
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="font-helvetica min-h-screen flex flex-col relative bg-white">
      <div className={`fixed top-0 left-0 w-full h-16 bg-white z-30 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <Navbar />
      </div>
      
      <main className="flex-1 pt-24 pb-16 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
