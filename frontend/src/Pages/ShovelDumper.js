import React from "react";
import FrequentlyAskedQuestion from "../Components/GlobalComponent/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import Faq from "../Resources/ShovelDumper/ShovelDumperFaq";
import intro from "../Resources/ShovelDumper/ShovelDumperIntro";
import ShovelDumperCalc from "../Components/LocalComponent/ShovelDumperPage/ShovelDumperCalc/ShovelDumperCalc";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";

function ShovelDumper() {
  return (
    <div>
      <ScrollToTop />
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <ShovelDumperCalc />
      <FrequentlyAskedQuestion Faq={Faq} />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default ShovelDumper;
