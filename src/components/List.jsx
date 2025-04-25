import React from "react";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Villa/bungalow",
    location: "Karjat, Navi Mumbai",
    price: "₹ 55 L",
    image:
      "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/2309a3b1-2449-43ab-9bd4-9d1b342dee0c.jpeg",
  },
  {
    id: 2,
    title: "Villa/bungalow",
    location: "Karjat, Navi Mumbai",
    price: "₹ 35 L",
    image:
      "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/3a4ab53a-1120-4603-8059-a061f522c1ec.jpg",
  },
  {
    id: 3,
    title: "Villa/bungalow",
    location: "Panvel, Navi Mumbai",
    price: "₹ 35 L",
    image:
      "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/f2650b5a-8d0a-4020-b901-c21643dfaffa.jpeg",
  },
  {
    id: 4, // Changed duplicate id to 4
    title: "Villa/bungalow",
    location: "Karjat, Navi Mumbai",
    price: "₹ 55 L",
    image:
      "https://zaminwale-private.s3.ap-south-1.amazonaws.com/assets/property/images/2309a3b1-2449-43ab-9bd4-9d1b342dee0c.jpeg",
  },
];

const List = () => {
  const navigate= useNavigate();
  const handleClick =()=>{
    navigate('/villbunglow')
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Bunglow Properties</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative rounded-2xl shadow-lg min-w-[340px] lg:min-w-[400px] h-[250px] overflow-hidden"
           
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
              onClick={handleClick}
            />
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-opacity-1 flex flex-col justify-end p-4 text-white"
             onClick={handleClick}
            >
              <h3 className="text-2xl font-bold">{property.title}</h3>
              <p className="text-sm">{property.location}</p>
              <p className="text-xl font-bold">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
