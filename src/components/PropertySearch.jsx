import React from "react";

const data = [
  {
    category: "Apartment",
    description: "Most searched localities for Flat/Apartment",
    locations: [
      { name: "Wakad", percentage: 40 },
      { name: "Kharadi", percentage: 30 },
      { name: "Baner", percentage: 50 },
      { name: "Hinjewadi", percentage: 20 },
      { name: "Hadapsar", percentage: 60 },
    ],
    color: "bg-blue-500",
    icon: "🏢",
  },
  {
    category: "Plots",
    description: "Most searched societies for Plots",
    locations: [
      { name: "Wagholi", percentage: 45 },
      { name: "Pimpri ", percentage: 35 },
      { name: "Hinjewadi", percentage: 25 },
      { name: "Lohegaon", percentage: 50 },
      { name: "Ranjangaon", percentage: 10 },
    ],
    color: "bg-green-500",
    icon: "📌",
  },
  {
    category: "Builder Floor",
    description: "Most searched societies for Builder Floor",
    locations: [
      { name: "Wakad", percentage: 55 },
      { name: "Baner", percentage: 60 },
      { name: "Pimpri", percentage: 40 },
      { name: "Kharadi", percentage: 30 },
      { name: "Hadapsar", percentage: 70 },
    ],
    color: "bg-red-900",
    icon: "🏗️",
  },
];

const PropertySearch = () => {
  return (
   
    <div className="container mx-auto p-4">
     <h1 className="text-2xl font-bold text-gray-800 text-left mb-6">
        Demand In Pune
      </h1>
      {/* Flexbox for Horizontal Layout */}
      <div className="flex gap-6 overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
      <style>
    {`
      .flex::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
        {data.map((section, index) => (
          <div
            key={index}
            className="w-80 bg-white shadow-md rounded-xl p-4 border border-gray-200 flex-shrink-0"
          >
            {/* Icon */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${section.color} text-white text-xl mb-2`}>
              {section.icon}
            </div>

            {/* Content */}
            <h2 className="text-lg font-semibold text-gray-800">{section.category}</h2>
            <p className="text-sm text-gray-500">{section.description}</p>

            {/* List of Locations */}
            <ul className="mt-2 space-y-2">
              {section.locations.map((location, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium">{i + 1}.</span>
                  <span className="flex-1 text-gray-800">{location.name}</span>
                  {/* Progress Bar */}
                  <div className="w-24 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className={`h-full ${section.color}`} style={{ width: `${location.percentage}%` }}></div>
                  </div>
                  <span className="text-gray-500 text-sm">{location.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default PropertySearch;
