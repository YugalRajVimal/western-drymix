import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import HomePage from './Pages/HomePage'
import { Footer } from './Components/Footer'
import AboutPage from './Pages/AboutPage'
import ProductsPage from './Pages/ProductsPage'
import ContactUsPage from './Pages/ContactUsPage'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App