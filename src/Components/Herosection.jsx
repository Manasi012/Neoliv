import React from 'react';
import BannerImage from '../Assets/imgs/bannerdesk.jpg';
import WhiteLogo from '../Assets/imgs/Whitelogo.png'


const Herosection = () => {
  return (
    <>
    <div className='md:py-20 py-14 md:mx-20'>
        <h1 className='uppercase md:text-4xl md:leading-[60px] leading-normal md:font-[500] font-semibold ml-8 md:pe-0 pe-8 md:ml-0 text-2xl'>India’s foremost integrated fund led
        <span className='md:block'> residential real estate developer</span>
        </h1>
    </div>
    <div>
        <img src={BannerImage} alt="bannerimage" className='w-full h-auto]' />
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
