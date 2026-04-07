import React from 'react'
import { AboutUsHeader } from '../Components/AboutPage/AboutHeader'
import { AboutIntro } from '../Components/AboutPage/AboutIntro'
import { AboutFeatures } from '../Components/AboutPage/AboutFeatures'
import { OurValues } from '../Components/AboutPage/OurValues'
import { WesternDrymixDetails } from '../Components/AboutPage/WesternDrymixDetails'

const AboutPage = () => {
  return (
    <div>
        <AboutUsHeader />
        <AboutIntro />
        <AboutFeatures />
        <OurValues />
        <WesternDrymixDetails />
    
    </div>
  )
}

export default AboutPage