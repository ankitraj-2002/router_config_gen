import React from 'react'
import './display.css'


const Display = ({CommandString}) => {
  return(
    <div className = "display">{CommandString}</div>
  ) 
};

export default Display;