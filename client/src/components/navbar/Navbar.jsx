import React from 'react';
import './navbar.css';
import stpilogo from "./images/stpilogo.png"
import { Link } from 'react-router-dom';
export default function navbar() {
  return (
    <div className='navbar'>
       <img src={stpilogo} alt='' className='logo' />     
      <ul>
        <li><Link to="/presetGen" style={{textDecoration: "none", color:"inherit"}}>PresetGen</Link></li>
        <li><Link to= "/homepage"style={{textDecoration: "none", color:"inherit"}}>HomePage</Link></li>
      </ul>
    </div>
  );
}
