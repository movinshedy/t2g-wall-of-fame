import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import HeroStyled from "../styled/Hero-section.styled";
import backgroundImage from "../../images/background.jpg";
import salad from "../../images/salad.jpg";

function Hero() {
  return (
    <HeroStyled backgroundImage={backgroundImage}>
      <div className="hero-container">
        <div className="hero-text">
          <h5>Hi, I'm Salad</h5>
          <h3>
            Software Engineer, <br />
            Website and web developer, <br />
            Graphic designer, Project Manager
          </h3>
          <p>
            At 23, living in Kenya, I embody an unwavering spirit of
            determination, <br /> a testament to resilience.
          </p>

          <button className="btn">Get Started</button>
          <div className="social-media">
            <h4>Follow me:</h4>
            <div className="social-media-handles">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <div className="hero-image">
            <img src={salad} alt="" />
          </div>
        </div>
      </div>
    </HeroStyled>
  );
}

export default Hero;
