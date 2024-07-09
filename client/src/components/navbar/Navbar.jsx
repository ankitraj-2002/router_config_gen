import React from 'react';
import './navbar.css';
import stpilogo from "../images/logo.png";
import logo from "../images/trial2.png";
import homeActive from "../images/home-icon-active.png";
import homeInactive from "../images/home-icon-inactive.png";
import presetGenActive from "../images/presetGen-active.png";
import presetGenInactive from "../images/presetGen-inactive.png";
import configGenActive from "../images/configGen-active.png";
import configGenInactive from "../images/configGen-inactive.png";
import sshInactive from "../images/ssh-inactive.png";
import sshActive from "../images/ssh-active.png";

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='nav'>
      <img src={stpilogo} alt='logo' className='logo' />
      <ul>
        <li> <NavLink to="/" className='nav-link'>
              {({ isActive }) => (
                <>
                  <img src={isActive ? homeActive : homeInactive} alt="" className='nav-icon' />
                </>
              )}
            </NavLink></li>
        <li><NavLink to="/presetGen"   className='nav-link'>{({ isActive }) => (
                <>
                  <img src={isActive ? presetGenActive :presetGenInactive} alt="" className='nav-icon' />
                  <span>&nbsp;configGen</span>
                </>
              )}
        </NavLink></li>
        <li><NavLink to="/homepage"  className='nav-link'>
        {({ isActive }) => (
                <>
                  <img src={isActive ? configGenActive :configGenInactive} alt="" className='nav-icon' />
                  <span>&nbsp;configGen</span>
                  
                </>
              )}</NavLink></li>
        <li><NavLink to="/terminal" className='nav-link'>
          {({ isActive }) => (
                <>
                  <img src={isActive ? sshActive :sshInactive} alt="" className='nav-icon' />
                  <span>&nbsp;Terminal</span>
                  
                </>
              )}
        </NavLink></li>
      </ul>
    </div>
    <div className='logocontainer'>
      <img className='logo2' src = {logo} alt = ""></img>
    </div>
    </div>
  );
}


