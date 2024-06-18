import React, { useEffect, useState } from "react";
import menuIcon from '../images/icon-hamburger.svg';
import IconClose from "./IconClose"; 
import logo from "../images/logo.svg";
import '../css/header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header-content');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        header.classList.add('scroll-background');
      } else {
        header.classList.remove('scroll-background');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon">
          <button style={{border: "none", backgroundColor: "transparent"}} onClick={toggleMenu}>
            {menuOpen ? <IconClose /> : <img src={menuIcon} alt="menu icon" />}
          </button>
        </div>
        <ul className={`nav justify-content-end ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item contact">
            <a className={`nav-link ${menuOpen ? 'mobile-contact' : 'contact'}`} href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="creatives">
        <h1>We are creatives</h1>
        <div className="arrow-down">
          <i className="bi bi-arrow-down"></i>
        </div>
      </div>
    </div>
  );
};
