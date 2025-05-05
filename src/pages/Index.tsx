
import React, { useEffect } from 'react';
import { 
  Code, 
  FileCode, 
  Cpu, 
  Database, 
  Server, 
  Github,
  User,
  Folder,
  Mail,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Card,
  CardContent
} from '@/components/ui/card';
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
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 font-helvetica">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-light mb-6 terracotta-header">
          Hi, I'm Farsin.
        </h1>
        <p className="text-lg text-brutalist-700 max-w-2xl">
          I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </header>

      {/* Navigation */}
      <nav className="mb-32">
        <ul className="flex flex-wrap gap-8">
          <li>
            <Link to="/about" className="text-xl text-brutalist-900 hover:underline transition-all">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-xl text-brutalist-900 hover:underline transition-all">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl text-brutalist-900 hover:underline transition-all">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/hire-me" className="text-xl text-brutalist-900 hover:underline transition-all">
              Hire Me
            </Link>
          </li>
        </ul>
      </nav>

      {/* Tech Sections - Stacked vertically */}
      <div className="space-y-8">
        {/* Languages Section */}
        <Card className="border-0 shadow-md rounded-lg bg-brutalist-100/80 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-xl font-normal mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Python</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">JavaScript</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">HTML</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">CSS</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">SQL</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">C++</Badge>
            </div>
          </CardContent>
        </Card>
        
        {/* Dev Tools Section */}
        <Card className="border-0 shadow-md rounded-lg bg-brutalist-100/80 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-xl font-normal mb-4">Dev Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">React.JS</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Tailwind CSS</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Express</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Node</Badge>
            </div>
          </CardContent>
        </Card>
        
        {/* AI & ML Section */}
        <Card className="border-0 shadow-md rounded-lg bg-brutalist-100/80 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-xl font-normal mb-4">AI & ML</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">GPT</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">LLMs</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Gemini/GPT APIs</Badge>
            </div>
          </CardContent>
        </Card>
        
        {/* Databases & Backends Section */}
        <Card className="border-0 shadow-md rounded-lg bg-brutalist-100/80 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-xl font-normal mb-4">Databases & Backends</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">MongoDB</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">SQL</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">REST APIs</Badge>
            </div>
          </CardContent>
        </Card>
        
        {/* System Design Section */}
        <Card className="border-0 shadow-md rounded-lg bg-brutalist-100/80 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-xl font-normal mb-4">System Design</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">High availability</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Fault tolerance</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">DB arch</Badge>
            </div>
          </CardContent>
        </Card>
        
        {/* Tools & Software Section */}
        <Card className="border-0 shadow-md rounded-lg bg-brutalist-100/80 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-xl font-normal mb-4">Tools & Software</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Git/GitHub</Badge>
              <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">VS Code</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
