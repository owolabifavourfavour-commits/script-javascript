import React from 'react';

const InfoContact = () => {
  const contactDetails = [
    {
      title: "Email Us",
      value: "support@company.com",
      description: "Send us an email anytime."
    },
    {
      title: "Call Us",
      value: "+1 (555) 000-1234",
      description: "Mon-Fri from 8am to 5pm."
    },
    {
      title: "Visit Us",
      value: "123 Tech Boulevard, Suite 400",
      description: "Come say hello at our office."
    }
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-indigo-600 font-semibold mb-2">{item.value}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoContact;