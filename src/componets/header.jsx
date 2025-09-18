import './header.css'
import React, { useState } from 'react';


function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
     <header>
        <div className="animate__animated animate__fadeInRight logo">LUSION</div>
        <div className="controls">
          <button className="btn animate__animated animate__fadeInLeft">LET'S TALK</button>
          <button className="menu-toggle animate__animated animate__fadeInLeft" onClick={toggleMenu}>
            {isOpen ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
        </div>
        {isOpen && (
        <div className="dropdown animate_animated animate__fadeInDown" id="dropdown">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </div>
      )}
      {isOpen && (
        <div className="dropdown2 animate_animated animate__fadeInUp" id="dropdown">
          <div className="newsletter">
            <p><strong>Subscribe to our newsletter</strong></p>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      )}
      </header>
  )
}

export default Header
