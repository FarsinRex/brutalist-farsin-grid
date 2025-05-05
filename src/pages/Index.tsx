
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
    <div className="grid-layout min-h-[calc(100vh-170px)] pt-12 relative">
      <header className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 terracotta-header">
          Hi, I'm Farsin.
        </h1>
      </header>

      <div className="col-span-12 md:col-span-5 md:col-start-7 lg:col-span-4 lg:col-start-8 self-end mb-12">
        <p className="text-sm md:text-md text-brutalist-700">
          I'm Farsin. I design, plan and build things. I'm a chemical engineer by profession, developer by passion.
        </p>
      </div>
      
      <div className="col-span-12 md:col-span-10 md:col-start-2 mt-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-brutalist-900 brutal-shadow bg-brutalist-100/80 hover:translate-y-[-5px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">Languages</h3>
              </div>
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
          
          <Card className="border-2 border-brutalist-900 brutal-shadow bg-brutalist-100/80 hover:translate-y-[-5px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileCode className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">Dev Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">React.JS</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Tailwind CSS</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Express</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Node</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-brutalist-900 brutal-shadow bg-brutalist-100/80 hover:translate-y-[-5px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">AI & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">GPT</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">LLMs</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Gemini/GPT APIs</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-brutalist-900 brutal-shadow bg-brutalist-100/80 hover:translate-y-[-5px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">Databases & Backends</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">MongoDB</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">SQL</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">REST APIs</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-brutalist-900 brutal-shadow bg-brutalist-100/80 hover:translate-y-[-5px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Server className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">System Design</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">High availability</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Fault tolerance</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">DB arch</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-brutalist-900 brutal-shadow bg-brutalist-100/80 hover:translate-y-[-5px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Github className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">Tools & Software</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">Git/GitHub</Badge>
                <Badge className="bg-brutalist-200 text-brutalist-900 hover:bg-brutalist-300">VS Code</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="hidden md:block">
        <nav className="fixed left-6 top-1/3 transform -translate-y-1/2 z-50">
          <ul className="space-y-4 md:space-y-6">
            <li>
              <Link to="/about" className="nav-item group flex items-center">
                <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
                  <User className="w-full h-full" />
                </span>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-item group flex items-center">
                <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
                  <Folder className="w-full h-full" />
                </span>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item group flex items-center">
                <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-full h-full" />
                </span>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/hire-me" className="nav-item group flex items-center">
                <span className="inline-block w-8 h-8 mr-2 p-1 bg-brutalist-900 text-brutalist-100 group-hover:brutal-shadow group-hover:-translate-y-1 transition-all duration-300">
                  <Briefcase className="w-full h-full" />
                </span>
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;
