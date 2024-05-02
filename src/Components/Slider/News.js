import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';

const cardData = [
  { 
    description: 'Mohit Malhotra’s official confirmation on his new venture post his resignation from Godrej Limited, where he served as MD and CEO for 6 years.', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwlh6acw4dVCCircle.png', 
    buttonText: 'CEO Letter', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' // Add the iframe URL
  },
  { 
    description: 'CEO’s Letter July 2023', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', 
    buttonText: 'CEO Letter', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' // Add the iframe URL
  },
  { 
    description: 'CEO’s Letter November 2023', 
    buttonText: 'CEO Letter', 
    imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', 
    iframeUrl: 'https://neoliv.in/MM_TV18.mp4' // Add the iframe URL
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
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay:true,
    slidesToShow: 3,
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
    <div>
      <Slider className='md:mx-10' {...settings}>
        {cardData.map((card, index) => (
          <div className='text-center md:mx-20 my-6' key={index}>
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
