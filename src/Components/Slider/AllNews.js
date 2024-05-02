import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

const newsData = [
  { description: 'CEO’s Letter April 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', buttonText:'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  { description: 'CEO’s Letter July 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', buttonText:'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/CEO_Letter_July2023.pdf' },
  { description: 'CEO’s Letter November 2023', buttonText:'Ceo Letter', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  { description: 'March 2024- First close of USD 150 mn Fund', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4k2psls4vqbr3349x260-2.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NeoLiv%20Press%20Release%20-%20March%202024.pdf' },
  { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4k2psls4vqbr3349x260-2.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NEOLIVLaunchEvent.pdf' },
];

function AllNewsComponent() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
    setSelectedPdf(pdfUrl);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
    <div className="slider-container py-10 text-center">
      <Slider className='md:mx-14' {...settings}>
        {newsData.map((card, index) => (
          <div className='md:px-2 my-6' key={index}>
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

export default AllNewsComponent;
