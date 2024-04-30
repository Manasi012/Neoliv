import React from 'react';
import FounderImage from '../Assets/imgs/founder_bg.png'

const Founder = () => {
  return (
    <>
    <div className='md:flex items-center md:px-28 px-10 bg_light pt-24 mt-20'>
      <div>
        <span className='text-blue-950 font-[400]'>FOUNDER & CEO</span>
        <h4 className='text-indigo-500 font-semibold text-3xl py-4'>Mohit Malhotra</h4>
      </div>

      <div className="flex flex-wrap justify-end text-black font-medium">
      <div className="w-full md:w-1/3 bg-white p-5 shadow-lg rounded-lg md:m-10 my-5">
        <div>
        <p className='md:ps-3'>Joined Godrej Properties in 2010, stepped down on December 31,2022</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-white p-5 shadow-lg rounded-lg md:m-10 my-5">
        <div>
        <p className='md:ps-3'>MD & CEO of Godrej Properties since 2019</p>
        </div>
      </div>
    </div>
    </div>
    {/* <div className='flex justify-center bg_light py-16'>
        <img src={FounderImage} alt="FounderImage" className='md:w-[50%] w-full'/>
    </div> */}
    </>
  )
}

export default Founder
