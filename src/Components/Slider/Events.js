import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';

const cardData = [
  { description: 'March 2024- First close of USD 150 mn Fund', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4k2psls4vqbr3349x260-2.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NeoLiv%20Press%20Release%20-%20March%202024.pdf' },
  { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4k2psls4vqbr3349x260-2.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NEOLIVLaunchEvent.pdf' },
];

function Events() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
    setSelectedPdf(pdfUrl);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
      <Slider className='md:mx-64' {...settings}>
        {cardData.map((card, index) => (
          <div className='md:mx-20 my-6' key={index}>
            <Card 
              description={card.description} 
              imageUrl={card.imageUrl} 
              buttonText={card.buttonText} 
              onClick={() => handleCardClick(card.pdfUrl)} 
            />
          </div>
        ))}
      </Slider>

     
    </div>
  );
}

export default Events;
