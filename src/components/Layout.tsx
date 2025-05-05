
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
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
      
      <main className="flex-1 z-10">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
