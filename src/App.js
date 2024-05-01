import './App.css';
import Bluenavbar from '../src/Components/Header/Bluenavbar';
import Header from '../src/Components/Header/Header';
import Home from './Components/Home';
import Footer from '../src/Components/Footer/Footer';
import FooterLinks from '../src/Components/Footer/FooterLinks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App overflow-hidden">

        <Bluenavbar />
        <Header />
        <Home />
        <Footer />
      <FooterLinks />
      
      <Routes>
      <Route path="/" component={FooterLinks} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
