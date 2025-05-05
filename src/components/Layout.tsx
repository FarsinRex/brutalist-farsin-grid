
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

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
    <div className="min-h-screen flex flex-col relative">
      <div className={`gradient-bg ${scrolled ? 'backdrop-blur-md' : ''}`}></div>
      <div className="grain-overlay"></div>
      
      <Navbar />
      
      <main className="flex-1 container mx-auto max-w-7xl px-6 md:px-8 py-8 md:py-12 z-10">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
