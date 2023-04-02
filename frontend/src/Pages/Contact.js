import React from "react";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import AboutSection from "../Components/LocalComponent/AboutPage/AboutSection/AboutSection";
import BannerSection from "../Components/LocalComponent/AboutPage/BannerSection/BannerSection";
import ContactSection from "../Components/LocalComponent/ContactPage/ContactSection/ContactSection";
import DeveloperSection from "../Components/LocalComponent/ContactPage/DeveloperSection/DeveloperSection";

function Contact() {
  return (
    <div>
      <ScrollToTop />
      <BannerSection />
      <AboutSection />
      <ContactSection />
      <DeveloperSection />
    </div>
  );
}

export default Contact;
