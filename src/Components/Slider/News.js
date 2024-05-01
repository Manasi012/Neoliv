import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {useRef} from 'react';
import Card from './Card'

const News = () => {
  const cardData = [
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png', buttonText:'Ceo Letter' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png', buttonText:'Ceo Letter' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png', buttonText:'Ceo Letter' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png', buttonText:'Ceo Letter' },
    { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvmede3kcapfund.png', buttonText:'Ceo Letter' },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      
  return (
    <div className="slider-container py-10 md:mx-20 mx-10 text-center">
     <Slider {...settings}>
      {cardData.map((card, index) => (
        <div className='px-5' key={index}>
          <Card description={card.description} imageUrl={card.imageUrl} buttonText={card.buttonText}/>
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

export default News
