import React from 'react';
import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b bg-white rounded-3xl">
      <button
        className="flex justify-between items-center rounded-3xl w-full px-8 py-6 bg-white focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-950">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
</svg>

 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-950">
 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
</svg>

}
      </button>
      {isOpen && <div className="px-10 py-10">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-2 mt-8 space-y-8 relative">
      <AccordionItem className="bg-white"
        title={<h2 className="text-7xl text-left font-extrabold mb-2 text-[#CCCCCC]">1 <span className='text-xl -mt-14 -ml-10 text-black font-semibold'>Professionally Built</span></h2>
      }  
      
        content={
          <>
           <ul className='list-disc space-y-14 font-medium text-xl ml-4'>
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
          </>
        }
        isOpen={openIndex === 0}
        toggleAccordion={() => toggleAccordion(0)}
      />

<AccordionItem className="bg-white"
        title={<h2 className="text-7xl text-left font-extrabold mb-2 text-[#CCCCCC]">2<span className='text-xl -mt-14 -ml-10 text-black font-semibold'>Financially Secure</span></h2>
      }
        content={
          <>
           <ul className='list-disc space-y-14 font-medium text-xl ml-4'>
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
          </>
        }
        isOpen={openIndex === 1}
        toggleAccordion={() => toggleAccordion(1)}
      />

<AccordionItem className="bg-white"
 title={<h2 className="text-7xl text-left font-extrabold mb-2 text-[#CCCCCC]">3<span className='text-xl -mt-14 -ml-10 text-black font-semibold'>Customer Centric</span></h2>
}
        content={
          <>
           <ul className='list-disc space-y-14 font-medium text-xl ml-4'>
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
          </>
        }
        isOpen={openIndex === 2}
        toggleAccordion={() => toggleAccordion(2)}
      />

    </div>
  );
};

export default Accordion;
