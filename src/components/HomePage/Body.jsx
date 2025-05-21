import React from 'react';
import images from '../assets/images.js';

const Body = () => {
  return (
    <div>
      <section className="hero-section bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: `url(${images[0]})` }}>
        <h1 className="text-5xl text-white font-bold">Discover Your Perfect Home</h1>
      </section>
      <div className="container mx-auto px-4">
        {/* Rest of the homepage content here */}
      </div>
    </div>
  );
};

export default Body;