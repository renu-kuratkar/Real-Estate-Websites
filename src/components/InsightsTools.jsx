import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const insights = [
  {
    id: 1,
    title: "Pune Overview",
    description: "Know what’s great & upcoming developments",
    image: "https://www.99acres.com/universalapp/img/LocalityInsights2.png",
  },
  {
    id: 2,
    title: "Property Rates in Pune",
    description: "Check property rates and prices",
    image: "https://www.99acres.com/universalapp/img/PriceTrend2.png",
  },
  {
    id: 3,
    title: "Genuine reviews of Pune",
    description: "Know what residents are saying",
    image: "https://www.99acres.com/universalapp/img/ReviewsRatings2.png",
  },
  {
    id: 4,
    title: "Transport in Pune",
    description: "Check transport facilities and connectivity",
    image: "https://www.99acres.com/universalapp/img/TransactionPrices2.png",
  },
];

export default function InsightsTools() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-blue-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title and Button */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <span className="text-blue-600 mr-2">💡</span> Insights & Tools
            </h2>
            <p className="text-gray-600">Go from browsing to buying</p>
          </div>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
            View all Insights
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-700 hidden md:flex"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x scrollbar-hide"
          >
            {insights.map((item) => (
              <div
                key={item.id}
                className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] bg-white rounded-lg shadow-md overflow-hidden snap-center"
              >
                <div className="p-6 text-center">
                  <img src={item.image} alt={item.title} className="w-14 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-gray-700 hidden md:flex"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
