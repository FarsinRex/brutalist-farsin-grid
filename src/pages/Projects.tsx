
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      link: "#"
    },
    {
      title: "Samakiya-fresh",
      link: "#"
    },
    {
      title: "ML Project",
      link: "#"
    },
    {
      title: "Data Visualization Tool",
      link: "#"
    }
  ];

  return (
    <div className="grid-layout pt-12">
      <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Projects</h1>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <li key={index} className="p-4 bg-brutalist-200 brutal-shadow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <a href={project.link} className="halo-link font-bold underline mt-2 inline-block">
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
