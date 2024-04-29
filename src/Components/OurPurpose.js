import React from 'react';
import Birdsfly from '../Assets/imgs/birdsfly.png';

const OurPurpose = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-40">
      <div className="md:w-1/2">
        <img src={Birdsfly} alt="purpose" className='w-full' />
      </div>
      <div className="md:w-1/2 p-20 bg_indigo -ml-4 space-y-9 text-white">
        <h2 className="text-3xl font-normal">Our Purpose</h2>
        <p className='md:pt-28 pe-28 text-xl leading-8'>To re-ignite the joy of home owning and living experience, by being themost customer-centric developer in India</p>
      </div>
    </div>
  )
}

export default OurPurpose
