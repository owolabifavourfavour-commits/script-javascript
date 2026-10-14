import React from 'react'
import LandingPage from './Pages/landingPage'
import Navbar from './component/navbar'
import Footer from './component/footer'
import ContactPage from './Pages/contactPage'
import AboutPage from './Pages/aboutPage'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import ServicePages from './Pages/servicePages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/services' element={<ServicePages />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App