import './header.css'
import React, { useState } from 'react';


function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
     <header>
        <div className="logo">LUSION</div>
        <div className="controls">
          <button className="btn">LET'S TALK</button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
        </div>
        {isOpen && (
        <div className="dropdown" id="dropdown">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </div>
      )}
      {isOpen && (
        <div className="dropdown2" id="dropdown">
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
