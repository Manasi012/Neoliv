import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import Card from './Card';
import MyPDF from '../../Assets/pdf/NeoLiv_Tracking.pdf';

const newsData = [
  // { description: 'CEO’s Letter April 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg', buttonText: 'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  // { description: 'CEO’s Letter July 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg', buttonText: 'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/CEO_Letter_July2023.pdf' },
  // { description: 'CEO’s Letter November 2023', buttonText: 'Ceo Letter', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  // { description: 'March 2024- First close of USD 150 mn Fund', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg', buttonText: 'Events', pdfUrl: 'https://neoliv.in/docs/NeoLiv%20Press%20Release%20-%20March%202024.pdf' },
  // { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg', buttonText: 'Events', pdfUrl: 'https://neoliv.in/docs/NEOLIVLaunchEvent.pdf' },
  { 
    description: 'Mohit Malhotra’s official confirmationon....', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdejjvcccircle.png', 
    buttonText: 'News', 
    pdfUrl: 'https://neoliv.in/docs/vccircle.pdf' 
  },
  { 
    description: 'Mohit Malhotra, sharing his expert opinion....', 
    buttonText: 'News', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdj34NDTV.jpg', 
    iframeUrl: 'https://neoliv.in/MohitMalhotraonNDTVPropertyShow.mp4' 
  },
  { 
    description: 'Mohit Malhotra (ex MD and CEO of Godrej Prop....', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdw2yDainik-Bhaskar.jpg', 
    buttonText: 'News', 
    iframeUrl: 'https://neoliv.in/dainik_bhaskar.mp4' 
  },
  { 
    description: 'Mohit Malhotra’s official confirmation on....', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbe3liTV-18.jpg', 
    buttonText: 'News', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' 
  },
  { 
    description: 'Mohit Malhotra, the former managing director....', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbeb10Financial-Express.jpg', 
    buttonText: 'News', 
    pdfUrl: 'https://neoliv.in/docs/financial.pdf' 
  },
];

function AllNewsComponent() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleCardClick = (pdfUrl, iframeUrl, imageUrl) => {
    if (pdfUrl) {
      // If PDF URL exists, open it in a new tab
      window.open(pdfUrl, '_blank');
    } else if (iframeUrl) {
      // If iframe URL exists, open it in a new tab
      window.open(iframeUrl, '_blank');
    } else if (imageUrl) {
      // If image URL exists, open it in a new tab
      window.open(imageUrl, '_blank');
    }
    setSelectedUrl(pdfUrl ? pdfUrl : iframeUrl ? iframeUrl : imageUrl);
  };

  const CustomPrevArrow = ({ onClick }) => (
    <div className="hidden md:block">
      <button
        className="absolute md:top-40 -inset-12 z-40 top-1/2 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center text-blue-950 items-center"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
      </button>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="hidden md:block">
      <button
        className="absolute md:top-40 -right-12 z-40 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center items-center"
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-950">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
          slidesToShow: 17 / 15,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 17 / 15,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />, // Custom prev arrow
    nextArrow: <CustomNextArrow /> // Custom next arrow
  };

  return (
    
    <div className="slider-container md:py-10 py-4 text-center relative">
      <Slider className="md:mx-20 md:pb-0 pb-10" {...settings}>
      <div className="max-w-sm cursor-pointer md:ml-0 ml-8 md:h-[20.5rem] h-[19.4rem] rounded hover:underline overflow-hidden shadow-lg relative"  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800">
          <div className="my-6 md:ml-0 px-2">
            <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg" className="w-full border border-gray-300" alt="Image description" />
            <div className='absolute -mt-10 left-5 bg_indigo text-white font-bold py-1 px-3 rounded-xl text-[13px]'>
              <span>Ceo NewsLetter</span>
            </div>
            <div className="card-body h-10 font-medium block pt-3 space-y-11">
            <a href="https://neoliv.in/docs/NeoLivUpdate-April2023.pdf" target="_blank">April 2023</a><br />
            <a href="https://neoliv.in/docs/CEO_Letter_July2023.pdf" target="_blank">July 2023</a><br />
            <a href="https://neoliv.in/docs/NeoLivUpdate-April2023.pdf" target="_blank">November 2023</a><br />
            </div>
          </div>
        </div>

        <div className="max-w-sm cursor-pointer md:ml-0 ml-8 md:h-[20.5rem] h-[19.4rem] rounded hover:underline overflow-hidden shadow-lg relative"  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800">
          <div className="my-6 md:ml-0 px-2">
            <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg" className="w-full border border-gray-300" alt="Image description" />
            <div className='absolute -mt-10 left-5 bg_indigo text-white font-bold py-1 px-3 rounded-xl text-[13px]'>
              <span>Events</span>
            </div>
            <div className="card-body h-10 font-medium block pt-3 space-y-11">
            <a href="https://neoliv.in/docs/NeoLiv%20Press%20Release%20-%20March%202024.pdf" target="_blank">March 2024- First close of USD 150 mn Fund</a><br />
            <a href="https://neoliv.in/docs/NEOLIVLaunchEvent.pdf" target="_blank">June 2023: 360 ONE Launch event</a>
            </div>
          </div>
        </div>

        {newsData.map((card, index) => (
          <div className="md:px-2 my-6 md:ml-0 ml-8 px-3" key={index}>
            <Card 
              description={card.description} 
              imageUrl={card.imageUrl} 
              buttonText={card.buttonText} 
              onClick={() => handleCardClick(card.pdfUrl, card.iframeUrl)} 
            />
          </div>
        ))}
        
        <div className="max-w-sm cursor-pointer md:ml-0 ml-8 md:h-[20.5rem] h-[19.4rem] rounded hover:underline overflow-hidden shadow-lg relative"  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800">
          <div className="my-6 md:ml-0 px-2">
            <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw6n57teUntitled%20design%20-%202024-05-14T223225.439.png" className="w-full border border-gray-300" alt="Image description" />
            <div className='absolute -mt-10 left-5 bg_indigo text-white font-bold py-1 px-3 rounded-xl text-[13px]'>
              <span>Media</span>
            </div>
            <div className="card-body h-10 font-medium block pt-3 space-y-11">
              <NavLink to="/Junemedia">June Media</NavLink><br />
              <a href="https://neoliv.in/docs/NeoLiv_Tracking.pdf" target="_blank">October Media</a><br />
              <NavLink to="/novembermedia">November Media</NavLink>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AllNewsComponent;
