import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyCarousel2 = () => {
    const properties = [
        { id: 1, title: "Luxury Apartment", location: "Pune", price: "₹50L", img: "/image1.jpg" },
        { id: 2, title: "Villa in Baner", location: "Baner, Pune", price: "₹1.2Cr", img: "/image2.jpg" },
        { id: 3, title: "Cozy Studio", location: "Koregaon Park", price: "₹35L", img: "/image3.jpg" },
        { id: 4, title: "Modern Penthouse", location: "Hinjewadi", price: "₹80L", img: "/image4.jpg" },
      ];
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      return (
        <Slider {...settings} className="w-full">
          {properties.map((property) => (
            <div key={property.id} className="p-4">
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
                {/* New Launch Badge */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New Launch
                </div>
    
                {/* Image */}
                <img src={property.img} alt={property.title} className="w-full h-40 object-cover" />
    
                {/* Ticket Cutout Effect */}
                <div className="relative p-4 bg-white border-t border-dashed border-gray-400">
                  <div className="absolute -top-3 left-0 w-6 h-6 bg-white rounded-full border border-gray-400"></div>
                  <div className="absolute -top-3 right-0 w-6 h-6 bg-white rounded-full border border-gray-400"></div>
    
                  {/* Details */}
                  <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <p className="text-lg font-semibold text-green-600">{property.price}</p>
    
                  {/* Button */}
                  <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      );
    };
    

export default PropertyCarousel2;
