import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const locations = [
  { id: 1, name: "Ranjanpada Plots", image: "https://www.zaminwale.com/assets/top-location/img5.jpg" },
  { id: 2, name: "Vindhane Plots", image: "https://www.zaminwale.com/assets/top-location/img7.jpg" },
  { id: 3, name: "Thane Plots", image: "https://www.zaminwale.com/assets/top-location/img4.jpg" },
  { id: 4, name: "Panvel Plots", image: "https://www.zaminwale.com/assets/top-location/img3.jpg" },
];

export default function TopLocations() {
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
    <div className="relative w-full  mx-auto px-4 py-6 p-5">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        Top Locations
        {/* <span className="ml-2 w-10 h-1 bg-red-700 rounded"></span> */}
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full text-gray-700 z-10 hidden md:flex"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth snap-x"
      >
        {locations.map((location) => (
          <div
            key={location.id}
            className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] bg-white rounded-lg shadow-md overflow-hidden snap-center"
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold">{location.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full text-gray-700 z-10 hidden md:flex"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
