
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  number: string;
  message: string;
  budget: string;
}

const HireMe = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    number: '',
    message: '',
    budget: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real project, you would send this to a database
    // For now, we'll just show a toast notification
    toast({
      title: "Inquiry sent!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });
    
    // Reset the form
    setFormData({
      name: '',
      number: '',
      message: '',
      budget: ''
    });
  };
  
  return (
    <div className="grid-layout pt-12">
      <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Hire Me</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            />
          </div>
          
          <div>
            <label htmlFor="number" className="block text-lg font-medium mb-2">Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">What is in your mind</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="budget" className="block text-lg font-medium mb-2">Budget</label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            />
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
  );
};

export default HireMe;
