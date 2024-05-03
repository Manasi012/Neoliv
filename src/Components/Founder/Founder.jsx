import React from 'react';
import FounderImage from '../../Assets/imgs/founder_bg.png';
import Founder_responsive from './Founder_responsive';
import ResponsiveSlider from './ResponsiveSlider';

const Founder = () => {
  return (
    <>
    
    <div className='md:px-28 px-10 bg_light pt-24 mt-20'>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
  <div className="md:w-96">
    <div className="text-center md:text-left">
      <span className='text-blue-950 font-semibold'>FOUNDER & CEO</span>
      <h4 className='text-indigo-500 font-semibold text-3xl py-4'>Mohit Malhotra</h4>
    </div>
  </div>
  <ResponsiveSlider />
</div>

        </div>

   <div className='hidden md:block'>
   <div className='flex justify-center bg_light py-16'>
        <img src={FounderImage} alt="FounderImage" className='md:w-[50%] w-full'/>
    </div>
   </div>

   <div className='md:hidden'>
      <Founder_responsive />
   </div>
    </>
  )
}

export default Founder
