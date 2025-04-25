import React from "react";

export const BudgetBrowser = () => {
  const budgetData = [
    {
      title: "Affordable Plots",
      priceRange: "₹ 1000 / sq. ft",
      icon: "fas fa-coins",
      bgColor: "bg-green-100 text-green-500",
    },
    {
      title: "Avg. Plots",
      priceRange: "₹ 2000 - 3600 / sq. ft",
      icon: "fas fa-hand-holding-usd",
      bgColor: "bg-yellow-100 text-yellow-500",
    },
    {
      title: "Luxurious Plot",
      priceRange: "₹ 5600+ / sq. ft",
      icon: "fas fa-gem",
      bgColor: "bg-red-100 text-red-500",
    },
  ];
  
  return (
    <div className="relative bg-gradient-to-b from-[#ffffff] to-[#ffffff] mb-5 md:px-8 py-10 rounded-lg shadow-lg">
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-8">  
        <div className="flex flex-col">
          <div className="text-2xl md:text-xl font-semibold text-gray-900">
            Have a budget in mind?
          </div>
        </div>
      </div>

      {/* Right Section with Budget Cards */}
      <div className="bg-white p-6 rounded-lg ">
        <div className="text-xl font-semibold text-gray-800 mb-2">
          Browse by budget
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Project options based on your budget
        </p>

        {/* Budget Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgetData.map((item, index) => (
            <li
              key={index}
              className="group bg-white border border-gray-200 hover:shadow-md rounded-lg p-5 flex items-center justify-between cursor-pointer transition-transform transform hover:scale-105"
            >
              {/* Icon and Text */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}>
                  <i className={`text-2xl ${item.icon}`}></i>
                </div>
                <div>
                  <div className="text-base font-medium text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600">{item.priceRange}</div>
                </div>
              </div>

              {/* Arrow Icon */}
              <i className="text-lg text-gray-500 transition-transform group-hover:translate-x-1 fas fa-arrow-right"></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetBrowser;
