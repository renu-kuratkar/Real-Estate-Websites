import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HoverCard from "../ui/HoverCard"; // Adjust path as needed

const SwiperComponent = () => {
  const images = [
    "/Image/img4.jpg",
    "/Image/img5.jpg",
    "/Image/img6.jpg",
    "/Image/img7.jpg",
    "/Image/img4.jpg",
    "/Image/img5.jpg",
    "/Image/img6.jpg",
    "/Image/img7.jpg",
  ];

  return ( 
    <div className="relative w-full max-w-screen-xl justify-between mx-auto mt-10 overflow-x-hidden "> 
      <Swiper
        slidesPerView="auto" // ✅ Show images in a row
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="w-auto">
            <HoverCard image={img} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom Swiper Styles */}
      <style jsx>{`
        .swiper-wrapper {
          display: flex !important;
        }
        .swiper-slide {
          width: auto !important; /* ✅ Ensures images align in a row */
          flex-shrink: 0;
        }
        .swiper-pagination {
          bottom: -5px !important;
        }
        .swiper-pagination-bullet {
          background-color: #ccc !important;
          opacity: 0.7;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background-color: #007bff !important;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </div>
  );
};

export default SwiperComponent;
