import React from 'react'

const Body = () => {
  return (
    <div>
      <section id="services" className="bg-white text-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Top Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            {/* Left Title & Subtitle */}
            <div className="space-y-2 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-tight">
                What we offer at <br />
                <span className="text-blue-600 font-sans font-bold">Fokoremovals</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Trusted experts in home and office relocations, furniture collection and timely delivery.
              </p>
            </div>

            <div className="max-w-xs text-slate-400 text-sm leading-relaxed">
              More than 100 Homes, offices, companies have used our services during the years.
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* House Removals Card */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/adam mover 1.png"
                  alt="House Removals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-slate-900 text-base">House Removals</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Trusted experts in home and office furniture collection and timely delivery.
                </p>
              </div>
            </div>

            {/* Office Relocation Card */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/public/relocate.png"
                  alt="Office Relocation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-slate-900 text-base">Office Relocation</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Seamless moves that minimize downtime and keep your business running smoothly.
                </p>
              </div>
            </div>

            {/* Man & Van Services Card */}
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/public/move.png"
                  alt="Man & Van Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-slate-900 text-base">Man & Van Services</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Flexible transport solutions for small or large moves at short notice.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Body