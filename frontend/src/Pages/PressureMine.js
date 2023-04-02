import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import PressureMineCalc from "../Components/LocalComponent/PressureMinePage/PressureMineCalc/PressureMineCalc";
import Faq from "../Resources/PressureMine/PressureMineFaq";
import intro from "../Resources/PressureMine/PressureMineIntro";
import "./AllPages.css";

function PressureMine() {
  return (
    <div>
      <ScrollToTop />
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <PressureMineCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default PressureMine;
