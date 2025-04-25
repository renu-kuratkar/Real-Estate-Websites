import React, { useState } from "react";
import PropertyCard from "./PropertyCard";

// Dummy Data for Properties
const propertyData = [
  {
    id: 1,
    image:
      "https://avatars.collectcdn.com/660695150f95c58c78ec2e6a/660695150f95c58c78ec2e6a-660695160f95c58c78ec2e6c.gif?t=1711707703610",
    price: "73 L",
    title: " 2 Acers ",
    location: "Shree Balaji Orchard Park",
    city: "Bavdhan",
    postedBy: "Dealer",
    timeAgo: "1 week ago",
    verified: true,
    beds: 2,
    baths: 2,
    sqft: 1800,
  },
  {
    id: 2,
    image:
      "https://avatars.collectcdn.com/660695150f95c58c78ec2e6a/660695150f95c58c78ec2e6a-660695160f95c58c78ec2e6c.gif?t=1711707703610",
    price: "1.15 Cr",
    title: " 2 Acers ",
    location: "Garve Amora Homes",
    city: "Wakad, Pune",
    postedBy: "Owner",
    timeAgo: "1 month ago",
    verified: false,
    beds: 2,
    baths: 2,
    sqft: 2800,
  },
  {
    id: 3,
    image:
      "https://avatars.collectcdn.com/660695150f95c58c78ec2e6a/660695150f95c58c78ec2e6a-660695160f95c58c78ec2e6c.gif?t=1711707703610",
    price: "1.12 Cr",
    title: " 2 Acers ",
    location: "Rohan Tarang",
    city: "Wakad, Pune",
    postedBy: "Dealer",
    timeAgo: "5 days ago",
    verified: true,
    beds: 2,
    baths: 2,
    sqft: 2600,
  },
  {
    id: 4,
    image:
      "https://avatars.collectcdn.com/660695150f95c58c78ec2e6a/660695150f95c58c78ec2e6a-660695160f95c58c78ec2e6c.gif?t=1711707703610",
    price: "73 L",
    title: " 2 Acers ",
    location: "Shree Balaji Orchard Park",
    city: "Bavdhan",
    postedBy: "Dealer",
    timeAgo: "1 week ago",
    verified: true,
    beds: 2,
    baths: 2,
    sqft: 1800,
  },
  {
    id: 5,
    image:
      "https://avatars.collectcdn.com/660695150f95c58c78ec2e6a/660695150f95c58c78ec2e6a-660695160f95c58c78ec2e6c.gif?t=1711707703610",
    price: "73 L",
    title: " 2 Acers ",
    location: "Shree Balaji Orchard Park",
    city: "Bavdhan",
    postedBy: "Dealer",
    timeAgo: "1 week ago",
    verified: true,
    beds: 2,
    baths: 2,
    sqft: 1800,
  },
];

const PropertyList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5; // Number of cards to show at a time

  return (
    <div className="property-list px-4 pb-8 ">
      {/* Section Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Recommended Properties
        </h2>
        <p className="text-gray-500 text-sm">Curated especially for you</p>
      </div>

      {/* Property Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {propertyData
          .slice(currentIndex, currentIndex + visibleItems)
          .map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
      </div>
    </div>
  );
};

export default PropertyList;
