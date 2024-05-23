// import React from 'react';

// const Bluenavbar = () => {
//     let Links =[
//         {name:'SEBI Approval', link:'/'},
//         {name:'Sustainability', link:'/'},
//         {name:'Careers', link:'/'},
//     ]

//   return (
//     <div className='bg_blue-950 w-screen h-11'>
//         <ul className='flex md:justify-end items-center justify-center pt-3 me-24'>
//             {
//                 Links.map((link) => (
//                     <li className='font-normal text-xs md:text-sm pl-5'>
//                         <a href={link.link} className='text-white'>{link.name}</a>
//                     </li>
//                 ))
//             }
//         </ul>
//     </div>
//   )
// }

// export default Bluenavbar


import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import MyPDF from '../../Assets/pdf/SEBI Certificate.pdf';


const Bluenavbar = () => {
    const history = useNavigate();

  return (
    <div className='bg_indigo w-screen h-9 text-white'>
        <ul className='flex md:justify-end items-center justify-center pt-2 md:me-24 space-x-7 '>
            <li>
                {/* <a href="">SEBI Approval</a> */}
        <NavLink to={MyPDF} target="_blank">SEBI Approval</NavLink>
            </li>
            <li>
                {/* <a href="">Sustainability</a> */}
                <NavLink to="/Neoliv/sustainability">Sustainability</NavLink>
            </li>
            <li>
                {/* <a href="">Career</a> */}
                <NavLink to="/Neoliv/career">Career</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Bluenavbar
