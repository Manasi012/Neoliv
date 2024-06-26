import React from "react";

const Partners_Images = () => {
  return (
    <>
      <div className="text-center pt-10">
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium">
          Seasoned Industry Professionals
        </h4>
      </div>
      <div className="md:pt-5 pt-10 md:mx-20 mx-5 md:mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="justify-self-center">
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilx1h8g66partner2.jpg"
              alt="partners image"
              className="w-full border border-blue-950"
            />
          </div>
          <div className="justify-self-center">
            <img
              src="https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilx1heto2partner1.jpg"
              alt="partners image"
              className="w-full border border-blue-950"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners_Images;
