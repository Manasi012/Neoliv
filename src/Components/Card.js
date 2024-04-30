import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl">
      <img className="w-full" src={imageUrl} alt="Card" />
      <div className="px-6 py-4">
        <p className="font-medium text-left leading-6 text-base h-20">{description}</p>
      </div>
    </div>
  );
};

export default Card; // Ensure that Card is exported
