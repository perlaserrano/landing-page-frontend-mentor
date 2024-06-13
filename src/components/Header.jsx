import React, { useEffect } from "react";
import logo from "../images/logo.svg";
import '../css/header.css';


export const Header = () => {
  
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header-content');
      const scrollPosition = window.scrollY;
    
      if (scrollPosition > 0) {
        header.classList.add('scroll-background');
      } else {
        header.classList.remove('scroll-background');
      }
    });
  
  }, []);

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <ul className="nav">
            <li className="nav-item">
              <img src={logo} alt="logo" />
            </li>
          </ul>
        </div>
        <ul className="nav justify-content-end">
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
          <li className="nav-item">
            <a
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "2.5rem",
                transition: "0.25s",
                fontFamily: "Fraunces",
                padding: "0.2rem 2.5rem",
              }}
              className="nav-link"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="creatives">
        <h1>We are creatives</h1>
        <div className="arrow-down">
          <i className="bi bi-arrow-down"></i>{" "}
        </div>
      </div>
    </div>
  );
};
