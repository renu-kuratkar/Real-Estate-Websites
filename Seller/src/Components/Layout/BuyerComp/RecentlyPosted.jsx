import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomerImage from "../../../assets/Customer.jpg"; // Correctly import the image

// Dummy property data
const properties = [
    {
        id: 1,
        name: "Mr. Reddy",
        description: "Residential 1203 sq.ft. in Warangal",
        time: "2 days ago",
    },
    {
        id: 2,
        name: "Sreenivas",
        description: "Independent House/Villa 2205 sq.ft. in Vijaypuri",
        time: "3 months ago",
    },
    {
        id: 3,
        name: "Ms. Priya",
        description: "Apartment 1500 sq.ft. in Hyderabad",
        time: "1 month ago",
    },
    {
        id: 4,
        name: "Mr. Sharma",
        description: "Villa 1800 sq.ft. in Bangalore",
        time: "5 hours ago",
    },
    {
        id: 5,
        name: "Mrs. Kavita",
        description: "Studio Apartment 550 sq.ft. in Mumbai",
        time: "1 week ago",
    },
    {
        id: 6,
        name: "Rahul Gupta",
        description: "Residential Plot 2500 sq.ft. in Delhi",
        time: "2 weeks ago",
    },
];

const RecentlyPosted = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Generate overlapping slides
    const generateSlides = () => {
        const slides = [];
        for (let i = 0; i < properties.length - 1; i++) {
            slides.push([properties[i], properties[i + 1]]);
        }
        return slides;
    };

    const slides = generateSlides();
    const totalSlides = slides.length;

    // Navigate to next slide
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    // Navigate to previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 ) % totalSlides);
    };

    return (
        <div className="w-3/5 mt-12 px-4 pb-35">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-black mb-6">
                Recently posted properties
            </h2>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                {/* Carousel Content */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${totalSlides * 100}%`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 flex justify-center space-x-4"
                            style={{ width: "20%" }}
                        >
                            {slide.map((property) => (
                                <div
                                    key={property.id}
                                    className="w-[40%] bg-white p-4 rounded-lg shadow-md border border-gray-200"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={CustomerImage} // Use the same image for all properties
                                            alt={property.name}
                                            className="w-12 h-12 rounded-full border-2 border-red-900"
                                        />
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                <strong className="text-black">{property.name}</strong>{" "}
                                                posted a {property.description}
                                            </p>
                                            <span className="text-xs text-gray-400">
                                                {property.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 z-10"
                >
                    <FaChevronRight />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-4">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 mx-1 rounded-full ${
                                index === currentIndex ? "bg-red-900" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentlyPosted;
