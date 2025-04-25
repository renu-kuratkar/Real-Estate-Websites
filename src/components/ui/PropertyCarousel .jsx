import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const properties = [
    {
      id: 1,
      image: "/Image/property1.jpg",
      title: "1 BHK Apartment, 1 Bath",
      price: "₹25 Lac",
      location: "Near Pawar Hospital, Wagholi, Pune",
    },
    {
      id: 2,
      image: "/Image/property2.jpg",
      title: "2 BHK Luxury Apartment",
      price: "₹55 Lac",
      location: "Kharadi, Pune",
    },
    {
      id: 3,
      image: "/Image/property3.jpg",
      title: "3 BHK Spacious Flat",
      price: "₹75 Lac",
      location: "Baner, Pune",
    },
    {
      id: 4,
      image: "/Image/property4.jpg",
      title: "4 BHK Independent House",
      price: "₹1.2 Cr",
      location: "Viman Nagar, Pune",
    },
    {
      id: 5,
      image: "/Image/property5.jpg",
      title: "Luxury Penthouse",
      price: "₹2.5 Cr",
      location: "Koregaon Park, Pune",
    },
    {
      id: 6,
      image: "/Image/property6.webp",
      title: "2 BHK Furnished Apartment",
      price: "₹45 Lac",
      location: "Hinjewadi Phase 1, Pune",
    },
    {
      id: 7,
      image: "/Image/property7.webp",
      title: "3 BHK Villa with Garden",
      price: "₹1.8 Cr",
      location: "Balewadi, Pune",
    },
    {
      id: 8,
      image: "/Image/property8.webp",
      title: "Studio Apartment",
      price: "₹35 Lac",
      location: "Magarpatta City, Pune",
    },
    {
      id: 9,
      image: "/Image/property9.jpg",
      title: "5 BHK Ultra-Luxury Villa",
      price: "₹5 Cr",
      location: "Boat Club Road, Pune",
    },
  ];
  

const PropertyCarousel = () => {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-black text-2xl font-bold pb-2">Recommended Properties</h1>
        <p className="text-black/75 pb-2">Curated especially for you</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
                
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden p-4 h-[350px] flex flex-col">
                
                {/* Image Wrapper with Price Overlay & Hover Zoom */}
                <div className="relative overflow-hidden rounded-md group">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-48 min-h-[200px] object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  {/* Price Tag Positioned at Bottom Left */}
                  <div className="absolute bottom-2 left-2 bg-white text-black text-sm font-bold px-3 py-1 rounded-md shadow-2xl">
                    {property.price}
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </div>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};





  

export default PropertyCarousel;
