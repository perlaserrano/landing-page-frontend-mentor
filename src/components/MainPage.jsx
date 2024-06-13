
import React from "react";
import transformImage from "../images/desktop/image-transform.jpg";
import imagenCup from "../images/desktop/image-stand-out.jpg";
import imagenGraphic from "../images/desktop/image-graphic-design.jpg";
import imagenPhotography from "../images/desktop/image-photography.jpg";
import '../css/main.css';

export const MainPage = () => {
  return (
    <div className="medium-container">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 text-section">
            <h3>Transform your brand.</h3>
            <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <a href="#">Learn more.</a>
          </div>
          <div className="col-md-6">
            <img className="img-section" src={transformImage} alt="Transform your brand" />
          </div>
          <div className="col-md-6">
            <img className="img-section" src={imagenCup} alt="Stand out" />
          </div>
          <div className="col-md-6 text-section">
            <h3>Stand out to the right audience.</h3>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <a href="#">Learn more.</a>
          </div>
          <div className="col-md-6 img-overlay-container">
            <img className="img-section" src={imagenGraphic} alt="Graphic design" />
            <div className="overlay-text-one">
              <h1>Graphic design.</h1>
              <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
          </div>
          <div className="col-md-6 img-overlay-container">
            <img className="img-section" src={imagenPhotography} alt="Photography" />
            <div className="overlay-text-two">
              <h1>Photography.</h1>
              <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
