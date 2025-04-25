import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const properties = [
  {
    id: 1,
    title: "Investment Plots",
    description:
      "Your future prospects look great when you buy investment plots with regards to profitable returns.",
    image: "https://www.zaminwale.com/assets/property/investment.webp",
    route: "/residential",
  },
  {
    id: 2,
    title: "Commercial Plots",
    description:
      "Contact us for best returns on plots invested near junctions, stations highways, and busy market places.",
    image: "https://www.zaminwale.com/assets/property/commercial.webp",
    route: "/commercial",
  },
  {
    id: 3,
    title: "Residential Plots",
    description:
      "In case you are a developer yourself and planning to expand your business venture, do contact us for the list of residential plots.",
    image: "https://www.zaminwale.com/assets/property/residential.webp",
    route: "/residential",
  },
  {
    id: 4,
    title: "Hill View Bungalow",
    description:
      "If you fancy living in a bungalow or row-house with your own independent terrace, parking and garden.",
    image: "https://www.zaminwale.com/assets/property/353640073_20231016184851.webp",
    route: "/villbunglow",
  },
];

const PropertySlider = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Find Your Dream Plots With Zaminwale.
      </h2>
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="px-2">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden h-full min-h-[360px] flex flex-col cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(property.route)} // Navigate to the property route
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  {property.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
