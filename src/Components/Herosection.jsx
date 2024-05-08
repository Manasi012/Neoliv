import React from 'react';
import BannerImagee from '../Assets/imgs/banner.jpeg';
import BannerImage from '../Assets/imgs/bannerdesk.jpg';
import WhiteLogo from '../Assets/imgs/Whitelogo.png';


const Herosection = () => {
  return (
    <>
    <div className='py-7 md:mx-20'>
      <h2 className='md:font-[500] font-semibold ml-8 md:pe-0 pe-8 md:ml-0 md:text-xl text-sm'>
      A Venture backed by SEBI Approved fund, 360 ONE(formerly IIFL Wealth) and Mohit Malhotra (Ex MD and CEO of Godrej Properties)
      </h2>
    </div>
    <div className='md:mx-20'>
        <h1 className='absolute md:top-[24rem] top-[22rem] z-10 uppercase md:text-4xl md:leading-[60px] leading-normal md:font-[600] font-semibold ml-8 md:pe-0 pe-8 md:ml-0 text-xl'>India’s foremost integrated fund led
        <span className='md:block'> residential real estate developer</span>
        </h1> 
    </div>
    <div className='hidden md:block relative'>
        <img src={BannerImage} alt="bannerimage" className='w-full md:h-[525px]' />
    </div>
    <div className='md:hidden'>
        <img src={BannerImagee} alt="bannerimage" className='w-full h-72' />
    </div>

    <div className='py-20 bg_indigo'>
      <div className='flex justify-center'>
      <img src={WhiteLogo} alt="whitelogo" className='"place-self-center'/>
      </div>
      <p className='text-center md:px-44 px-10 py-8 text-white leading-10 font-light text-xl'>NeoLiv, A unique integrated residential real estate platform with both fund management business and an in house development arm has been founded by Mohit Malhotra (ex MD & CEO of Godrej Properties), top industry experts and 360 ONE (Formerly IIFL Wealth)- India’s leading wealth management firm with more than USD 50 Bn AUM.</p>
    </div>
    </>

  )
}

export default Herosection
