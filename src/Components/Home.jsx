import React from 'react'
import Herosection from './Herosection';
import About from './About';
import OurPurpose from './OurPurpose';
import Founder from './Founder/Founder';
import ThreePillars from './ThreePillars';
import Team from './Team';
import Partners from './Partners';
import NewsInsights from './NewsInsights';



const Home = () => {
  return (
    <>
<Herosection />
<About />
<OurPurpose />
 <Founder />
<ThreePillars />
<Team />
<Partners />
{/* <Insignia /> */}
<NewsInsights />
    </>
  )
}

export default Home
