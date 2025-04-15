import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The staff at Avenue Clinic is exceptional. They made me feel comfortable
              and well-cared for throughout my treatment."
            </p>
            <p className="font-semibold">- Sarah Johnson</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "Professional, caring, and efficient service. I highly recommend
              Avenue Clinic for their outstanding medical care."
            </p>
            <p className="font-semibold">- Michael Brown</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              "The doctors here are knowledgeable and take time to listen to
              their patients. Best medical care I've received."
            </p>
            <p className="font-semibold">- Emily Davis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
