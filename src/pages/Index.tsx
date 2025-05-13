
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-brutalist-900">
          Hi, I'm Farsin.
        </h1>
        <p className="text-xl text-brutalist-700 max-w-2xl">
          I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </section>

      {/* Tech Stack Section - Updated design */}
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
