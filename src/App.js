import './App.css';
import Bluenavbar from '../src/Components/Bluenavbar';
import Header from '../src/Components/Header';
import Home from './Components/Home';
import Footer from '../src/Components/Footer';
import FooterLinks from '../src/Components/FooterLinks';
import Responsive from '../src/Components/Responsive';
import NewsInsights from './Components/NewsInsights';


function App() {
  return (
      <div className="App overflow-hidden">
        <Bluenavbar />
        <Header />
        <Home />
        <Footer />
      <FooterLinks />
    </div>
  );
}

export default App;
