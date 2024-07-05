import React from 'react';
import TeamSlider from  './slider';
import Typewriter from './tagline';
import './landingpage.css';
function Landingpage() {
  return (
    <div>
      <p className = 'tagline'>Your Ultimate Network Configuration Companion</p>
    
      <Typewriter text="Precise Configuration,Zero Hassle" speed={70} />
      <TeamSlider />
    </div>
  )
}

export default Landingpage