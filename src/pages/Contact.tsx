
import React from 'react';

const Contact = () => {
  const contacts = [
    {
      title: "Email",
      value: "farsin@example.com",
      link: "mailto:farsin@example.com"
    },
    {
      title: "GitHub",
      value: "github.com/farsin",
      link: "https://github.com/"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/farsin",
      link: "https://linkedin.com/"
    },
    {
      title: "Twitter",
      value: "@farsin",
      link: "https://twitter.com/"
    }
  ];

  return (
    <div className="grid-layout pt-12">
      <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Contact</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <div key={index} className="p-4 bg-brutalist-200 brutal-shadow">
              <h2 className="text-lg font-bold mb-1">{contact.title}</h2>
              <a 
                href={contact.link} 
                className="halo-link font-medium underline" 
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
  );
};

export default Contact;
