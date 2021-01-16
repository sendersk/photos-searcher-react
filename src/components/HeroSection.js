import React from "react";
import "./HeroSection.css";
import backgroundImage from "../images/home-background.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={backgroundImage} alt="" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-header">Unsplash</h1>
        <h2 className="hero-subHeader">
          The internet's source of freely-usable images.
          <br />
          Powered by creators everywhere.
        </h2>
        <p className="hero-tags">Trending: flower, wallpaper, backgrounds, happy, love</p>
      </div>
    </div>
  );
}

export default HeroSection;
