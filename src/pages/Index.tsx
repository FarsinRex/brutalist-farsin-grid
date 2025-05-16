
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Background animation effect inspired by p5aholic.me
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Animation parameters
    const dots: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const dotsCount = Math.min(Math.floor(window.innerWidth / 20), 100); // Responsive dot count
    
    // Create dots
    for (let i = 0; i < dotsCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Slow horizontal velocity
        vy: (Math.random() - 0.5) * 0.5, // Slow vertical velocity
        radius: Math.random() * 2 + 1,   // Random size between 1-3px
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw dots
      dots.forEach(dot => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        // Bounce off walls
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();
      });
      
      // Draw connections between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) { // Connect dots within 100px
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 * (1 - distance / 100)})`; // Fade with distance
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Simple background effect for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', `${x}`);
      document.documentElement.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="space-y-32 relative">
      {/* Background canvas for animation */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-brutalist-900">
          Hi, I'm Farsin.
        </h1>
        <p className="text-xl text-brutalist-700 max-w-2xl">
          I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <h2 className="text-3xl font-normal text-brutalist-900 mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Languages Card */}
          <Card className="border-0 rounded-lg bg-[#FFF1F9] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 18 2-2v-3"></path>
                    <path d="M11 18h5"></path>
                    <path d="M12 12v6"></path>
                    <path d="M17 13a5 5 0 0 0-10 0v3.5a3.5 3.5 0 0 0 7 0"></path>
                    <path d="m8 14-2 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Languages</h3>
              </div>
              <ul className="space-y-2 pl-2">
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>C++</li>
              </ul>
            </div>
          </Card>
          
          {/* Dev Frameworks Card */}
          <Card className="border-0 rounded-lg bg-[#39275B] text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3"></path>
                    <path d="M18.5 13H21"></path>
                    <path d="M8 16l-3-4 3-4"></path>
                    <path d="m16 8 3 4-3 4"></path>
                    <path d="M3 13h3"></path>
                    <path d="m13 16-5-8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Dev Frameworks</h3>
              </div>
              <ul className="space-y-2 pl-2">
                <li>React.JS</li>
                <li>Tailwind CSS</li>
                <li>Express</li>
                <li>Node</li>
              </ul>
            </div>
          </Card>
          
          {/* Tech Card */}
          <Card className="border-0 rounded-lg bg-[#E8DDFF] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Tech</h3>
              </div>
              <ul className="space-y-2 pl-2">
                <li>GPT/LLMs</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>REST APIs</li>
                <li>Git/GitHub</li>
                <li>VS Code</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
