import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";
import property4 from "../assets/property4.jpg";
import banner from "../assets/banner.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import PropertyListing from "./PropertyListing";
import List from "./List";
import NewProperty from "./NewProperty";
import UpcomingProjectCard from "./UpcomingProjectCard";
import TopArticles from "./TopArticles";
import TopGainers from "./TopGainers";
import InsightsTools from "./InsightsTools";
import AdvertiserSelection from "./AdvertiserSelection";
import SelectionCard from "./SelectionCard";
import VideoBanner from "./VideoBanner";
import StorySection from "./StorySection";
import PropertySearch from "./PropertySearch";
import BudgetBrowser from "./BudgetBrowser";
import GoalCards from "./GoalCards";

const properties = [
  {
    id: 1,
    image: property1,
    price: "₹ 1 Cr",
    title: "2 BHK Apartment, 2 Baths",
    location: "Rama Melange Residences, Hinjewadi",
    posted: "Posted by Owner",
    time: "1 month ago",
  },
  {
    id: 2,
    image: property2,
    price: "₹ 1 Cr",
    title: "2 BHK Apartment, 2 Baths",
    location: "Pegasus Megapolis Mystic, Hinjewadi",
    posted: "Posted by Owner",
    time: "2 weeks ago",
  },
  {
    id: 3,
    image: property3,
    price: "₹ 1.17 Cr",
    title: "2 BHK Apartment, 2 Baths",
    location: "Redshift Bloomville, Hinjewadi",
    posted: "Posted by Owner",
    time: "3 weeks ago",
  },
  {
    id: 4,
    image: property4,
    price: "₹ 1.3 Cr",
    title: "3 BHK Apartment",
    location: "Shapoorji Joyville, Pune",
    posted: "Posted by Owner",
    time: "1 month ago",
  },
];

export default function Properties({ openLoginModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  const viewPropertyDetails = (id) => {
    navigate(`/property/${id}`); // Navigate to PropertyDetails page with id
  };

  return (
    <div>
      {/* Banner Image */}
      <div className="w-full mt-13">
        <img
          src="https://www.zaminwale.com/assets/banner-img/3rd-mumbai-ad.avif"
          alt="Sample Preview"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start p-7 mt-10">
        {/* Left Side - Property Slider */}
        <div className="relative w-full md:w-2/3">
          <h2 className="text-2xl font-bold">Recommended Properties</h2>
          <p className="text-gray-600 mb-4">Curated especially for you</p>

          {/* Left Arrow */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>

          {/* Property Slider */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out flex-nowrap"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="min-w-[280px] md:min-w-[302px] p-2 relative cursor-pointer"
                  onClick={() => viewPropertyDetails(property.id)}
                >
                  <div className="border rounded-lg shadow-md overflow-hidden w-full">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-56 object-cover"
                    />
                    <span className="bg-white px-2 py-1 text-sm font-bold text-blue-600 rounded absolute top-2 left-2">
                      {property.price}
                    </span>
                  </div>

                  <div className="p-3">
                    <h3 className="font-bold text-sm">{property.title}</h3>
                    <p className="text-xs text-gray-500">{property.location}</p>
                    <p className="text-xs text-gray-400">
                      {property.posted} - {property.time}
                    </p>
                  </div>

                  {/* View Button */}
                  {/* <button
                    className="absolute bottom-7 mr-4 right-4 bg-red-900 text-white px-4 py-2 rounded-full text-sm"
                    onClick={() => viewPropertyDetails(property.id)}
                  >
                    View
                  </button> */}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>

          {/* Additional Components - Outside the Slider */}
          <PropertyListing />
          <VideoBanner />
          <List />
          <BudgetBrowser />
          <NewProperty />
          <StorySection />
          <UpcomingProjectCard />
          <InsightsTools />
          <GoalCards />
          <TopGainers />
          <AdvertiserSelection />
          <PropertySearch />
        </div>

        {/* Right Side - Guest User Section */}
        <div className="md:w-1/3 ml-auto md:ml-8 sticky top-20">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Guest User</h3>
            <p className="text-gray-600">Your Recent Activity</p>
            <div className="p-3 bg-white shadow-md rounded-lg mt-2 text-center">
              <span className="text-2xl font-bold text-black">10</span>
              <p className="text-gray-600">Viewed</p>
            </div>
            <button
              className="w-full bg-red-900 text-white p-2 rounded-lg mt-4"
              onClick={openLoginModal} // Call the function when clicked
            >
              Login/Register to Save Activity
            </button>
          </div>

          {/* Sticky Banner */}
          <img
            src={banner}
            alt="Sample"
            className="w-full mt-4 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
