import React from "react";
import PageBanner from "../Components/GlobalComponent/PageBanner/PageBanner";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import SectionPageContent from "../Components/GlobalComponent/SectionPageContent/SectionPageContent";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import VentilationCard from "../Resources/VentilationList/VentilationList";

function Ventilation() {
  return (
    <div>
      <ScrollToTop />
      <PageBanner
        title={"Mine Ventilation"}
        desc={
          "Enhancing Undergound Mine Safety with Accurate Ventilation Calculations"
        }
      />
      <SectionPageContent
        RockMechanicsFormulaList={VentilationCard}
        sectionName={"Mine Ventilation Section"}
      />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default Ventilation;
