import React from 'react';

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service cards will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">General Checkup</h3>
            <p className="text-gray-600">Comprehensive health assessment and preventive care</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Specialized Treatment</h3>
            <p className="text-gray-600">Expert care for specific medical conditions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Emergency Care</h3>
            <p className="text-gray-600">24/7 emergency medical services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
