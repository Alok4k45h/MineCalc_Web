import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import PowderFactorCalc from "../Components/LocalComponent/BurdenSpacingPage/PowderFactorCalc/PowderFactorCalc";
import BurdenSpacingBigData from "../Components/LocalComponent/BurdenSpacingPage/BurdenSpacingBigData/BurdenSpacingBigData";
import Faq from "../Resources/BurdenSpacing/BurdenSpacingFaq";
import intro from "../Resources/BurdenSpacing/BurdenSpacingIntro";
import "./AllPages.css";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";

// BurdenSpacing Page
function BurdenSpacing() {
  return (
    <div>
      <ScrollToTop />
      {/*Component call For BurdenSpacing page*/}
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <PowderFactorCalc />
      <BurdenSpacingBigData />
      <FrequentlyAskedQuestion Faq={Faq} />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default BurdenSpacing;
