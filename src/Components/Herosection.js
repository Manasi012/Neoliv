import React from 'react';
import BannerImage from '../Assets/imgs/banner.jpeg';
import WhiteLogo from '../Assets/imgs/Whitelogo.png'


const Herosection = () => {
  return (
    <>
    <div className='py-20 md:mx-20'>
        <h1 className='uppercase md:text-4xl md:leading-[60px] font-[500] ml-8  text-2xl leading-[auto]'>India’s foremost integrated fund led
        <span className='block'>residential real estate developer</span>
        </h1>
    </div>
    <div>
        <img src={BannerImage} alt="bannerimage" className='w-full h-[500px]' />
    </div>
    <div className='py-20 bg_indigo'>
      <div className='flex justify-center'>
      <img src={WhiteLogo} alt="whitelogo" className='"place-self-center'/>
      </div>
      <p className='text-center md:px-44 px-20 py-8 text-white leading-10 font-light text-xl'>NeoLiv, A unique integrated residential real estate platform with both fund management business and an in house development arm has been founded by Mohit Malhotra (ex MD & CEO of Godrej Properties), top industry experts and 360 ONE (Formerly IIFL Wealth)- India’s leading wealth management firm with more than USD 50 Bn AUM.</p>
    </div>
    </>

  )
}

export default Herosection
