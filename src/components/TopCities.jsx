import React from "react";
import Slider from "react-slick";

// Cities Data
const cities = [
  { name: "Delhi / NCR", properties: "139,000+ Properties", image: "https://mediacdn.99acres.com/media1/11848/1/236961707D-1594715125517.jpg" },
  { name: "Mumbai", properties: "33,000+ Properties", image: "https://mediacdn.99acres.com/media1/11848/15/236975527D-1594718126587.jpg" },
  { name: "Bangalore", properties: "35,000+ Properties", image: "https://mediacdn.99acres.com/media1/11846/12/236932009D-1594709336922.jpg" },
  { name: "Hyderabad", properties: "20,000+ Properties", image: "https://mediacdn.99acres.com/media1/20718/6/414366500D-1679814327585.jpg" },
  { name: "Pune", properties: "36,000+ Properties", image: "https://mediacdn.99acres.com/media1/16807/3/336143474D-1640587363487.jpg" },
  { name: "Kolkata", properties: "24,000+ Properties", image: "https://mediacdn.99acres.com/media1/11848/13/236973031D-1594717541096.jpg" },
  { name: "Chennai", properties: "30,000+ Properties", image: "https://mediacdn.99acres.com/media1/11848/0/236960749D-1594714810078.jpg" },
  { name: "Ahmedabad", properties: "19,000+ Properties", image: "https://imagecdn.99acres.com/media1/24073/2/481462274D-1711002313632.jpg" },
];

const TopCities = () => {
  // Slider settings
  const settings = {
    dots: false, // No bottom dots
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto sliding
    autoplaySpeed: 1000, // Slide change every 2 seconds
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Tablet
      { breakpoint: 768, settings: { slidesToShow: 2 } }, // Small screens
      { breakpoint: 480, settings: { slidesToShow: 1 } }, // Mobile
    ],
  };

  return (
    <div className="w-full mx-auto px-4 py-15 p-12">
      {/* Heading */}
      <h3 className="text-gray-500 text-sm font-semibold uppercase pl-6">Top Cities</h3>
      <h1 className="text-3xl font-bold text-gray-900 mt-1 pl-6">
        Explore Real Estate in Popular Indian Cities
      </h1>

      {/* Cities Slider */}
      <div className="mt-6 ">
        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img src={city.image} alt={city.name} className="w-full h-39 rounded-md object-cover" />
                <h3 className="text-lg font-semibold mt-2">{city.name}</h3>
                <p className="text-gray-500 text-sm">{city.properties}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopCities;
