import React from "react";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import AimSection from "../Components/LocalComponent/HomePageComponent/AimSection/AimSection";
import Bannersection from "../Components/LocalComponent/HomePageComponent/BannerSection/BannerSection";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import DomainSection from "../Components/LocalComponent/HomePageComponent/DomainSection/DomainSection";

function HomePage() {
  return (
    <div>
      <ScrollToTop />
      <Bannersection />
      <AimSection />
      <DomainSection />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default HomePage;
