import React from 'react';
import { Link } from 'react-router-dom';

const SummarySection = () => {
  return (
    <section id="summary" className="text-center py-8">
      <div className="container mx-auto">
        <p className="text-lg mb-4">Experience the power of comprehensive portfolio management with our app. Track, analyze, and grow your investments with ease.</p>
        <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Get Started</Link>
      </div>
    </section>
  );
};

export default SummarySection;