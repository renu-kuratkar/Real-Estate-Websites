import React, { useState } from "react";

const PropertySelector = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [location, setLocation] = useState("");
  const options = [
    { value: "All", label: "Buy" },
    { value: "Residential", label: "Residential" },
    { value: "Commercial", label: "Commercial" },
    { value: "Villa", label: "Villa/bungalow" },
  ];

  // Handle property type change
  const handleOptionChange = (value) => {
    setSelectedOption(value);
    console.log("Selected Option:", value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search initiated for:", {
      propertyType: selectedOption,
      location,
    });
  };

  return (
    <div className="absolute flex flex-col gap-6 items-center px-4 justify-center h-123 w-full bg-black/0 z-10">
      {/* Main Container */}
      <div className="flex absolute top-[70%] md:top-[90%] md:shadow-md flex-col divide-y w-[90%] sm:w-full max-w-3xl bg-white rounded-2xl md:border md:border-gray-200">
        {/* Form Section */}
        <form
          className="flex flex-col w-full items-center justify-center"
          onSubmit={handleSubmit}
        >
          {/* Radio Button Group */}
          <div className="flex w-full text-sm md:text-base">
            <div className="space-y-2 flex flex-col gap-2 w-full">
              <div
                role="radiogroup"
                aria-required="false"
                className="flex gap-1 items-center justify-center md:grid grid-cols-4 h-10 md:h-14 w-full"
              >
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center space-y-0 border-b-2 transition-all delay-500 ${
                      selectedOption === option.value
                        ? "border-black focus:border-transparent"
                        : "border-white"
                    } py-1 px-1 md:px-4 md:py-2 md:h-full cursor-pointer focus:outline-none`}
                    onClick={() => handleOptionChange(option.value)}
                  >
                    <input
                      type="radio"
                      id={`radio-${option.value}`}
                      name="propertyType"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={() => handleOptionChange(option.value)}
                      className="hidden focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                    <label
                      htmlFor={`radio-${option.value}`}
                      className="text-sm leading-none cursor-pointer font-normal md:font-medium md:text-lg"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location and Search Section */}
          <div className="flex bg-white border md:border-neutral-200 md:bg-none rounded-3xl md:rounded-2xl w-full px-1 md:px-3 h-12 md:h-14 items-center">
            <div className="space-y-2 w-full">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-0 focus:border-transparent"
              >
                <option value="">Select Your Location</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              className="inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 text-neutral-50 hover:bg-neutral-900/90 h-10 px-4 py-2 rounded-full bg-[#6f272b]"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertySelector;
