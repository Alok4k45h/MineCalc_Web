import React from "react";
import PageBanner from "../Components/GlobalComponent/PageBanner/PageBanner";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import SectionPageContent from "../Components/GlobalComponent/SectionPageContent/SectionPageContent";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import PlanningCard from "../Resources/PlanningList/PlanningList";

function Planning() {
  return (
    <div>
      <ScrollToTop />
      <PageBanner
        title={"Mine Planning & Economics"}
        desc={
          "Optimizing Profits: The Intersection of Mine Planning and Economic Analysis"
        }
      />
      <SectionPageContent
        RockMechanicsFormulaList={PlanningCard}
        sectionName={"Mine Planning & Economics Section"}
      />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default Planning;
