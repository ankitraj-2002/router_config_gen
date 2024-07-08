import React from 'react';
import TeamSlider from  './slider';
import Typewriter from './tagline';
import './landingpage.css';
import IntroductionCard from './intro';
function Landingpage() {
  return (
    <div className='landing'>
      <p className = 'tagline'>Your Ultimate Network Configuration Companion</p>
      <Typewriter text=" Precise Configuration,Zero Hassle" speed={70} />
      <IntroductionCard />
    </div>
  )
}

export default Landingpage