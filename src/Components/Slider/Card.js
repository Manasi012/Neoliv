import React from 'react';

const Card = ({ imageUrl, description, buttonText, onClick }) => {

  const handleButtonClick = (event) => {
    // Prevent the default action of the button
    event.preventDefault();
    // Call the onClick function passed from the parent component
    onClick();
  };

  return (
    <div className="max-w-sm cursor-pointer md:h-[24rem] h-auto rounded hover:underline overflow-hidden shadow-lg relative" onClick={onClick}>
      <img className="w-full" src={imageUrl} alt="Card" />
      <button 
        className="absolute -mt-10 left-5 bg_indigo text-white font-bold py-1 px-3 rounded-xl text-[13px]" 
        onClick={handleButtonClick} // Call handleButtonClick when button is clicked
      >
        {buttonText}
      </button>
      <div className="px-6 py-4">
        <p className="font-medium p-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
