import React from 'react';

const Card = ({ imageUrl, description, buttonText }) => {
  return (
    <div className="max-w-sm md:h-[22rem] h-auto rounded overflow-hidden shadow-lg relative">
      <img className="w-full" src={imageUrl} alt="Card" />
      <button className="absolute -mt-10 left-5 bg_indigo text-white font-bold py-1 px-3 rounded-xl text-[13px]">
        {buttonText}
      </button>
      <div className="px-6 py-4">
        <p className="font-medium pt-4">{description}</p>
      </div>
    </div>
      );
};
export default Card; // Ensure that Card is exported
