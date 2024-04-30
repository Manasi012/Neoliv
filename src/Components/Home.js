import React from 'react'
import Bluenavbar from './Bluenavbar';
import Header from './Header';
import Herosection from './Herosection';
import About from './About';
import OurPurpose from './OurPurpose';
import Founder from './Founder';
// import ThreePillars from './ThreePillars';
// import Team from './Team';
// import Insignia from './Insignia';
// import NewsInsights from './NewsInsights';
import Footer from './Footer';
import FooterLinks from './FooterLinks';


const Home = () => {
  return (
    <>
<Bluenavbar />
<Header />
<Herosection />
<About />
<OurPurpose />
 <Founder />
{/* <ThreePillars />
<Team />
<Insignia />
<NewsInsights /> */}
<Footer />
<FooterLinks />
    </>
  )
}

export default Home
