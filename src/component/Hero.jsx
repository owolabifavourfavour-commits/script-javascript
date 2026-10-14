import React from 'react'

const Hero = () => {
  return (
    <div>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6">

        {/* BACKGROUND IMAGE WITH DARK OVERLAY */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/public/moving.jpeg')" }}
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-75"></div>
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT COLUMN: HEADING & CONTACT */}
          <div className="lg:col-span-7 space-y-6">

            {/* Trusted By Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span>Trusted By 100+</span>
              <div className="flex -space-x-1.5">
                <img className="w-5 h-5 rounded-full border border-white/40" src="/public/relocate.png" alt="Relocate icon" />
                <img className="w-5 h-5 rounded-full border border-white/40" src="/public/moving.jpeg" alt="Moving icon" />
                <img className="w-5 h-5 rounded-full border border-white/40" src="/public/move.png" alt="Move icon" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white tracking-wide">
              <span className="text-blue-500">Foko Removals</span> – Your Move, Our Mission
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm md:text-base max-w-md font-normal leading-relaxed">
              Reliable man & van and removal services, Based in Loughborough, serving across the UK.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-slate-200 font-medium text-sm">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <span>07920021955</span>
              </div>

              <div className="flex items-center gap-3 text-slate-200 font-medium text-sm">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <span>info@fokoremovals.co.uk</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: GLASSMORPHISM FORM */}
          <div id="contact" className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 shadow-2xl space-y-5">
              <h2 className="text-lg font-bold text-white text-center">Client Contact Form</h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-slate-400 text-xs py-1.5 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-slate-400 text-xs py-1.5 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-slate-400 text-xs py-1.5 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Address</label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-slate-400 text-xs py-1.5 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">Message</label>
                  <textarea
                    rows="2"
                    placeholder="Type your message..."
                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-slate-400 text-xs py-1.5 focus:outline-none focus:border-blue-400 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full transition shadow-lg shadow-blue-500/30 active:scale-95 text-xs tracking-wider uppercase mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero