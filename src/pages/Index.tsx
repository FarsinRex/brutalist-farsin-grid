
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
        
        {/* Simple Navigation */}
        <div className="mt-24">
          <ul className="flex flex-wrap gap-x-10 gap-y-2">
            <li>
              <Link to="/about" className="text-lg text-brutalist-900 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-lg text-brutalist-900 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg text-brutalist-900 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/hire-me" className="text-lg text-brutalist-900 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-px hover:after:bg-brutalist-900 hover:after:mt-1">
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Sections - Vertical Stacking */}
      <section className="space-y-16">
        <h2 className="text-3xl font-normal text-brutalist-900 mb-8">What I work with</h2>
        
        {/* Languages Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Languages</h3>
          <Card className="border-0 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Python</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">JavaScript</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">HTML</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">CSS</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">SQL</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">C++</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Dev Tools Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Dev Tools</h3>
          <Card className="border-0 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">React.JS</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Tailwind CSS</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Express</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Node</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* AI & ML Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">AI & ML</h3>
          <Card className="border-0 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">GPT</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">LLMs</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Gemini/GPT APIs</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Databases & Backends Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Databases & Backends</h3>
          <Card className="border-0 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">MongoDB</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">SQL</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">REST APIs</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* System Design Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">System Design</h3>
          <Card className="border-0 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">High availability</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Fault tolerance</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">DB arch</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tools & Software Section */}
        <div className="group">
          <h3 className="text-xl font-normal mb-4 text-brutalist-700">Tools & Software</h3>
          <Card className="border-0 rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">Git/GitHub</Badge>
                <Badge className="bg-brutalist-100 text-brutalist-900 hover:bg-brutalist-200 px-4 py-2 rounded-full text-sm">VS Code</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
