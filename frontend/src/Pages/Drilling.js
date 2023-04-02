import React from "react";
import PageBanner from "../Components/GlobalComponent/PageBanner/PageBanner";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import SectionPageContent from "../Components/GlobalComponent/SectionPageContent/SectionPageContent";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import DrillingCard from "../Resources/DrillingList/DrillingList";

function Drilling() {
  return (
    <div>
      <ScrollToTop />
      <PageBanner
        title={"Drilling & Blasting"}
        desc={"Optimizing Drilling and Blasting Through Advanced Calculations"}
      />
      <SectionPageContent
        RockMechanicsFormulaList={DrillingCard}
        sectionName={"Drilling & Blasting Section"}
      />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default Drilling;
