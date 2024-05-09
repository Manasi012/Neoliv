import React from "react";
import { useState } from "react";
import Mohit from "../Assets/imgs/mohit28.png";
import partners_neoliv from "../Assets/imgs/partners_neoliv.jpg";
import ReadMore from './ReadMore'
import Shadow from "../Assets/imgs/Shadow.png";
import Insignia from "./Insignia";


const Team = () => {

  const [isImageVisible, setIsImageVisible] = useState(false);
 
  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
<>
<div className="flex flex-col md:flex-row md:mx-52 pt-20 md:px-0 px-4">
      <div className="md:w-1/2  z-40"  data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000">
        <img src={Mohit} alt="mohit" className="md:w-3/4 w-full" />
      </div>
      <div className="md:w-4/6 md:rounded-xl z-10 py-20 px-10 md:pl-44 -mt-4 bg_indigo space-y-9 md:mt-44 md:-ml-56 text-white"  data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">
        <h2 className="text-3xl font-normal">Key Management Team</h2>
        {/* <p className="md:pt-8 pe-5 font-light leading-8">
          With a singular vision to create India’s Foremost Residential Real
          Estate Platform in the vast opportunity that real estate investment
          and development offers, Mohit is the mind, body, and soul behind the
          formation of NeoLiv.
        </p>
        <p className="pe-5 font-light leading-8">
          A leader with an impeccable ability to effectively envision and
          execute “Large-scale” business, Mohit has deep expertise in capital
          management, project development, and property management over the past
          two decades.
        </p> */}
        <ReadMore />
        <button onClick={toggleImageVisibility} className="border cursor-pointer px-5 py-2 rounded-full"  data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000">See ALL MEMBERS</button>
      </div>
      </div>

      <div className="w-full md:p-10 p-3 z-40">
          {isImageVisible && <img src={partners_neoliv} alt="mohit" className="w-full transition-height duration-5000" />}
        </div>
    
<div className="flex flex-col md:flex-row md:mx-40 md:py-20 pt-10">
<div className="md:w-1/2 p-12 bg-blue-950 -ml-4 space-y-9 z-20 text-white rounded-l-2xl"  data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
  <h2 className="text-3xl font-medium"  data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Partnership Model</h2>
  <ul className='md:pt-16 md:pe-10 pe-2 md:ml-0 ml-4 font-normal list-disc leading-8 space-y-7'>
    <li  data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
    NeoLiv inducts senior leadership talent as equity partners in the firm.
    </li>
    <li  data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000">
    Partnership unites the team through a greater alignment of interest and integrates an entrepreneurial culture throughout the platform.
    </li>
    <li  data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1000">
    07 equity partners in the business to date.
    </li>
  </ul>
</div>

<div className="md:w-1/2 p-12 bg-white border border-indigo-300 shadow-lg md:z-20 z-10 -ml-4 space-y-9 text-blue-950"  data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">
<h2 className="text-3xl font-medium">Partner’s Depth of Experience</h2>
  <ul className='md:pt-16 md:ml-0 ml-4 md:pe-10 pe-2 font-medium list-disc leading-8 space-y-7'>
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

<div  data-aos="fade-up" data-aos-delay="1800" data-aos-duration="1000">
<img src={Shadow} alt="" className="md:-mt-[57rem] -mt-[16rem] w-full z-10 opacity-100"/>
<Insignia />

</div>
 
</>
  );
};

export default Team;
