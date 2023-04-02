import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import RqdCalc from "../Components/LocalComponent/RqdPage/RqdCalc/RqdCalc";
import Faq from "../Resources/Rqd/RqdFaq";
import intro from "../Resources/Rqd/RqdIntro";
import "./AllPages.css";

function Rqd() {
  return (
    <div>
      <ScrollToTop />
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <RqdCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default Rqd;
