import React from 'react'
import Bluenavbar from '../Components/Bluenavbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FooterLinks from '../Components/FooterLinks'

const Sustainability = () => {
  return (
    <div>
      <Bluenavbar />
      <Header />
        
    <div className='text-center py-10'>
        <h2 className='text-4xl font-bold text-blue-950'>Sustainability Page</h2>
    </div>

      <Footer />
      <FooterLinks />
    </div>
  )
}

export default Sustainability
