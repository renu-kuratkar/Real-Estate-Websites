import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for slider buttons

const articles = [
  {
    title: "Pune property registrations drop by 8%",
    date: "Feb 27, 2025",
    image: "/your-image-path/image.png", // Replace with actual image path
  },
  {
    title: "UC Punawale Skyscapers buys Rs 129 crore land",
    date: "Feb 20, 2025",
    image: "/your-image-path/image.png",
  },
  {
    title: "No rise in Pune Pimpri Chinchwad property tax",
    date: "Feb 04, 2025",
    image: "/your-image-path/image.png",
  },
  {
    title: "Ready reckoner hike proposed for Pune, PCMC",
    date: "Jan 31, 2025",
    image: "/your-image-path/image.png",
  },
];

const TopArticles = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-100 py-6 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Top articles on home buying</h2>
        <a href="#" className="text-blue-600 hover:underline">
          Read realty news, guides & articles
        </a>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto flex space-x-6 border-b overflow-x-auto no-scrollbar">
        {["News", "Tax & Legal", "Help Guides", "Investment"].map((tab, index) => (
          <button
            key={index}
            className={`pb-2 text-gray-600 hover:text-blue-600 ${
              index === 0 ? "border-b-2 border-blue-600 text-blue-600 font-semibold" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Slider with Controls */}
      <div className="relative max-w-6xl mx-auto mt-4">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full md:flex"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Articles List (Scrollable but No Scrollbar) */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll space-x-4 scroll-smooth px-4 no-scrollbar"
        >
          {articles.map((article, index) => (
            <div key={index} className="min-w-[300px] bg-white shadow-md rounded-lg">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-3">
                <h3 className="text-md font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopArticles;
