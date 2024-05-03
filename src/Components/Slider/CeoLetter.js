import React, { useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';

const cardData = [
  { description: 'CEO’s Letter April 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', buttonText:'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
  { description: 'CEO’s Letter July 2023', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', buttonText:'Ceo Letter', pdfUrl: 'https://neoliv.in/docs/CEO_Letter_July2023.pdf' },
  { description: 'CEO’s Letter November 2023', buttonText:'Ceo Letter', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4khzwli8not2gUntitled%20design%20-%202023-05-29T150626.356.png', pdfUrl: 'https://neoliv.in/docs/NeoLivUpdate-April2023.pdf' },
];

function CeoLetter() {
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
    <div className='py-10'>
      <Slider className='md:mx-10' {...settings}>
        {cardData.map((card, index) => (
          <div className='text-center md:mx-20 my-6 md:ml-0 md:px-0 ml-8 px-3' key={index}>
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

export default CeoLetter;
