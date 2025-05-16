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
        <h1 className="text-3xl md:text-4xl font-light mb-6 text-brutalist-900">
          Hi, I'm Farsin.
        </h1>
        <p className="text-xl text-brutalist-700 max-w-2xl">
          I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </section>

      {/* Tech Stack Section - Modified layout */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Languages Card */}
          <Card className="border-0 rounded-lg bg-[#FFF1F9] overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-medium mb-3">Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-1">Python</div>
                <div className="p-1">JavaScript</div>
                <div className="p-1">HTML</div>
                <div className="p-1">CSS</div>
                <div className="p-1">SQL</div>
                <div className="p-1">C++</div>
              </div>
            </div>
          </Card>
          
          {/* Dev Frameworks Card */}
          <Card className="border-0 rounded-lg bg-[#39275B] text-white">
            <div className="p-4">
              <h3 className="text-xl font-medium mb-3">Dev Frameworks</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-1">React.JS</div>
                <div className="p-1">Tailwind CSS</div>
                <div className="p-1">Express</div>
                <div className="p-1">Node</div>
              </div>
            </div>
          </Card>
          
          {/* Tech Card */}
          <Card className="border-0 rounded-lg bg-[#E8DDFF]">
            <div className="p-4">
              <h3 className="text-xl font-medium mb-3">Tech</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-1">GPT/LLMs</div>
                <div className="p-1">MongoDB</div>
                <div className="p-1">SQL</div>
                <div className="p-1">REST APIs</div>
                <div className="p-1">Git/GitHub</div>
                <div className="p-1">VS Code</div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
