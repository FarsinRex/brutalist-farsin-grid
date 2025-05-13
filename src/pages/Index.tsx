
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
      {/* Hero Section with Huge Whitespace */}
      <section className="min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-brutalist-900">
          Hi, I'm Farsin.
        </h1>
        <p className="text-xl text-brutalist-700 max-w-2xl">
          I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </section>

      {/* Skills Sections - Vertical Stacking */}
      <section className="space-y-20">
        <h2 className="text-3xl font-normal text-brutalist-900 mb-12">What I work with</h2>
        
        {/* Languages Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Languages</h3>
          <Card className="border-0 rounded-lg bg-gradient-to-r from-amber-100 to-orange-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-3">
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">Python</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">JavaScript</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">HTML</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">CSS</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">SQL</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">C++</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Dev Tools Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Dev Tools</h3>
          <Card className="border-0 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-3">
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">React.JS</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">Tailwind CSS</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">Express</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">Node</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* AI & ML Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">AI & ML</h3>
          <Card className="border-0 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-3">
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">GPT</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">LLMs</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">Gemini/GPT APIs</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Databases & Backends Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Databases & Backends</h3>
          <Card className="border-0 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-3">
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">MongoDB</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">SQL</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">REST APIs</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tools & Software Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Tools & Software</h3>
          <Card className="border-0 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-3">
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">Git/GitHub</Badge>
                <Badge className="w-fit bg-amber-500/20 text-amber-800 hover:bg-amber-500/30 px-4 py-2 rounded-full text-sm">VS Code</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
