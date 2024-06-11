import React from "react";
import '../css/header.css';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Sunnyside</a>
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
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="creatives">
        <h1>We are creatives</h1>
      <div className="arrow-down">
        <i className="bi bi-arrow-down"></i> {/* Icono de Bootstrap */}
      </div>
      </div>
    </div>
  );
};
