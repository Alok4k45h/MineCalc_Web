import React from "react";
import PageIntro from "../Components/GlobalComponent/PageIntro/PageIntro";
import ScrollToTop from "../Components/GlobalComponent/ScrollToTop/ScrollToTop";
import CalculationCard from "../Components/LocalComponent/HomePageComponent/CalculationCard/CalculationCard";
import ContactUsSection from "../Components/LocalComponent/HomePageComponent/ContactUsSection/ContactUsSection";
import ToolSelection from "../Components/LocalComponent/PenetrationPage/ToolSelection/ToolSelection";
import intro from "../Resources/PenetrationRate/PenetrationRateIntro";

function PenetrationRate() {
  return (
    <div>
      <ScrollToTop />
      <PageIntro
        heading={intro.heading}
        description={intro.description}
        imgLink={intro.imgLink}
      />
      <ToolSelection />
      <ContactUsSection />
      <CalculationCard />
    </div>
  );
}

export default PenetrationRate;
