import React from 'react'
import Bluelogo from '../../Assets/imgs/neoliv_logo_blue.png';
import LocationIcon from '../../Assets/imgs/locationicon.png';


const Footer = () => {
  return (
    <>
   <div className='bg-blue-950 w-screen'>
   <div className='py-8 md:flex md:justify-between justify-center items-center'>
      <div className='md:w-52 md:ml-12'>
        <img src={Bluelogo} alt="" />
      </div>
      <div className='md:me-24 flex text-center justify-center md:px-0 px-7  text-white'>
        <h6 className='md:text-lg text-4xl'>India’s foremost  fund led developer</h6>
      </div>
    </div>
    <hr className='md:mx-24 mx-10 mt-12 md:mt-0'/>
     <div className='text-white flex md:justify-start justify-center md:pt-12 pt-20'>
     <div className='md:ml-24'>
         <h3 className='text-2xl pb-6'>Our Addresses</h3>
     </div>
   </div>

   <div className="flex flex-wrap justify-center text-white">
      <div className="w-full md:w-1/3 footer_box p-10 rounded-lg m-10">
      <div className='flex'>
       <img src={LocationIcon} alt=""/>
        <h1 className='ps-3'>Mumbai MMR</h1>
       </div>
        <div className='pt-10'>
        <p className='pe-10 md:ps-3'>4th Floor, First International Financial Center, Plot Nos. C-54 and C-55, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 footer_box p-10 rounded-lg m-10">
      <div className='flex'>
       <img src={LocationIcon} alt=""/>
        <h1 className='ps-3'>Delhi NCR</h1>
       </div>
        <div className='pt-10'>
        <p className='pe-10 md:ps-3'>Level 6, Two Horizon Centre, Golf Course Road, DLF Phase 5, Gurugram, Haryana-122002, India</p>
        </div>
      </div>

    </div>


   {/* <div class="md:flex flex-row md:mx-16 text-white">
   <div className="footer_box p-10 rounded-lg m-10">
       <div className='flex'>
       <img src={LocationIcon} alt=""/>
        <h1 className='ps-3'>Mumbai MMR</h1>
       </div>
        <div className='pt-10'>
        <p className='pe-20 md:ps-3'>4th Floor, First International Financial Center, Plot Nos. C-54 and C-55, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
        </div>
        </div>

        <div className="footer_box p-10 rounded-lg m-10">
        <div className='flex'>
       <img src={LocationIcon} alt=""/>
        <h1 className='ps-3'>Mumbai MMR</h1>
       </div>
       
        <div className='pt-10'>
        <p className='pe-20 md:ps-3'>4th Floor, First International Financial Center, Plot Nos. C-54 and C-55, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
        </div>
        </div>
    </div> */}
    

    </div>
    </>
  )
}

export default Footer
