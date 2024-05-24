import React, { useRef, useEffect } from "react";
import BackButton from "../Components/BackButton";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { HashLink } from "react-router-hash-link";

const CustomerCentric = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnded = () => {
      videoElement.pause();
      setTimeout(() => {
        videoElement.play();
      }, 10000);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  const videoStyle = {
    clipPath: "inset(1px 1px)",
  };

  return (
    <>
      <div>

        <HashLink
              to="/#threePillars"
              smooth
              className="bg-blue-950 text-white z-40  top-[25%] rotate-90 -left-11 font-bold py-1 my-0.5 px-5 fixed flex items-center justify-around" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
              Back
            </HashLink>


        {/* <HashLink to="#threePillars">
        <BackButton />
        </HashLink> */}

{/* <NavLink to="/Neoliv">
        <ScrollLink to="threePillars" smooth={true} duration={500}>
          <BackButton />
        </ScrollLink>
      </NavLink> */}

        <div className="text-center py-10 space-y-5">
          <h3 className="text-4xl text-blue-950">Customer Centric</h3>
          <p className="text-lg font-medium md:px-0 px-5">
            Customer is at our core through transparent communication,
            tech-enabled interface, relationship manager model and long-term
            commitment.
          </p>
        </div>

        <div className="flex justify-center pb-10">
          <video
            ref={videoRef}
            className="md:w-[50%] w-full"
            autoPlay
            muted
            style={videoStyle}
          >
            <source
              src="https://propstory.in/Neoliv-Demo/AnimationNew.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="md:flex justify-center gap-10 py-10 md:px-20 px-5">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-36 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkftooIcons-01neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal md:px-5 px-10">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Product and Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Consumer Research-led Design and Top-Quality Assurance
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border md:mt-0 mt-10 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-36 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkg1vxIcons-02neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal md:px-5 px-10">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Personalised customer RM
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              NeoLiv will have Relationship Managers mapped to each customer for
              24x7 dedicated service
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center gap-10 pb-10 md:px-20 px-5">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-36 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkgampIcons-03neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal md:px-5 px-10">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Property management arm
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              NeoLiv has in-house property management and service arm to ensure
              lowest cost of maintenance
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 md:mt-0 mt-10 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-36 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkftooIcons-01neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal md:px-5 px-10">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Post handover partnership
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              NeoLiv will ensure complete hand-holding till all teething issues
              are resolved and customers enjoy hassle-free living experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCentric;
