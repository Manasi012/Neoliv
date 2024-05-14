// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import Card from './Card';

// const cardData = [
//   { description: 'March 2024- First close of USD 150 mn Fund', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NeoLiv%20Press%20Release%20-%20March%202024.pdf' },
//   { description: 'June 2023: 360 ONE Launch event', imageUrl: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilvxe3nbwevents.jpg', buttonText:'Events', pdfUrl: 'https://neoliv.in/docs/NEOLIVLaunchEvent.pdf' },
// ];

// function Events() {
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   const handleCardClick = (pdfUrl) => {
//     window.open(pdfUrl, '_blank');
//     setSelectedPdf(pdfUrl);
//   };

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay:true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 17/15,
//           slidesToScroll: 1,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 17/15,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className='py-10'>
//       <Slider className='md:mx-64' {...settings}>
//         {cardData.map((card, index) => (
//           <div className='md:mx-20 my-6 md:ml-0 md:px-0 ml-8 px-3' key={index}>
//             <Card 
//               description={card.description} 
//               imageUrl={card.imageUrl} 
//               buttonText={card.buttonText} 
//               onClick={() => handleCardClick(card.pdfUrl)} 
//             />
//           </div>
//         ))}
//       </Slider>

     
//     </div>
//   );
// }

// export default Events;
import React from 'react';
import { NavLink } from 'react-router-dom';

const AllMediaCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">All Media</h5>
        <p className="card-text">June Media <NavLink to="/page1">June Mediav</NavLink></p>
        <p className="card-text">June Media<NavLink to="/page2">June MediaJune Media</NavLink></p>
        <p className="card-text">June Media<NavLink to="/page3">June Mediav</NavLink></p>
      </div>
    </div>
  );
}

export default AllMediaCard;
