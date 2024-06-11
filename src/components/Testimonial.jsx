import React from "react";
import "../css/testimonial.css";
import emilyImage from "../images/image-emily.jpg";
import thomasImage from "../images/image-thomas.jpg";
import jennieImage from "../images/image-jennie.jpg";

export const Testimonial = () => {
  return (
    <>
      <div className="container testimonial-content">
        <h1>Client Testimonials</h1>
      </div>
      <div className="testimonial-grid content-wrapper">
        <div className="testimonial">
          <img src={emilyImage} alt="" />
          <p className="caption">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <div className="figcaption">
            <span>Emily R.</span>
            <p> Marketing Director</p>
          </div>
        </div>
        <div className="testimonial">
          <img src={thomasImage} alt="" />
          <p className="caption">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <div className="figcaption">
            <span>Thomas S.</span>
            <p> Chief Operating Officer</p>
          </div>
        </div>
        <div className="testimonial testimonial-3">
          <img src={jennieImage} alt="" />
          <p className="caption">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <div className="figcaption">
            <span>Jennie F.</span>
            <p> Business Owner</p>
          </div>
        </div>
      </div>
    </>
  );
};
