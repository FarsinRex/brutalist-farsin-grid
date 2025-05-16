
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
        <h1 className="text-lg md:text-xl font-light mb-6 text-brutalist-900">
          Hi, I'm Farsin.
        </h1>
        <p className="text-xl text-brutalist-700 max-w-2xl">
          I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </section>

      {/* Tech Stack Section - Modified layout with smaller boxes */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Languages Card */}
          <Card className="border-0 rounded-lg bg-[#FFF1F9] overflow-hidden h-auto">
            <div className="p-3">
              <h3 className="text-lg font-medium mb-2">Languages</h3>
              <div className="grid grid-cols-2 gap-1 text-sm">
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
          <Card className="border-0 rounded-lg bg-[#39275B] text-white h-auto">
            <div className="p-3">
              <h3 className="text-lg font-medium mb-2">Dev Frameworks</h3>
              <div className="grid grid-cols-2 gap-1 text-sm">
                <div className="p-1">React.JS</div>
                <div className="p-1">Tailwind CSS</div>
                <div className="p-1">Express</div>
                <div className="p-1">Node</div>
              </div>
            </div>
          </Card>
          
          {/* Tech Card */}
          <Card className="border-0 rounded-lg bg-[#E8DDFF] h-auto">
            <div className="p-3">
              <h3 className="text-lg font-medium mb-2">Tech</h3>
              <div className="grid grid-cols-2 gap-1 text-sm">
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
      
      {/* About Section */}
      <section id="about" className="pt-12 scroll-mt-20">
        <div className="grid-layout">
          <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">About</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6">
                I'm from India and I code for passion. I've been building things towards sustainable development and machine learning stuff.
              </p>
              <p className="text-xl mb-6">
                I have been coding from the last 4 years dealing with multiple stuffs include Python, C++, Javascript, Matlab, Tensorflow, Matplotlib, HTML5+CSS3, and many more interesting stuff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="aspect-square bg-brutalist-300 brutal-shadow flex items-center justify-center overflow-hidden">
                <img src="/uploads/photo-1649972904349-6e44c42644a7" alt="Woman sitting on a bed using a laptop" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-brutalist-300 brutal-shadow flex items-center justify-center overflow-hidden">
                <img src="/uploads/photo-1488590528505-98d2b5aba04b" alt="Gray laptop computer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="pt-12 scroll-mt-20">
        <div className="grid-layout">
          <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>
            
            <ul className="grid grid-cols-2 gap-3">
              {[
                { title: "Portfolio Website", link: "#" },
                { title: "Samakiya-fresh", link: "#" },
                { title: "ML Project", link: "#" },
                { title: "Data Visualization Tool", link: "#" }
              ].map((project, index) => (
                <li key={index} className="p-3 bg-brutalist-200 brutal-shadow">
                  <h2 className="text-lg font-bold">{project.title}</h2>
                  <a href={project.link} className="halo-link font-bold underline mt-1 inline-block text-sm">
                    View
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="pt-12 scroll-mt-20">
        <div className="grid-layout">
          <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Contact</h1>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Email", value: "farsin@example.com", link: "mailto:farsin@example.com" },
                { title: "GitHub", value: "github.com/farsin", link: "https://github.com/" },
                { title: "LinkedIn", value: "linkedin.com/in/farsin", link: "https://linkedin.com/" },
                { title: "Twitter", value: "@farsin", link: "https://twitter.com/" }
              ].map((contact, index) => (
                <div key={index} className="p-3 bg-brutalist-200 brutal-shadow">
                  <h2 className="text-base font-bold mb-1">{contact.title}</h2>
                  <a 
                    href={contact.link} 
                    className="halo-link font-medium underline text-sm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Hire Me Section */}
      <section id="hire-me" className="pt-12 pb-16 scroll-mt-20">
        <div className="grid-layout">
          <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-12">Hire Me</h1>
            
            <form className="space-y-6">
              <div className="form-input-with-label">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" "
                  className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
                />
                <label htmlFor="name" className="text-lg font-medium">Name</label>
              </div>
              
              <div className="form-input-with-label">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  required
                  placeholder=" "
                  className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
                />
                <label htmlFor="number" className="text-lg font-medium">Number</label>
              </div>
              
              <div className="form-input-with-label">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder=" "
                  rows={5}
                  className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
                ></textarea>
                <label htmlFor="message" className="text-lg font-medium">Pitch your idea</label>
              </div>
              
              <div className="form-input-with-label">
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  required
                  placeholder=" "
                  className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
                />
                <label htmlFor="budget" className="text-lg font-medium">Budget</label>
              </div>
              
              <button 
                type="submit"
                className="btn-brutalist mt-4 w-full md:w-auto text-center text-lg font-bold py-3 px-8"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
