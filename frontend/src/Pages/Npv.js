import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import NpvCalc from "../Components/LocalComponent/NpvPage/NpvCalc/NpvCalc";
import Faq from "../Resources/Npv/NpvFaq";
import intro from "../Resources/Npv/NpvIntro";
import "./AllPages.css";

function Npv() {
  return (
    <div>
      <ScrollToTop />
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <NpvCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default Npv;
