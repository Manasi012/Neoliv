import React from 'react'
import Bluelogo from '../../Assets/imgs/neoliv_logo_blue.png';
import LocationIcon from '../../Assets/imgs/locationicon.png';


const Footer = () => {
  return (
    <>
   <div className='bg-blue-950 w-screen'>
   <div className='py-3 md:flex md:justify-between justify-center items-center'>
      <div className='md:w-52 md:ml-20'>
        <img src={Bluelogo} alt="" />
      </div>
      <div className='md:me-40 flex text-center justify-center md:px-0 px-0 text-white'>
        <h6 className='md:text-lg text-3xl'>India’s foremost  fund led developer</h6>
      </div>
    </div>
    <hr className='md:mx-32 mx-10 mt-12 md:mt-0 md:me-40'/>
     <div className='text-white flex md:justify-start justify-center md:pt-5 pt-20'>
     <div className='md:ml-32'>
         <h3 className='text-2xl pb-0'>Our Addresses</h3>
     </div>
   </div>

   <div className="flex flex-wrap justify-between text-white md:mx-20">
      <div className="w-full md:w-[40%] footer_box md:p-10 p-6 rounded-lg mx-10 m-10">
      <div className='flex'>
       <img src={LocationIcon} alt=""/>
        <h1 className='ps-3'>Mumbai MMR</h1>
       </div>
        <div className='pt-5'>
        <p className='md:pe-10 md:ps-3'>4th Floor, First International Financial Center, Plot Nos. C-54 and C-55, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
        </div>
      </div>

      <div className="w-full md:w-[40%] footer_box md:p-10 p-6 rounded-lg m-10 md:mx-20">
      <div className='flex'>
       <img src={LocationIcon} alt=""/>
        <h1 className='ps-3'>Delhi NCR</h1>
       </div>
        <div className='pt-5'>
        <p className='md:pe-10 md:ps-3'>Level 6, Two Horizon Centre, Golf Course Road, DLF Phase 5, Gurugram, Haryana-122002, India</p>
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
