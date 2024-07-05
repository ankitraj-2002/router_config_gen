import React from 'react';
import './navbar.css';
import stpilogo from "../images/logo.png";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src={stpilogo} alt='logo' className='logo' />
      <ul>
        <li><NavLink to ="/landingpage">Home</NavLink></li>
        <li><NavLink to="/presetGen" >PresetGen</NavLink></li>
        <li><NavLink to="/homepage" >ConfigGen</NavLink></li>
        <li><NavLink to="/terminal" >Terminal</NavLink></li>
      </ul>
    </div>
  );
}
