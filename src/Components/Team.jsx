import React from "react";
import Mohit from "../Assets/imgs/mohit28.png";
import ReadMore from './ReadMore'
import Shadow from "../Assets/imgs/Shadow.png";
import Insignia from "./Insignia";


const Team = () => {
  return (
<>
<div className="flex flex-col md:flex-row md:mx-52 pt-20 md:px-0 px-4">
      <div className="md:w-1/2  z-40">
        <img src={Mohit} alt="mohit" className="md:w-3/4 w-full" />
      </div>
      <div className="md:w-4/6 md:rounded-xl z-10 py-20 px-10 md:pl-44 -mt-4 bg_indigo space-y-9 md:mt-44 md:-ml-56 text-white">
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
        <button className="border cursor-pointer px-5 py-2 rounded-full">See ALL MEMBERS</button>
      </div>
      </div>
    
<div className="flex flex-col md:flex-row md:mx-40 md:py-20 pt-10">
<div className="md:w-1/2 p-12 bg-blue-950 -ml-4 space-y-9 z-20 text-white rounded-l-2xl">
  <h2 className="text-3xl font-medium">Partnership Model</h2>
  <ul className='md:pt-16 pe-10 md:ml-0 ml-4 font-normal list-disc leading-8 space-y-7'>
    <li>
    NeoLiv inducts senior leadership talent as equity partners in the firm.
    </li>
    <li>
    Partnership unites the team through a greater alignment of interest and integrates an entrepreneurial culture throughout the platform.
    </li>
    <li>
    07 equity partners in the business to date.
    </li>
  </ul>
</div>

<div className="md:w-1/2 p-12 bg-white border border-indigo-300 shadow-lg md:z-20 z-10 -ml-4 space-y-9 text-blue-950">
<h2 className="text-3xl font-medium">Partner’s Depth of Experience</h2>
  <ul className='md:pt-16 md:ml-0 ml-4 pe-10 font-medium list-disc leading-8 space-y-7'>
    <li>
    Collective 100+ years in capital raise, business development, corporate governance, project execution and customer satisfaction.
    </li>
    <li>
    Held leadership positions in listed Indian and International real estate developers.
    </li>
    <li>
    Bring to the table strong relationship with land-owners, distribution channel, banking & liaisoning agencies.
    </li>
  </ul>
</div>
</div>

<div>
<img src={Shadow} alt="" className="md:-mt-[57rem] -mt-[16rem] w-full z-10 opacity-100"/>
<Insignia />

</div>
 
</>
  );
};

export default Team;
