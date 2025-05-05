
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A brutalist design portfolio showcasing my work and skills.",
      link: "#"
    },
    {
      title: "Samakiya-fresh",
      description: "A fish-market e-commerce website with online ordering system.",
      link: "#"
    },
    {
      title: "ML Project",
      description: "Machine learning project focused on sustainable development.",
      link: "#"
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive data visualization built with Python and D3.js.",
      link: "#"
    }
  ];

  return (
    <div className="grid-layout pt-12">
      <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>
        
        <ul className="space-y-8">
          {projects.map((project, index) => (
            <li key={index} className="p-6 bg-brutalist-200 brutal-shadow">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="halo-link font-bold underline">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
