import React, { useState } from 'react'
import Logo from '../../Assets/imgs/neoliv_logo.jpeg';
import { HashLink} from 'react-router-hash-link';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
// let Links=[
//     {name:'ABOUT', link:'/'},
//     {name:'NEOLIV PILLARS', link:'/'},
//     {name:'TEAM', link:'/'},
//     {name:'NEWS & INSIGHTS', link:'/'},
// ]

let [isOpen, SetisOpen]= useState(false)

  return (
    <div className='pt-5 w-screen z-50'>
       <div className='md:px-10 px-7 md:flex justify-between items-center md:mx-6'>
       <div className='w-48'>
       <NavLink to="/Neoliv"
        className="underline hover:underline cursor-pointer">
            <img src={Logo} alt="" />
      </NavLink>
        </div>

        <div onClick={()=> SetisOpen(!isOpen)} className='absolute right-8 top-16 cursor-pointer md:hidden'>

            {
                isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
            }

        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-blue-950 md:bg-white md:static md:z-auto z-20 left-0 w-full md:w-auto md:pl-0 pl-8 me-8 transition-all duration-500 ease-out ${isOpen ? 'top-32' : 'top-[-490px]'}`}>
  <li className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${isOpen ? 'block' : 'hidden md:block'}`}>
    <HashLink to="#about" smooth className='text-white md:text-black hover:text-blue-700 duration-500'>About</HashLink>
  </li>
  <li className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${isOpen ? 'block' : 'hidden md:block'}`}>
    <HashLink to="#threePillars" smooth className='text-white md:text-black hover:text-blue-700 duration-500'>NEOLIV PILLARS</HashLink>
  </li>
  <li className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${isOpen ? 'block' : 'hidden md:block'}`}>
    <HashLink to="#team" smooth className='text-white md:text-black hover:text-blue-700 duration-500'>TEAM</HashLink>
  </li>
  <li className={`md:ml-6 md:my-0 my-7 font-medium tracking-wide ${isOpen ? 'block' : 'hidden md:block'}`}>
    <HashLink to="#news&insights" smooth className='text-white md:text-black hover:text-blue-700 duration-500'>NEWS & INSIGHTS</HashLink>
  </li>
</ul>

       </div>
       <hr className='mt-2' />
    </div>

  )
}

export default Header
