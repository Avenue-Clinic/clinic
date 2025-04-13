// src/components/ContactForm.js
'use client';

import { useState } from 'react';

export default function ContactForm({ dictionary, locale }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({ name: '', phone: '', email: '' });
      setSubmitStatus({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 w-full max-w-5xl mx-auto mt-8">
      <div className="flex-1">
        <input
          type="text"
          name="name"
          placeholder={dictionary.form.name}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a9a7] focus:ring focus:ring-[#00a9a7] focus:ring-opacity-50"
        />
      </div>
      
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {locale === 'tr' && <span className="text-gray-500">🇹🇷</span>}
          {locale === 'en' && <span className="text-gray-500">🇺🇸</span>}
          {locale === 'ar' && <span className="text-gray-500">🇦🇪</span>}
        </div>
        <input
          type="tel"
          name="phone"
          placeholder={dictionary.form.phone}
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:border-[#00a9a7] focus:ring focus:ring-[#00a9a7] focus:ring-opacity-50"
        />
      </div>
      
      <div className="flex-1">
        <input
          type="email"
          name="email"
          placeholder={dictionary.form.email}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00a9a7] focus:ring focus:ring-[#00a9a7] focus:ring-opacity-50"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-[#00a9a7] text-white rounded-lg hover:bg-[#008e8c] transition-colors focus:outline-none focus:ring focus:ring-[#00a9a7] focus:ring-opacity-50 disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          dictionary.form.submit
        )}
      </button>
      
      {submitStatus && (
        <div className={`mt-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
    </form>
  );
}