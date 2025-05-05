
import React from 'react';

const About = () => {
  return (
    <div className="grid-layout pt-12">
      <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">About</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6">
            I'm from India and I code for passion. I've been building things towards sustainable development and machine learning stuff.
          </p>
          <p className="text-xl mb-6">
            I have been coding from the last 4 years dealing with multiple stuffs include Python, C++, Javascript, Matlab, Tensorflow, Matplotlib, HTML5+CSS3, and many more interesting stuff.
          </p>
          <p className="text-xl mb-6">
            Despite the fact that I'm not from a CS background doesn't quench my thirst to talk with computers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="aspect-square bg-brutalist-300 brutal-shadow flex items-center justify-center text-brutalist-700">
            <span className="text-xl">Photo 1</span>
          </div>
          <div className="aspect-square bg-brutalist-300 brutal-shadow flex items-center justify-center text-brutalist-700">
            <span className="text-xl">Photo 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
