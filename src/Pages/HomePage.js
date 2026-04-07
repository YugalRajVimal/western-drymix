import React from 'react'
import HeroSection from '../Components/HeroSection'
import { Offerings } from '../Components/Offerings'
import { FeatureSlider } from '../Components/FeatureSlider'
import { Stats } from '../Components/Stats'
import { Sustainability } from '../Components/Sustainability'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Offerings />
        <FeatureSlider />
        <Sustainability />
        <Stats />

        
    </div>
  )
}

export default HomePage