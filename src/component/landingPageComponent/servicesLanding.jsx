import React from 'react';

const ServicesLanding = () => {
  const highlights = [
    {
      title: "Fast Performance",
      description: "Optimized architecture ensuring lightning-fast load times and seamless navigation.",
      icon: "⚡"
    },
    {
      title: "Responsive Design",
      description: "Flawless layout adaptation across desktop, tablet, and mobile devices.",
      icon: "📱"
    },
    {
      title: "Enterprise Security",
      description: "Robust data protection mechanisms implemented at every layer.",
      icon: "🔒"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover core features built to help you deliver impact quickly and effectively.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="p-8 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-md transition text-left">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesLanding;