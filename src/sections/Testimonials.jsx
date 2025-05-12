// Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'Great developer! Delivered everything on time and exceeded expectations.'
    },
    {
      name: 'John Smith',
      feedback: 'Highly professional and easy to work with. Would definitely hire again.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-md shadow-md">
              <p className="text-gray-300 mb-4">"{t.feedback}"</p>
              <h4 className="text-lg font-semibold text-indigo-400">- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
