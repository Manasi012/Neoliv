import React, { useRef, useEffect } from "react";
import BackButton from "../Components/BackButton";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
          className="bg-blue-950 text-white z-40  top-[25%] rotate-90 -left-8 font-bold py-1 my-0.5 px-2 fixed flex items-center justify-around"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 me-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
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

        <div className="text-center py-10 space-y-5 md:mx-0 mx-2">
          <h3 className="md:text-4xl text-3xl text-blue-950">Customer Centric</h3>
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
      

      <div className="gap-10 py-10 md:px-20 px-5 space-y-6">
      <div className="md:flex justify-center items-center md:gap-5 gap-0 md:mx-10 mx-5">
        <div className="bg-white text-center md:h-[11rem] h-auto py-4 md:w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-lg">Product and Quality</h5>
            <p className='text-center'><br /> Joined Godrej Properties in 2010, stepped down on December <br />31, 2022</p>
            </div>

            <div className="bg-white text-center md:h-[11rem] h-auto py-4 md:w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-lg">Personalised customer RM</h5>
            <p className='text-center'><br />NeoLiv will have Relationship Managers mapped to each customer for 24x7 dedicated service</p>
            </div>

            <div className="bg-white text-center md:h-[11rem] h-auto py-4 md:w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-lg">Property management arm</h5>
            <p className='text-center'><br />NeoLiv has in-house property management and service arm to ensure lowest cost of maintenance</p>
            </div>

            {/* <div className="bg-white text-center md:h-[11rem] h-auto py-4 md:w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-lg">Post handover partnership</h5>
            <p className='text-center'><br />NeoLiv will ensure complete hand-holding till all teething issues are resolved and customers enjoy hassle-free living experience</p>
            </div> */}

<div className="bg-white text-center md:h-[11rem] h-auto py-4 md:w-full shadow-xl rounded-lg my-2" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <h5 className="font-bold text-lg">Post handover partnership</h5>
            <p className='text-center'><br />NeoLiv ensures support until issues are resolved, providing a hassle-free experience.</p>
            </div>

        </div>

      </div>
    </>
  );
};

export default CustomerCentric;
