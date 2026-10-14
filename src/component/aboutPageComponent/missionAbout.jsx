import React from 'react';

const MissionAbout = () => {
  const values = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to create efficient, forward-thinking solutions."
    },
    {
      title: "Integrity",
      description: "Building trust through honest communication and consistent, quality delivery."
    },
    {
      title: "Excellence",
      description: "Striving for the highest quality in every component and feature we build."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          To simplify complex workflows by creating intuitive, powerful digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAbout;