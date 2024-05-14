import React from 'react';
import FounderImage from '../../Assets/imgs/founder_bg.png';
import Founder_responsive from './Founder_responsive';
import ResponsiveSlider from './ResponsiveSlider';

const Founder = () => {
  return (
    <>
    
    <div className='md:px-28 px-3 bg_light md:pt-24 mt-20'>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-20 pb-8">
  <div className="md:w-60">
    <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
    <p className='md:-mt-14'><span className='text-blue-950 font-semibold'>FOUNDER & CEO</span></p>
      <h4 className='text-indigo-500 font-semibold text-3xl py-4'>Mohit Malhotra</h4>
    </div>
  </div>
 <div className='hidden md:block'> 
 <div className="md:flex justify-center items-center md:gap-5 gap-0 md:mx-20 mx-5 absolute left-80 -mt-32">
        <div className="bg-white md:h-[9rem] h-auto py-4 md:w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
            <p className='text-center'><br /> Joined Godrej Properties in 2010, stepped down on December 31, 2022</p>
            </div>
            <div className="bg-white md:h-[9rem] h-auto  py-4 w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
            <p className='text-center'><br /> MD & CEO of Godrej Properties <br /> since 2017</p>
            </div>
            <div className="bg-white md:h-[9rem] h-auto px-2 pt-6 w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1000">
            <p className='text-center'>Previously Head of Business Development, Head of Region and Executive Director</p>
            </div>
            <div className="bg-white md:h-[9rem] h-auto  py-4 w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1000">
              <p className='text-center'>Education: BE Mechanical engineering, MBA Strategy and Marketing (Indian Institute of Management, Culcutta)</p>
            </div>
        </div>
 </div>
  <ResponsiveSlider/>
</div>

        </div>

   <div className='hidden md:block bg-[#F4F4FB]'>
   <div className='flex justify-center bg_light py-16' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
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
