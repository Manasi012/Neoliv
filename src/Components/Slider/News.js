import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';

const cardData = [
  { 
    description: 'Mohit Malhotra’s official confirmation on his new venture post his resignation from Godrej Limited, where he served as MD and CEO for 6 years.', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdejjvcccircle.png', 
    buttonText: 'News', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' 
  },
  { 
    description: 'Mohit Malhotra, sharing his expert opinion and future trends on ‘What Consumer Wants’ at India’s leading editorial Dainik Bhaskar Realty Conclave 2023 telecasted.', 
    buttonText: 'News', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdj34NDTV.jpg', 
    iframeUrl: 'https://neoliv.in/MohitMalhotraonNDTVPropertyShow.mp4' // Add the iframe URL
  },
  { 
    description: 'Mohit Malhotra (ex MD and CEO of Godrej Properties Ltd) shares his vision of Building NeoLiv - India’s Foremost Residential Real Estate Platform .', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdw2yDainik-Bhaskar.jpg', 
    buttonText: 'News', 
    iframeUrl: 'https://neoliv.in/dainik_bhaskar.mp4' 
  },
  { 
    description: 'Mohit Malhotra’s official confirmation on his new venture post his resignation from Godrej Properties Limited, where he served as MD and CEO for 6 years.', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbe3liTV-18.jpg', 
    buttonText: 'News', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' 
  },
  { 
    description: 'Mohit Malhotra, the former managing director and CEO of Godrej Properties, has set up a property development and investment company called NeoLiv.', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbeb10Financial-Express.jpg', 
    buttonText: 'News', 
    pdfUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlh7dxa69financial-express_11zon.jpg' 
  },
];

function News() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleCardClick = (pdfUrl, iframeUrl) => {
    // Open the PDF URL if it exists, otherwise open the iframe URL
    window.open(pdfUrl ? pdfUrl : iframeUrl, '_blank');
    setSelectedUrl(pdfUrl ? pdfUrl : iframeUrl);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
    ]
  };
  return (
    <div className="slider-container py-10 text-center">
    <Slider className='md:mx-14' {...settings}>
      {cardData.map((card, index) => (
        <div className='md:px-2 my-6 md:ml-0 md:px-0 ml-8 px-3' key={index}>
            <Card 
              description={card.description} 
              imageUrl={card.imageUrl} 
              buttonText={card.buttonText} 
              onClick={() => handleCardClick(card.pdfUrl, card.iframeUrl)} // Pass both URLs to the click handler
            />
          </div>
        ))}
      </Slider>

     
    </div>
  );
}

export default News;
