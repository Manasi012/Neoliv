import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import MyPDF from '../../Assets/pdf/SEBI Certificate.pdf';

const FooterLinks = () => {
  return (
    <div className='bg_indigo w-screen md:h-14 h-20 md:flex block md:justify-between justify-center'>
      <div className='text-white flex justify-center md:ml-20 pt-4 text-xs'>
        <span>©️ 2024, NeoLiv</span>
        <span className='mx-3'>|</span>
        {/* <span className='underline'>SEBI Approval</span> */}
        <NavLink className='underline cursor-pointer z-50' to={MyPDF} target="_blank">SEBI Approval</NavLink>
      </div>
      <div className='md:me-20 pt-4 text-xs text-center text-white'>Website By 
      <Link
        to="https://propstory.in/"
        target='_blank'
        className="ps-1 underline hover:underline cursor-pointer"
      >
         Propstory
      </Link>

      </div>
    </div>
  )
}

export default FooterLinks