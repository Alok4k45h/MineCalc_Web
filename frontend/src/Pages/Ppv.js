import React from "react";
import intro from "../Resources/Ppv/PpvIntro";
import Faq from "../Resources/Ppv/PpvFaq";
import PpvCalc from "../Components/LocalComponent/PpvPage/PpvCalc/PpvCalc";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import "./AllPages.css";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";

function Ppv() {
  return (
    <div>
      <ScrollToTop />
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <PpvCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
      \<ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default Ppv;
