import React from "react";
import Mohit from "../Assets/imgs/mohit28.png";

const Team = () => {
  return (
<>
<div className="flex flex-col md:flex-row md:mx-52 pt-20 pb-20  px-6 md:px-0">
      <div className="md:w-1/2">
        <img src={Mohit} alt="mohit" className="md:w-3/4 w-full" />
      </div>
      <div className="md:w-4/6 rounded-2xl py-20 px-10 md:px-40 bg_indigo space-y-9 -mt-8 md:mt-44 z-[-1] md:-ml-56 text-white">
        <h2 className="text-3xl font-normal">Key Management Team</h2>
        <p className="md:pt-8 pe-5 font-light leading-8">
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
        </p>
        <button className="border px-5 py-2 rounded-full cursor-pointer">See ALL MEMBERS</button>
      </div>
    </div>

<div className="flex flex-col md:flex-row md:mx-40 md:py-20 drop-shadow-2xl py-20">
<div className="md:w-1/2 p-12 bg-blue-950 -ml-4 space-y-9 text-white rounded-l-2xl">
  <h2 className="text-3xl font-medium">Partnership Model</h2>
  <ul className='pt-16 pe-10 font-normal list-disc leading-8 space-y-7'>
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

<div className="md:w-1/2 p-12 bg-white border border-indigo-300 shadow-lg -ml-4 space-y-9 text-blue-950">
<h2 className="text-3xl font-medium">Partner’s Depth of Experience</h2>
  <ul className='pt-16 pe-10 font-medium list-disc leading-8 space-y-7'>
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
</>
  );
};

export default Team;
