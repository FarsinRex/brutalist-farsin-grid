
import React, { useEffect } from 'react';

const Index = () => {
  // Simple background animation effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}`);
      document.documentElement.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="grid-layout min-h-[calc(100vh-170px)] pt-12">
      <header className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10">
          Hi, I'm Farsin.
        </h1>
      </header>

      <div className="col-span-12 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8 self-end mb-12">
        <p className="text-lg md:text-xl text-brutalist-700">
          I'm Farsin. I design, plan and build things. I'm a chemical engineer by graduation but a developer by profession.
        </p>
      </div>
    </div>
  );
};

export default Index;
