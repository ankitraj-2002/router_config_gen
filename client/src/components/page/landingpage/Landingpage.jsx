import React from 'react';
import Typewriter from './tagline';
import './landingpage.css';
import IntroductionSlider from './intro';
import Footer from './footer';
function Landingpage() {
  return (
    <div className='landing'>
      <p className = 'tagline'>Your Ultimate Network Configuration Companion</p>
      <Typewriter text=" Precise Configuration,Zero Hassle" speed={70} />
      <IntroductionSlider />
      <Footer />
    </div>
  )
}

export default Landingpage