// import React from 'react';
// import { Link } from 'react-router-dom';

// const FooterLinks = () => {
//   return (
//     <div className='bg_indigo w-screen h-14 flex justify-between'>
//       <div className='text-white ml-20 pt-4 text-xs'>
//         <span>©️ 2024, NeoLiv</span>
//         <span className='mx-3'>|</span>
//         <span className='underline'>SEBI Approval</span>
//       </div>
//       <div className='me-20 pt-4 text-xs text-white'>Website By 
//         <Link
//         to="https://propstory.in/"
//         target="_blank"
//         className="ps-1 underline hover:underline cursor-pointer"
//       >
//          Propstory
//       </Link>
//       </div>
//     </div>
//   )
// }

// export default FooterLinks



import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
  return (
    <div className='bg_indigo w-screen h-14 flex justify-between'>
      <div className='text-white ml-20 pt-4 text-xs'>
        <span>©️ 2024, NeoLiv</span>
        <span className='mx-3'>|</span>
        <span className='underline'>SEBI Approval</span>
      </div>
      <div className='me-20 pt-4 text-xs text-white'>Website By 
      <Link
        to="https://propstory.in/"
        className="ps-1 underline hover:underline cursor-pointer"
      >
         Propstory
      </Link>

      </div>
    </div>
  )
}

export default FooterLinks
