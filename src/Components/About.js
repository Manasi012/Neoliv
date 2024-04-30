import React from "react";
import Founder from "../Assets/imgs/Founder.png";
import Platform from "../Assets/imgs/platfoem.png";
import Security from '../Assets/imgs/Security.png'
import project from '../Assets/imgs/project.png'
import build from '../Assets/imgs/build.png'
import presence from '../Assets/imgs/presence.png'

const About = () => {
  return (
    <div className="md:p-32 px-6 pt-28 md:pb-10 pb-20">
      <div className="text-center space-y-6 text-blue-950 pb-8">
        <h4 className="tracking-wide">ABOUT</h4>
        <h2 className="text-4xl">Who Are We?</h2>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-10 h-auto md:h-[26rem] border border-indigo-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal mb-2">Founder</h2>
              <img src={Founder} alt="" />
            </div>
            <div className="pt-24 pb-5 leading-7">
              <p>
                Founded by Mohit Malhotra, ex MD & CEO of Godrej Properties,
                who transformed Godrej Properties into a market leader in his 12
                years journey
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-10 h-auto md:h-[26rem] border border-indigo-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal mb-2">
                Unique
                <br />
                Integrated
                <br />
                Platform
              </h2>
              <img src={Platform} alt="" />
            </div>
            <div className="pt-24 pb-5 leading-7">
              <p>
                A unique integrated residential platform with both fund
                management business and its own development arm
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-10 h-auto md:h-[26rem] border border-indigo-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal mb-2">
                Financial
                <br />
                Security
              </h2>
              <img src={Security} alt="" />
            </div>
            <div className="pt-24 pb-5 leading-7">
              <p>
                The platform has secured funding from UHNI family offices and
                360 ONE - India’s leading wealth firm withmore than USD 50
                Bn AUM
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-10 h-auto md:h-[26rem] border border-indigo-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal mb-2">Projects</h2>
              <img src={project} alt="" />
            </div>
            <div className="pt-24 pb-5 leading-7">
              <p>
                All projects are backed by SEBI approved equity AIF Fund
                ensuring financial security and assurance of timely delivery
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-10 h-auto md:h-[26rem] border border-indigo-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal mb-2">
                Professionally
                <br />
                Built
              </h2>
              <img src={build} alt="" />
            </div>
            <div className="pt-24 pb-5 leading-7">
              <p>
                Built by industry experts with 100+ years of experience of
                capital raise, land investments & 200 Mn Sq ft project execution
                in Indian real estate space
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-10 h-auto md:h-[26rem] border border-indigo-300">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-normal mb-2">Presence</h2>
              <img src={presence} alt="" />
            </div>
            <div className="pt-24 pb-5 leading-7">
              <p>
                Opened offices and setup teams in Mumbai and Delhi NCR with
                focus on mid income residential projects in both cities 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-10">
      <p className='text-center md:px-44 px-20 py-8 text-indigo-500 leading-10 font-medium text-xl'>"The residential real estate sector in India has been affected with distrust & conflict-driven relationships. The whole experience is stressful and far from being a joyous relationship. Moreover, lack of transparency, secure funding, and corporate governance issues have resulted in loss of credibility."</p>
      </div>
    </div>
  );
};

export default About;