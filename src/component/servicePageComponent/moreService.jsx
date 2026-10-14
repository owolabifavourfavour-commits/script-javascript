import React from 'react';

const MoreService = () => {
  const serviceList = [
    {
      title: "Web Development",
      description: "Fast, responsive, and secure web applications built using modern frameworks like React and Next.js.",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user experience interfaces that enhance user engagement and drive conversions.",
      icon: "🎨"
    },
    {
      title: "Cloud Infrastructure",
      description: "Reliable cloud architecture and API solutions to ensure high availability and smooth deployment.",
      icon: "☁️"
    },
    {
      title: "Digital Strategy",
      description: "Data-driven growth strategies to optimize your brand presence and increase customer acquisition.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore All Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive services structured to power every aspect of your project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {serviceList.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:border-indigo-200 hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreService;