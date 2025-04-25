import React from "react";
import buyIcon from "../assets/buy.jpg";
import rentIcon from "../assets/sell.jpg";

const goalData = [
  {
    id: 1,
    title: "Buy a Property",
    description: "Understand localities, societies, budget",
    icon: buyIcon,
    // link: "/buy-property",
  },
  {
    id: 2,
    title: "Sell a Property",
    description: "Find localities, understand lifestyle & commute",
    icon: rentIcon,
    // link: "/rent-property",
  },
];

const GoalCards = () => {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Start with another goal
        </h2>
        <p className="text-gray-500 text-sm">
          Explore more and discover new opportunities
        </p>
      </div>

      {/* Card Container */}
      <div className="flex flex-col sm:flex-row gap-4">
        {goalData.map((goal) => (
          <a
            key={goal.id}
            href={goal.link}
            className="flex items-center border border-neutral-200 bg-white rounded-lg p-4 shadow-sm w-full sm:w-1/2 hover:shadow-md transition"
          >
            {/* Icon Section */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-blue-200 bg-blue-50 mr-4">
              <img
                src={goal.icon}
                alt={goal.title}
                className="w-6 h-6 object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800">
                {goal.title}
              </h3>
              <p className="text-sm text-gray-500">{goal.description}</p>
            </div>

            {/* Right Arrow */}
            <div className="ml-auto text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GoalCards;