import React from "react";
import PageBanner from "../Components/GlobalComponent/PageBanner/PageBanner";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import SectionPageContent from "../Components/GlobalComponent/SectionPageContent/SectionPageContent";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import RockMechanicsCard from "../Resources/RockMechanicsList/RockMechanicsList";
function RockMechanics() {
  return (
    <div>
      <ScrollToTop />
      <PageBanner
        title={"Rock Mechanics"}
        desc={
          "Optimizing Mining Operations through Advanced Rock Mechanics Analysis"
        }
      />
      <SectionPageContent
        RockMechanicsFormulaList={RockMechanicsCard}
        sectionName={"Rock Mechanics Section"}
      />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default RockMechanics;
