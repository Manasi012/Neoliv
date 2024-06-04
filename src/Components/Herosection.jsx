import React from "react";
import BannerImagee from "../Assets/imgs/banner.jpeg";
import BannerImage from "../Assets/imgs/bannerdesk.jpg";
import WhiteLogo from "../Assets/imgs/Whitelogo.png";

const Herosection = () => {
  return (
    <>
      {/* <div className='py-7 md:mx-20'>
      <h2 className='md:font-[500] font-semibold ml-8 md:pe-0 pe-8 md:ml-0 md:text-xl text-sm' data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
      A Venture backed by SEBI Approved fund, 360 ONE(formerly IIFL Wealth) and Mohit Malhotra (Ex MD and CEO of Godrej Properties)
      </h2>
    </div> */}

      {/* <div className="relative">
        <div className="hidden md:block">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwswz78uFamily_neoliv.jpg"
            alt="bannerimage"
            className="w-full h-auto"
          />
        </div>
        <div className="md:hidden">
          <img
             src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwsxgbac450x650-Without-Symbol.jpg"
            alt="bannerimage"
            className="w-full h-screen"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:mx-20">
          <h1
            className="text-white uppercase md:text-4xl md:mt-0 mt-11 md:leading-[70px] leading-normal md:font-[600] font-semibold text-xl px-2"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            India’s foremost integrated fund led
            <span className="md:block"> residential real estate developer</span>
          </h1>
          <div className="py-10">
            <p
              className="text-center md:px-44 px-5 py-8 text-white leading-10 font-medium md:text-xl text-md"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              NeoLiv, A unique integrated residential real estate platform with
              both fund management business and an in house development arm has
              been founded by Mohit Malhotra (ex MD & CEO of Godrej Properties),
              top industry experts and 360 ONE (Formerly IIFL Wealth)- India’s
              leading wealth management firm with more than USD 50 Bn AUM.
            </p>
          </div>
        </div>
      </div> */}

      <div className="relative">
      {/* <div className="hidden md:block">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwyt5laiFamily_Neoliv_01.jpg"
            alt="bannerimage"
            className="w-full h-screen"
          />
        </div>
        <div className="md:hidden">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwyt4h0g450x650-Without-Symbol.jpg"
            alt="bannerimage"
            className="w-full h-screen"
          />
        </div> */}


        <div className="hidden md:block">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilx01kmq6neewdesk.jpg"
            alt="bannerimage"
            className="w-full h-screen"
          />
        </div>
        <div className="md:hidden">
          <img
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwyszkl2450x650.jpg"
            alt="bannerimage"
            className="w-full h-screen"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:mx-10">
          <h1
            className="text-white uppercase md:text-xl md:-mt-[27rem]  -mt-80 md:leading-[50px] leading-normal font-medium text-sm px-2"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
          >
            India’s foremost integrated fund led residential real estate
            developer
          </h1>
          <div className="absolute -bottom-8">
            <p
              className="text-center md:px-0 px-3 py-20 text-white md:leading-7 leading-4 font-medium md:text-[16px]"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
              We are a unique integrated residential real estate platform with
              both fund management business and an in house development arm founded by Mohit Malhotra (ex MD & CEO of Godrej Properties),
              top industry experts and 360 ONE (Formerly IIFL Wealth)- India’s
              leading wealth management firm with more than USD 50 Bn AUM.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
