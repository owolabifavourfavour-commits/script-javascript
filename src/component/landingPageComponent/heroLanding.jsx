import React from 'react';

const HeroLanding = () => {
  return (
    <section className="bg-slate-900 text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Build Smarter & Scale Faster
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Empowering modern businesses with cutting-edge tools and intuitive solutions to accelerate digital growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
            Get Started
          </button>
          <button className="border border-slate-600 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;