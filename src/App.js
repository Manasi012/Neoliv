import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Bluenavbar from "./Components/Header/Bluenavbar";
import Bluenavbarcopy from "./Components/Header/Bluenavbarcopy";
import Header from "./Components/Header/Header";
import Headercopy from "./Components/Header/Headercopy";
import Home from "./Components/Home";
import Sustainability from "./Pages/Sustainability";
import Career from "./Pages/Career";
import ProfessionallyBuilt from "./Pages/ProfessionallyBuilt";
import FinanciallySecure from "./Pages/FinanciallySecure";
import CustomerCentric from "./Pages/CustomerCentric";
import Footer from "./Components/Footer/Footer";
import FooterLinks from "./Components/Footer/FooterLinks";
import JuneMedia from "./Pages/JuneMedia";
import NovemberMedia from "./Pages/NovemberMedia";
import ScrollToTopOnPageChange from "./Components/ScrollToTopOnPageChange";
import ModalDisclaimer from "./Components/ModalDisclaimer";
import Disclaimer from "./Components/Disclaimer";

function App() {
  const location = useLocation();

  return (
    <div className="App overflow-hidden">
      {/* <Bluenavbar /> */}
      {/* {location.pathname === '/' ? <Bluenavbarcopy /> : <Bluenavbar />} */}
      {location.pathname === '/' ? <Headercopy /> : <Header />}
      <ModalDisclaimer />
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/career" element={<Career />} />
        <Route path="/professionallybuilt" element={<ProfessionallyBuilt />} />
        <Route path="/financiallysecure" element={<FinanciallySecure />} />
        <Route path="/customercentric" element={<CustomerCentric />} />
        <Route path="/junemedia" element={<JuneMedia />} />
        <Route path="/novembermedia" element={<NovemberMedia />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
      <FooterLinks />
    </div>
  );
}

export default App;
