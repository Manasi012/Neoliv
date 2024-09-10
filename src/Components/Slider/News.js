import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import pdfFile7 from '../../Assets/pdf/vccircle.pdf';
import pdfFile8 from '../../Assets/pdf/financial.pdf';
import pdfFile9 from '../../Assets/video/MohitMalhotraonNDTVPropertyShow.mp4';
import pdfFile10 from '../../Assets/video/dainik_bhaskar.mp4';
import pdfFile11 from '../../Assets/video/MM_TV18.mp4';



const cardData = [
  {
    description: "Mohit Malhotra’s official confirmationon....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdejjvcccircle.png",
    buttonText: "News",
    pdfUrl: pdfFile7,
  },
  {
    description: "Mohit Malhotra, sharing his expert opinion....",
    buttonText: "News",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdj34NDTV.jpg",
    iframeUrl: pdfFile9, // Add the iframe URL
  },
  {
    description: "Mohit Malhotra (ex MD and CEO of Godrej Prop....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbdw2yDainik-Bhaskar.jpg",
    buttonText: "News",
    iframeUrl: pdfFile10,
  },
  {
    description: "Mohit Malhotra’s official confirmation on....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbe3liTV-18.jpg",
    buttonText: "News",
    iframeUrl: pdfFile11,
  },
  {
    description: "Mohit Malhotra, the former managing director....",
    imageUrl:
      "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvqbeb10Financial-Express.jpg",
    buttonText: "News",
    pdfUrl: pdfFile8,
  },
];

function News() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  const handleCardClick = (pdfUrl, iframeUrl) => {
    // Open the PDF URL if it exists, otherwise open the iframe URL
    window.open(pdfUrl ? pdfUrl : iframeUrl, "_blank");
    setSelectedUrl(pdfUrl ? pdfUrl : iframeUrl);
  };

  const CustomPrevArrow = ({ onClick }) => (
    <div className="hidden md:block">
      <button
        className="absolute md:top-40 -inset-12 z-40 top-1/2 transform -translate-y-1/2 hover:text-blue-950 rounded-full w-10 h-10 flex justify-center text-blue-950 items-center"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-blue-950"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
          dots: true,
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
    prevArrow: <CustomPrevArrow />, // Custom prev arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow
  };
  return (
    <div className="slider-container py-10 text-center relative">
      <Slider className="md:mx-20" {...settings}>
        {cardData.map((card, index) => (
          <div className="md:px-2 my-6 md:ml-0 ml-8 px-3" key={index}>
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
