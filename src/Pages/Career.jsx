import React from 'react';
import Bluenavbar from '../Components/Header/Bluenavbar';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import FooterLinks from '../Components/Footer/FooterLinks';
import career from '..//Assets/imgs/career.jpg';
import NeoliferWhite from '..//Assets/imgs/NeoliferBlue.png';



const Career = () => {
  return (
    <div>
       {/* <Bluenavbar />
      <Header /> */}

      <div className='relative'>
        <img src={career} alt="sustainability" className='md:w-screen w-full'/>
       <div className='absolute left-[30%] md:top-[30%] top-[8%] md:ml-32 ml-2'>
       <h3 className='text-[#115aa6] md:text-6xl text-3xl font-bold tracking-wider'>Become a</h3>
        <img src={NeoliferWhite} alt="NeoliferWhite" className='w-96 md:ml-16'/>
        
       </div>
       <div className='py-10 text-center'>
    <div className="flex justify-center">
        <button onClick={() => window.location.href = 'mailto:admin@neoliv.in'} className="flex items-center bg_indigo px-6 py-2 rounded-xl text-white text-lg font-medium">Connect With Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
    </div>
</div>


      </div>

    </div>
  )
}

export default Career