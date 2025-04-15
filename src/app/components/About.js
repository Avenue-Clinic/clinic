import React from 'react';

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Avenue Clinic</h2>
            <p className="text-gray-600 mb-4">
              Avenue Clinic has been providing exceptional healthcare services for over two decades.
              Our team of experienced medical professionals is dedicated to delivering the highest
              quality care to our patients.
            </p>
            <p className="text-gray-600">
              We combine modern medical technology with a compassionate approach to ensure
              the best possible outcomes for our patients.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              {/* Placeholder for clinic image */}
              <div className="bg-gray-200 w-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
