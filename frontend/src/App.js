import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// importing all pages
import BurdenSpacing from "./Pages/BurdenSpacing";
import HomePage from "./Pages/HomePage";
import Ppv from "./Pages/Ppv";
import Npv from "./Pages/Npv";
import Rqd from "./Pages/Rqd";
import PressureMine from "./Pages/PressureMine";
import ShovelDumper from "./Pages/ShovelDumper";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

//importing css
import "./App.css";

//importing Global Component
import ScrollToTop from "./Components/GlobalComponent/ScrollToTop/ScrollToTop";
import Top from "./Components/GlobalComponent/Top/Top";
import Navbars from "./Components/GlobalComponent/Navbars/Navbars";
import FooterSection from "./Components/GlobalComponent/Footer/FooterSection";
import RockMechanics from "./Pages/RockMechanics";
import Ventilation from "./Pages/Ventilation";
import Drilling from "./Pages/Drilling";
import Planning from "./Pages/Planning";
import PenetrationRate from "./Pages/PenetrationRate";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbars />
        <Routes>
          {/*Creating route for every page*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rockmechanics" element={<RockMechanics />} />
          <Route path="/ventilation" element={<Ventilation />} />
          <Route path="/drilling" element={<Drilling />} />
          <Route path="/planning" element={<Planning />} />

          {/* Creating Route for Every Formula */}
          <Route path="/burdenspacing" element={<BurdenSpacing />} />
          <Route path="/ppv" element={<Ppv />} />
          <Route path="/npv" element={<Npv />} />
          <Route path="/rqd" element={<Rqd />} />
          <Route path="/pressuremine" element={<PressureMine />} />
          <Route path="/shoveldumper" element={<ShovelDumper />} />
          <Route path="/penetrationrate" element={<PenetrationRate />} />
        </Routes>
        <Top />
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;



// # references
// https://stackoverflow.com/questions/42640636/react-must-be-in-scope-when-using-jsx-react-react-in-jsx-scope