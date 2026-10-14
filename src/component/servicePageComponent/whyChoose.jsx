import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Tailored Solutions",
      description: "We don't do one-size-fits-all. Every strategy is customized specifically to meet your unique goals."
    },
    {
      title: "Proven Track Record",
      description: "Our experienced team delivers consistent quality and measurable results for clients across industries."
    },
    {
      title: "End-to-End Support",
      description: "From initial concept design to continuous post-launch maintenance, we are with you every step of the way."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Here is why partners choose to work with us to accelerate their digital growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;