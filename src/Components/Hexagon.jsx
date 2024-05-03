import React from 'react';

const Hexagon = () => {
  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Top hexagon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 w-32">
        <div className="hexagon bg-blue-500">
          <div className="content">
            <h2 className="text-white">Top Hexagon</h2>
            <img src="your_image_url" alt="Center" className="w-16 h-16" />
          </div>
        </div>
      </div>
      {/* Left hexagon */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 w-32">
        <div className="hexagon bg-green-500">
          <div className="content">
            <h2 className="text-white">Left Hexagon</h2>
            <img src="your_image_url" alt="Center" className="w-16 h-16" />
          </div>
        </div>
      </div>
      {/* Right hexagon */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 w-32">
        <div className="hexagon bg-red-500">
          <div className="content">
            <h2 className="text-white">Right Hexagon</h2>
            <img src="your_image_url" alt="Center" className="w-16 h-16" />
          </div>
        </div>
      </div>
      {/* Bottom hexagon */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-32">
        <div className="hexagon bg-yellow-500">
          <div className="content">
            <h2 className="text-white">Bottom Hexagon</h2>
            <img src="your_image_url" alt="Center" className="w-16 h-16" />
          </div>
        </div>
      </div>
      {/* Center image */}
      <div className="relative z-10">
        <img src="your_image_url" alt="Center" className="w-32 h-32" />
      </div>
    </div>
  );
};

export default Hexagon;
