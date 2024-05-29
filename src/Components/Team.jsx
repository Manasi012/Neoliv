import React from "react";
import { useState } from "react";
import Mohit from "../Assets/imgs/mohit28.png";
import ReadMore from './ReadMore'



const Team = () => {

  const [isImageVisible, setIsImageVisible] = useState(false);
 
  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
<>
<div className="text-center md:mt-5 pt-20 aos-init aos-animate relative z-50" id="team" data-aos="zoom-out" data-aos-delay="800" data-aos-duration="1000">
  <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10">Key Management Team</h4>
</div>
<div className="flex flex-col md:flex-row md:mx-52 pt-10 md:px-0 px-4" >
      <div className="md:w-1/2  z-40"  data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
        <img src={Mohit} alt="mohit" className="md:w-3/4 w-full rounded-xl" />
      </div>
      <div className="md:w-4/6 md:rounded-xl z-10 py-16 px-10 md:pl-40 -mt-4 bg_indigo md:mt-44 md:-ml-56 text-white" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
  <h2 className="text-3xl p-0 font-medium">Mohit Malhotra</h2>
  <p className="m-0 pt-2">Founder & CEO</p>
  <ReadMore />
  {/* <button onClick={toggleImageVisibility} className="border cursor-pointer px-5 py-2 rounded-full" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000">See ALL MEMBERS</button> */}
</div>
      </div>

      {/* <div className="w-full md:p-10 p-3 z-40">
          {isImageVisible && <img src={partners_neoliv} alt="mohit" className="w-full transition-height duration-5000" />}
        </div> */}


    
<div className="flex flex-col md:flex-row md:mx-52 md:py-24 pt-10">
<div className="md:w-1/2 p-12 bg-blue-950 -ml-4 space-y-9 z-20 text-white rounded-l-2xl"  data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
  <h2 className="text-3xl font-medium"  data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Partnership Model</h2>
  <ul className='md:pt-10 md:pe-10 pe-2 md:ml-0 ml-4 font-normal list-disc leading-8 space-y-7'>
    <li  data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
    NeoLiv inducts senior leadership talent as equity partners in the firm.
    </li>
    <li  data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000">
    Partnership unites the team through a greater alignment of interest and integrates an entrepreneurial culture throughout the platform.
    </li>
    <li  data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1000">
    09 equity partners in the business to date.
    </li>
  </ul>
</div>

<div className="md:w-1/2 p-12 bg-white border border-indigo-300 shadow-lg md:z-20 z-10 -ml-4 space-y-9 text-blue-950"  data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
<h2 className="text-3xl font-medium">Partner’s Depth of Experience</h2>
  <ul className='md:pt-0 md:ml-0 ml-4 md:pe-10 pe-2 font-medium list-disc leading-8 space-y-7'>
    <li data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
    Collective 100+ years in capital raise, business development, corporate governance, project execution and customer satisfaction.
    </li>
    <li  data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000">
    Held leadership positions in listed Indian and International real estate developers.
    </li>
    <li  data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1000">
    Bring to the table strong relationship with land-owners, distribution channel, banking & liaisoning agencies.
    </li>
  </ul>
</div>
</div>

{/* <div className="text-center md:mt-5 my-10 aos-init aos-animate relative z-50" data-aos="zoom-out" data-aos-delay="800" data-aos-duration="1000">
  <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10">Partners</h4>
  <img src={partners_neoliv} alt="mohit" className="w-full relative  md:px-20 px-4 transition-height duration-5000" />
</div> */}


</>
  );
};

export default Team;
