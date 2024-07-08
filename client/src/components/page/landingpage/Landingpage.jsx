import React from 'react';
import Typewriter from './tagline';
import './landingpage.css';
import IntroductionSlider from './intro';
function Landingpage() {
  return (
    <div className='landing'>
      <p className = 'tagline'>Your Ultimate Network Configuration Companion</p>
      <Typewriter text=" Precise Configuration,Zero Hassle" speed={70} />
      <IntroductionSlider />
    </div>
  )
}

export default Landingpage