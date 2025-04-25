import React, { useState } from "react";
import ViewNumber from "./ViewNumber";
import CloseIcon from "@mui/icons-material/Close";

const projects = [
  {
    id: 1,
    name: "Godrej Evergreen Square",
    location: "Phase 3 Hinjewadi, Pune",
    price: "₹ 59.99 L - 1.2 Cr",
    bhk: "1, 2, 3 BHK Apartments",
    priceIncrease: "10.8%",
    timeFrame: "last 3 months",
    image:
      "https://newprojects.99acres.com/projects/godrej_properties/godrej_evergreen_square/images/zqee2x3_1737464411_563240179_med.jpg", // Replace with actual image path
    rera: true,
  },
  {
    id: 2,
    name: "Mahindra IvyLush",
    location: "Kharadi, Pune",
    price: "₹ 95 L - 1.56 Cr",
    bhk: "2, 3 BHK Apartments",
    priceIncrease: "8.0%",
    timeFrame: "last 1 year",
    image:
      "https://newprojects.99acres.com/projects/mahindra_lifespaces/mahindra_codename_crown/images/okj4kg4_1736753141_558519933_med.jpg", // Replace with actual image path
    rera: true,
  },
  {
    id: 3,
    name: "Mayfair River Residences",
    location: "Mundawa, Pune",
    price: "₹ 95 L - 1.56 Cr",
    bhk: "2, 3 BHK Apartments",
    priceIncrease: "8.0%",
    timeFrame: "last 1 year",
    image:
      "https://newprojects.99acres.com/projects/mahindra_lifespaces/mahindra_codename_crown/images/okj4kg4_1736753141_558519933_med.jpg", // Replace with actual image path
    rera: true,
  },
];

const NewlyLaunchedProjects = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="bg-blue-50 p-6 md:p-10 rounded-lg">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://static.99acres.com/universalapp/img/USP.png"
            alt="Building Icon"
            className="w-10 h-10"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Newly Launched Projects
            </h2>
            <p className="text-gray-600">Less upfront payment</p>
          </div>
        </div>

        {/* Projects Container */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
              {/* NEW LAUNCH Badge */}
              <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                NEW LAUNCH
              </span>

              {/* Image & Details */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.location}</p>
                  <p className="text-gray-800 font-semibold">{project.price}</p>
                  <p className="text-gray-600 text-sm">{project.bhk}</p>
                  <p className="text-green-600 text-sm font-bold">
                    {project.priceIncrease} price increase in{" "}
                    {project.timeFrame}
                  </p>
                </div>
              </div>

              {/* RERA Badge */}
              {project.rera && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    RERA
                  </span>
                </div>
              )}

              {/* Footer Buttons */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  Get preferred options <br /> @zero brokerage
                </p>
                <button
                  className="bg-red-900 text-white font-bold px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
                  onClick={() => setShowLogin(true)}
                >
                  View Number
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLogin && (
        <div className="fixed inset-0 flex  bg-blur items-center justify-center backdrop-blur-sm  z-50">
          {/* <div className=" p-6 rounded-lg shadow-lg relative mb-0 w-150"> */}
          {/* Close Button */}
          <button
            className="absolute top-10  text-white right-100 "
            onClick={() => setShowLogin(false)}
          >
            <CloseIcon />
            {/* ✖ */}
          </button>
          <ViewNumber />
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default NewlyLaunchedProjects;
