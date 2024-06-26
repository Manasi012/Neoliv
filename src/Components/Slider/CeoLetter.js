import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";

const cardData = [
  {
    description: "April 2023",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg",
    buttonText: "Ceo NewsLetter",
    pdfUrl: "https://neoliv.in/docs/NeoLivUpdate-April2023.pdf",
  },
  {
    description: "July 2023",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg",
    buttonText: "Ceo NewsLetter",
    pdfUrl: "https://neoliv.in/docs/CEO_Letter_July2023.pdf",
  },
  {
    description: "November 2023",
    buttonText: "Ceo NewsLetter",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe1q7sceoletter.jpg",
    pdfUrl: "https://neoliv.in/docs/NeoLivUpdate-April2023.pdf",
  },
];

function CeoLetter() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
    setSelectedPdf(pdfUrl);
  };

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 17 / 15,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 17 / 15,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10">
      <Slider className="md:mx-10" {...settings}>
        {cardData.map((card, index) => (
          <div
            className="md:px-2 my-6 md:ml-0 ml-8 px-3 text-center"
            key={index}
          >
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
