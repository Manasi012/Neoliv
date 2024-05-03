import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ResponsiveSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 17/15,
        // slidesToShow:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="slider-container bg_light md:px-5">
        <Slider {...settings}>
          <div className="flex justify-center md:justify-start items-center md:items-start md:mx-2 md:px-4">
            <div className="bg-white md:h-24 h-36 ml-12 px-2 py-4 w-full shadow-lg rounded-lg my-5">
              <p className='md:ps-3 text-center'>Joined Godrej Properties in 2010, stepped down on December 31, 2022</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center md:items-start mx-2 px-4">
            <div className="bg-white ml-12 md:h-24 h-36 px-5 py-4 w-full shadow-lg rounded-lg my-5">
              <p className='md:ps-3 text-center'>MD & CEO of Godrej Properties since 2017</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center md:items-start mx-2 px-4">
            <div className="bg-white ml-12 md:h-24 h-36 px-5 py-4 w-full shadow-lg rounded-lg my-5">
              <p className='md:ps-3 text-center'>Previously Head of Business Development, Head of Region and Executive Director</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center md:items-start mx-2 px-4">
            <div className="bg-white ml-12 md:h-24 h-36 px-5 py-4 w-full shadow-lg rounded-lg my-5">
              <p className='md:ps-3 text-center'>Education: BE Mechanical engineering, MBA Strategy and Marketing (Indian Institute of Management, Culcutta)</p>
            </div>
          </div>
        </Slider>
      </div>
      
    )
}

export default ResponsiveSlider;
