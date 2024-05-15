import React from "react";
import BackButton from '../Components/BackButton'


const CustomerCentric = () => {
  const videoStyle = {
    clipPath: "inset(1px 1px)",
  };

  return (
    <>
      {/* <Bluenavbar />
      <Header /> */}
   <div>
  <BackButton />
  </div>
      <div className="text-center py-10 space-y-5">
        <h3 className="text-4xl text-blue-950">Customer Centric</h3>
        <p className="text-lg font-medium">
          Customer is at our core through transparent communication,
          tech-enabled interface, relationship manager model and long-term
          commitment.
        </p>
      </div>

      <div className="flex justify-center pb-10">
        <video
          className="md:w-[50%] w-full"
          autoPlay
          muted
          loop
          style={videoStyle}
        >
          <source
            src="https://propstory.in/Neoliv-Demo/AnimationNew.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="md:flex justify-center gap-10 py-10 md:px-20 px-5">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-52 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkftooIcons-01neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Product and Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Consumer Research-led Design and Top-Quality Assurance
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-52 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkg1vxIcons-02neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Product and Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Consumer Research-led Design and Top-Quality Assurance
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center gap-10 pb-10 md:px-20 px-5">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-52 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkgampIcons-03neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Product and Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Consumer Research-led Design and Top-Quality Assurance
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-52 rounded-t-lg h-auto md:h-auto md:w-24 md:rounded-none md:rounded-s-lg"
            src="https://cdn.propstory.com/magicpages/NAME/16iwl4k1anlslkftooIcons-01neo.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Product and Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Consumer Research-led Design and Top-Quality Assurance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCentric;