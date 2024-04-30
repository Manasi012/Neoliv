import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useRef} from 'react';
import Card from './Card'

const Responsive = () => {
  const cardData = [
    { description: 'CEO’s Letter April 2024', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmect61ceoo.png' },
    { description: 'March 2024: First close of USD 150 mn Fund', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png' },
    { description: 'NeoLiv raises additional capital from bain capital backed 360 ONE wealth', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmedrtkvcccircle.png' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png' },
  ];

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000
  };

      
  return (
    <div className="slider-container py-10 mx-20 text-center">
     <Slider {...settings}>
      {cardData.map((card, index) => (
        <div className='px-5' key={index}>
          <Card description={card.description} imageUrl={card.imageUrl} />
        </div>
      ))}
    </Slider>

    {/* <div style={{ textAlign: "center" }}>
      <button className="button" onClick={play}>
        Play
      </button>
      <button className="button" onClick={pause}>
        Pause
      </button>
    </div> */}
  </div>
  )
}

export default Responsive
