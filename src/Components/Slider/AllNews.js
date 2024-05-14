import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import Card from './Card';
import MyPDF from '../../Assets/pdf/NeoLiv_Tracking.pdf';


const newsData = [
  { description: 'CEO’s Letter April 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg', buttonText:'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  { description: 'CEO’s Letter July 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg', buttonText:'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/CEO_Letter_July2023.pdf' },
  { description: 'CEO’s Letter November 2023', buttonText:'Ceo Letter', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  { description: 'March 2024- First close of USD 150 mn Fund', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NeoLiv%20Press%20Release%20-%20March%202024.pdf' },
  { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NEOLIVLaunchEvent.pdf' },
  { 
    description: 'Mohit Malhotra’s official confirmationon....', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdejjvcccircle.png', 
    buttonText: 'News', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' 
  },
  { 
    description: 'Mohit Malhotra, sharing his expert opinion....', 
    buttonText: 'News', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdj34NDTV.jpg', 
    iframeUrl: 'https://neoliv.in/MohitMalhotraonNDTVPropertyShow.mp4' // Add the iframe URL
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
    pdfUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlh7dxa69financial-express_11zon.jpg' 
  },

  // // Media Links
  // { 
  //   description: 'June - Media Links', 
  //   imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvywkulhMedia-Link.jpg', 
  //   buttonText: 'News', 
  //   pdfUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlh7dxa69financial-express_11zon.jpg' 
  // },
  // { 
  //   description: 'October - Media Links', 
  //   imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvywkulhMedia-Link.jpg', 
  //   buttonText: 'News', 
  //   pdfUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlh7dxa69financial-express_11zon.jpg' 
  // },
  // { 
  //   description: 'November - Media Links', 
  //   imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvywkulhMedia-Link.jpg', 
  //   buttonText: 'News', 
  //   pdfUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlh7dxa69financial-express_11zon.jpg' 
  // },
];

function AllNewsComponent() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleCardClick = (pdfUrl, iframeUrl) => {
  if (pdfUrl) {
    // If PDF URL exists, open it in a new tab
    window.open(pdfUrl, '_blank');
  } else if (iframeUrl) {
    // If iframe URL exists, create an anchor element and open it in a new tab
    const a = document.createElement('a');
    a.href = iframeUrl;
    a.target = '_blank';
    a.click();
  }
  setSelectedUrl(pdfUrl ? pdfUrl : iframeUrl);
};

  const CustomPrevArrow = ({ onClick }) => (
   <div className='hidden md:block'>
 <button
      className="absolute md:-top-20 left-0 top-1/2 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center text-blue-950 items-center"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

    </button>
   </div>
  );

  const CustomNextArrow = ({ onClick }) => (
   <div className='hidden md:block'>
     <button
      className="absolute right-0 md:-top-20 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center items-center"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-blue-950">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>

    </button>
   </div>
    
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
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
          slidesToShow: 17/15,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 17/15,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />, // Custom prev arrow
    nextArrow: <CustomNextArrow /> // Custom next arrow
  };



  return (
    <div className="slider-container md:py-10 py-4 text-center relative">
      <Slider className='md:mx-14 md:pb-0 pb-10' {...settings}>
        {newsData.map((card, index) => (
          <div className='md:px-2 my-6 md:ml-0 ml-8 px-3' key={index}>
            <Card 
              description={card.description} 
              imageUrl={card.imageUrl} 
              buttonText={card.buttonText} 
              onClick={() => handleCardClick(card.pdfUrl)} 
            />
          </div>
        ))}
        <div className="max-w-sm cursor-pointer md:ml-0 ml-8 md:h-[20.5rem] h-[19.4rem] rounded hover:underline overflow-hidden shadow-lg relative">
          <div className='my-6 md:ml-0  px-2'>
          <img src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilw6n57teUntitled%20design%20-%202024-05-14T223225.439.png" className="w-full border border-gray-300" alt="Image description" />
      <div className="card-body h-10 font-medium block pt-3 space-y-11">
        <NavLink to="/Junemedia" >June Media</NavLink><br />
        <NavLink to={MyPDF} target="_blank">October Media</NavLink><br />
       <NavLink to="/novembermedia">November Media</NavLink>
      </div>
          </div>
    </div>
      </Slider>
    </div>
  );
}

export default AllNewsComponent;
