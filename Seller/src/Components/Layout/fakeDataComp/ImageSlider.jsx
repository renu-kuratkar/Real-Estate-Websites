import { useState, useEffect } from "react";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";

const images = [image1, image2, image3, image4];

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-0 w-9/10 mx-auto h-[400px] md:h-[500px] overflow-hidden flex flex-col items-center">
      {/* Image Container with Sliding Effect */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-[400px] md:h-[500px] object-fill rounded-b-[50px] flex-shrink-0"
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? "bg-gray-800 scale-125" : "bg-gray-300 opacity-50"
            }`}
          ></div>
        ))}
      </div>

      {/* Static Image Below Carousel */}
      <img
        src="/assets/one.png"
        alt="Static Slide"
        className="w-100 h-100 mt-5 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImageSlider;
