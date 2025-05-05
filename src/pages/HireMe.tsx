
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this data to a backend API endpoint
      // For this demo, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      
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
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="grid-layout pt-12">
      <div className="col-span-12 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Hire Me</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-input-with-label">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            />
            <label htmlFor="name" className="text-lg font-medium">Name</label>
          </div>
          
          <div className="form-input-with-label">
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            />
            <label htmlFor="number" className="text-lg font-medium">Number</label>
          </div>
          
          <div className="form-input-with-label">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows={5}
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            ></textarea>
            <label htmlFor="message" className="text-lg font-medium">Pitch your idea</label>
          </div>
          
          <div className="form-input-with-label">
            <input
              type="text"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              placeholder=" "
              className="w-full border-2 border-brutalist-900 p-3 bg-brutalist-100 brutal-shadow"
            />
            <label htmlFor="budget" className="text-lg font-medium">Budget</label>
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="btn-brutalist mt-4 w-full md:w-auto text-center text-lg font-bold py-3 px-8"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HireMe;
