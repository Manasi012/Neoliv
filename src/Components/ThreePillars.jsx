import React from 'react';
import Accordion from './Accordian';

const ThreePillars = () => {
  return (
    <div className='bg-custom bg-cover bg-center h-auto md:px-8 px-4 py-20'>
        <div className='text-center py-10'>
        <h4 className='md:text-3xl text-4xl text-blue-950 font-medium'>Our Key Three Pillars</h4>
        </div>

       <div className='hidden md:block'>
       <div className="flex flex-wrap mx-16">
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 pe-28">
      <div className="p-6 rounded-lg">
        <h2 className="text-8xl font-extrabold mb-2 text-[#515d81]">1</h2>
        <div className='text-3xl text-white font-medium -mt-14 ml-1'>
        <p>Professionally <br />Built</p>
        </div>
        <div className='my-10 text-white'>
            <ul className='list-disc space-y-10 ml-4'>
                <li>
                Founded by Mohit Malhotra former MD & CEO of Godrej Properties
                </li>
                <li>
                100+ years cumulative experience
                </li>
                <li>
                Equity partnership for key management
                </li>
            </ul>
        </div>
      </div>
    </div>
    
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 pe-28">
      <div className="p-6 rounded-lg">
        <h2 className="text-8xl font-extrabold mb-2 text-[#515d81]">2</h2>
        <div className='text-3xl text-white font-medium -mt-14 ml-1'>
        <p>Financially <br />Secure</p>
        </div>
        <div className='my-10 text-white'>
            <ul className='list-disc space-y-10 ml-4'>
                <li>
                Fund backed model 360 One as equity investor
                </li>
                <li>
                SEBI approved CAT II domestic equity AIF
                </li>
                <li>
                Amongst top developers of India
                </li>
            </ul>
        </div>
      </div>
    </div>
    
    <div className="w-full sm:w-1/2 md:w-1/3 p-4 pe-28">
      <div className="p-6 rounded-lg">
        <h2 className="text-8xl font-extrabold mb-2 text-[#515d81]">3</h2>
        <div className='text-3xl text-white font-medium -mt-14 ml-1'>
        <p>Customer <br />Centric</p>
        </div>
        <div className='my-10 text-white'>
            <ul className='list-disc space-y-10 ml-4'>
                <li>
                Tech-enabled interface
                </li>
                <li>
                Product and quality excellence
                </li>
                <li>
                Relationship mindset & long-term commitment
                </li>
            </ul>
        </div>
      </div>
    </div>
        </div>
       </div>

        <div className='md:hidden'>
          <Accordion />
        </div>
    </div>
  )
}

export default ThreePillars
