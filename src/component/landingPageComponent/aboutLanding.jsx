import React from 'react';

const AboutLanding = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transforming Ideas Into Digital Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are dedicated to crafting high-performance, scalable web platforms that give businesses a competitive edge. Our team combines innovative design with technical expertise to deliver exceptional results.
          </p>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <span className="block text-3xl font-bold text-indigo-600">99%</span>
              <span className="text-xs text-gray-500 font-medium">Satisfaction Rate</span>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <span className="block text-3xl font-bold text-indigo-600">24/7</span>
              <span className="text-xs text-gray-500 font-medium">Dedicated Support</span>
            </div>
          </div>
        </div>

        <div className="w-full h-80 bg-slate-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium">
          {/* Replace with an image or showcase illustration */}
          Landing Showcase Visual
        </div>
      </div>
    </section>
  );
};

export default AboutLanding;