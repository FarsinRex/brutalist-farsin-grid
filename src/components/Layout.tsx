
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="gradient-bg"></div>
      <div className="grain-overlay"></div>
      
      <Navbar />
      
      <main className="flex-1 container mx-auto max-w-7xl px-6 md:px-8 py-8 md:py-12">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
