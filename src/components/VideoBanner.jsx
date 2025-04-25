import React from "react";

const VideoBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://panel.vtprealty.in/uploads/banner_0afb182325.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">
            Explore our luxurious properties designed for comfort and elegance.
          </p>
          <button className="px-6 py-3 bg-red-900 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
            View Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
