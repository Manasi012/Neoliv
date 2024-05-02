import React from 'react';
import Birdsfly from '../Assets/imgs/birdsfly.png';

const OurPurpose = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-40 px-3">
      <div className="md:w-1/2">
        <img src={Birdsfly} alt="purpose" className='w-full h-[500px]' />
      </div>
      <div className="md:w-1/2 md:p-20 p-8 bg_indigo md:-ml-4 md:rounded-none rounded-xl md:-m-0 -mt-5 space-y-9 text-white">
        <h2 className="text-3xl font-normal">Our Purpose</h2>
        <p className='pt-20 pb-4 md:pe-28 lg:pe-0 text-xl leading-8'>To re-ignite the joy of home owning and living experience, by being themost customer-centric developer in India</p>
      </div>
    </div>
  )
}

export default OurPurpose
