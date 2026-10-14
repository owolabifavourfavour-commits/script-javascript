import React from 'react';

const LocationAbout = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Where to Find Us</h2>
          <p className="text-gray-600 mb-6">
            We operate globally with our headquarters located in the heart of the tech district.
            Drop by for a cup of coffee or schedule a meeting with our team.
          </p>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="font-semibold">Address:</span> 123 Tech Boulevard, Suite 400
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Hours:</span> Mon - Fri: 9:00 AM - 5:00 PM
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Email:</span> contact@company.com
            </p>
          </div>
        </div>

        <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500 font-medium">
          {/* Replace this div with an actual Google Maps iframe or image */}
          Map Placeholder
        </div>
      </div>
    </section>
  );
};

export default LocationAbout;