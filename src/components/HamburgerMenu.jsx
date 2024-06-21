// components/HamburgerMenu.js
import React from 'react';
import menuIcon from '../images/icon-hamburger.svg';
import IconClose from "./IconClose"; 
import '../css/header.css';

export const HamburgerMenu = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="menu-icon">
      <button style={{ border: "none", backgroundColor: "transparent" }} onClick={toggleMenu}>
        {menuOpen ? <IconClose /> : <img src={menuIcon} alt="menu icon" />}
      </button>
    </div>
  );
};


