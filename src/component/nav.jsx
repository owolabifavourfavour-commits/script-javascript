import React from 'react'

const Nav = () => {
  return (
    <div>
      <header class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg">
        <nav class="bg-white text-slate-800 py-2.5 px-6 rounded-full shadow-2xl flex items-center justify-between border border-white/20">

          <a href="#home" class="flex items-center gap-2 text-blue-600 font-extrabold text-base tracking-wide">
            <i class="fa-solid fa-bullseye text-lg"></i>
            <span>FOKOREMOVALS</span>
          </a>

          <ul class="flex items-center gap-5 font-semibold text-slate-700 text-sm">
            <li><a href="#home" class="text-blue-600 hover:text-blue-700 transition">Home</a></li>
            <li><a href="#contact" class="hover:text-blue-600 transition">Contact</a></li>
            <li><a href="#services" class="hover:text-blue-600 transition">Service</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav