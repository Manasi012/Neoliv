import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ResponsiveSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="slider-container bg_light md:px-5">
        <Slider {...settings}>
            <div className="md:mx-4 md:px-8">
                <div className="bg-white md:-ml-8 px-2 py-4 w-fit shadow-lg rounded-lg my-5">
                    <p className='md:ps-3'>Joined Godrej Properties in 2010, stepped down on December 31, 2022</p>
                </div>
            </div>
            <div className="mx-4 px-8">
                <div className="bg-white px-5 py-4 w-fit shadow-lg rounded-lg my-5">
                    <p className='md:ps-3'>MD & CEO of Godrej Properties since 2017</p>
                </div>
            </div>
            <div className="mx-4 px-8">
                <div className="bg-white px-5 py-4 w-fit shadow-lg rounded-lg my-5">
                    <p className='md:ps-3'>Previously Head of Business Development, Head of Region and Executive Director</p>
                </div>
            </div>
            <div className="mx-4 px-8">
                <div className="bg-white px-5 py-4 w-fit shadow-lg rounded-lg my-5">
                    <p className='md:ps-3'>Education : BE Mechanical engineering, MBA Strategy and Marketing (Indian Institute of Management, Culcutta)</p>
                </div>
            </div>
        </Slider>
    </div>
    
    )
}

export default ResponsiveSlider;
