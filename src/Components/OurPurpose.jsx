import React from 'react';
import Birdsfly from '../Assets/imgs/birdsfly.png';
import FinalLogo from '../Assets/imgs/NeoLivInsignia.png';

const OurPurpose = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-40 px-3">
      <div className="md:w-1/2">
        <img src={Birdsfly} alt="purpose" className='w-full md:h-[500px] h-auto' />
      </div>
      <div className="md:w-1/2 h-[500px] relative md:p-20 px-8 py-0 bg_indigo md:-ml-4 md:rounded-none rounded-xl md:-m-0 -mt-5 text-white">
        <img src={FinalLogo} alt="FinalLogo" className='absolute md:w-80 w-full top-0 -right-12 opacity-10'/>
        <h2 className="text-4xl md:mt-0 mt-16  font-normal">Our Purpose</h2>
        <p className='md:pt-36 pt-20 pb-4 md:me-56 lg:me-0 text-xl leading-8'>To re-ignite the joy of home owning and living experience, by being themost customer-centric developer in India</p>
      </div>
    </div>
  )
}

export default OurPurpose
