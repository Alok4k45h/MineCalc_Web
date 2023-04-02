import React from "react";
//import Typewriter from "typewriter-effect";
import "./BannerSection.css";

function BannerSection() {
  return (
    <div
      className="banner-sections-bg-about-container d-flex justify-content-center flex-column"
      style={{
        backgroundImage: `url(https://www.shutterstock.com/image-illustration/telephone-envelope-letter-email-symbols-260nw-1784113403.jpg)`,
      }}
    >
      <div className="text-center">
        <h1 className="banner-about-heading mb-3">
          Our Aim is to help, inspire and excite through creativity and New
          Cutting-Edge Technology
        </h1>
        <p className="banner-about-caption mb-4">We are Mining Engineers</p>
      </div>
    </div>
  );
}

export default BannerSection;
