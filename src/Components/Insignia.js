import React from 'react';
import FinalLogo from '../Assets/imgs/final-logo.png';

const Insignia = () => {
  return (
    <div className='bg-white flex justify-center'>
      <img src={FinalLogo} alt="Insignia" className='md:w-2/6 w-full' />
    </div>
  )
}

export default Insignia
