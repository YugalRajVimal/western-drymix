import React from 'react'
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Hero theme colors
const gold = "#fdca00";
const blue = "#0393da";

const HeroSection = () => {
  return (
    <div className="relative z-10 mx-auto px-4 sm:px-6 h-[100vh] min-h-[500px] flex flex-col justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ backgroundColor: blue }}
      >
        {/* Consider updating the video source to a Western Drymix-specific video if available */}
        <source src="https://www.chryso.in/wp-content/uploads/sites/7/2024/09/15-sec-v2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for softening the video, now with a gold/blue blend */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          background: `rgba(0,0,0,0.6)`, 
          mixBlendMode: "multiply"
        }} 
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-white text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight max-w-xl sm:max-w-2xl lg:max-w-5xl drop-shadow-lg"
          style={{ color: gold }}
        >
          Western Drymix: <span className='text-[#0393da]'>Revolutionizing Modern Construction</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-lg sm:max-w-xl lg:max-w-4xl text-base sm:text-lg mb-10"
          style={{
            color: 'rgba(255,255,255,0.87)',
            background: `linear-gradient(90deg, ${gold}11 0%, ${blue}11 100%)`,
            borderLeft: `4px solid ${gold}`,
            paddingLeft: 16
          }}
        >
          Western Drymix is a leading provider of high-performance drymix solutions, offering plasters,
          mortars, tile adhesives, and waterproofing compounds. Committed to innovation, quality, and efficiency,
          we deliver cost-effective and durable construction materials. With cutting-edge manufacturing and a
          customer-first approach, we are revolutionizing modern construction.
        </motion.p>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className=" sm:left-6 sm:right-6 bottom-6 sm:bottom-10 md:bottom-16 max-w-full sm:max-w-5xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Modern Construction"
              className="w-full sm:w-40 md:w-64 h-32 sm:h-40 object-cover rounded-xl mb-4 sm:mb-0"
            />

            {/* Text */}
            <div className="text-white flex-1">
              <h3 className="font-serif text-lg sm:text-xl font-semibold">High-Performance Drymix Solutions</h3>
              <p className="text-xs sm:text-sm text-white/70 mt-2 max-w-xl">
                From plasters and mortars to tile adhesives and waterproofing compounds, our advanced products empower your projects with quality and durability.
              </p>
              <button className="mt-4 bg-[#0393da] hover:bg-blue-700 transition px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-base">
                Explore Our Products
              </button>
         
            </div>
          </div>
        </motion.div>
        {/* Arrows can be styled with new theme if enabled */}
        {/* 
        <div className="absolute bottom-4 sm:bottom-16 left-2 sm:left-4"
             style={{ color: gold }}>
          <button className="border border-white/40 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/40 transition">
            <FiChevronLeft size={20} className="sm:w-auto sm:h-auto" />
          </button>
        </div>
        <div className="absolute bottom-4 sm:bottom-16 right-2 sm:right-4"
             style={{ color: gold }}>
          <button className="border border-white/40 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/40 transition">
            <FiChevronRight size={20} className="sm:w-auto sm:h-auto" />
          </button>
        </div> 
        */}
      </div>
      {/* (No dark overlay, handled by colored overlay above) */}
    </div>
  )
}

export default HeroSection