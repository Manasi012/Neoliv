import './App.css';
import React from 'react'
import Bluenavbar from '../src/Components/Header/Bluenavbar';
import Header from '../src/Components/Header/Header';
import Home from './Components/Home';
import Sustainability from './Pages/Sustainability' ;
import Career from './Pages/Career';
import ProfessionallyBuilt from './Pages/ProfessionallyBuilt';
import FinanciallySecure from './Pages/FinanciallySecure';
import CustomerCentric from './Pages/CustomerCentric';
import Footer from '../src/Components/Footer/Footer';
import FooterLinks from '../src/Components/Footer/FooterLinks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JuneMedia from './Pages/JuneMedia';
import NovemberMedia from './Pages/NovemberMedia';
import ScrollToTopOnPageChange from './Components/ScrollToTopOnPageChange';



function App() {
  return (
 
      <div className="App overflow-hidden">
        <Bluenavbar />
        <Header />

        <ScrollToTopOnPageChange />

    
        <Routes>
          <Route path='/Neoliv' element={<Home />}/>
          <Route path='/Neoliv/sustainability' element={<Sustainability />}/>
          <Route path='/Neoliv/career' element={<Career />}/>
          {/* <Route path='/Neoliv/about' element={<Home />}/> */}
          <Route path='/professionallybuilt' element={<ProfessionallyBuilt />}/>
          <Route path='/financiallysecure' element={<FinanciallySecure />}/>
          <Route path='/customercentric' element={<CustomerCentric />}/>
          <Route path='/junemedia' element={<JuneMedia />}/>
          <Route path='/novembermedia' element={<NovemberMedia />}/>

        </Routes>
        <Footer />
        <FooterLinks />
  
    </div>
    
  );
}

export default App;
