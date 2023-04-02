import React from "react";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import AboutSection from "../Components/LocalComponent/AboutPage/AboutSection/AboutSection";
import BannerSection from "../Components/LocalComponent/AboutPage/BannerSection/BannerSection";

function About() {
  return (
    <div>
      <ScrollToTop />
      <BannerSection />
      <AboutSection />
    </div>
  );
}

export default About;
