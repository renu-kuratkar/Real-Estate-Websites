import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { year: "2021", rate: 4100 },
  { year: "2022", rate: 3900 },
  { year: "2023", rate: 3800 },
  { year: "2024", rate: 3900 },
  { year: "2025", rate: 4200 },
];

const PriceTrend = () => {
  return (
    <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
      
      {/* Left Side - Text & Controls */}
      <div className="w-full md:w-1/2 space-y-4 ml-7">
        <h2 className="text-2xl font-semibold text-gray-900">Price Trend & Comparison</h2>
        <p className="text-gray-600">The graph shows the quarterly average rates of properties.</p>

        {/* Price Info */}
        <div>
          <p className="text-gray-500 text-sm font-semibold">RATE ON 99ACRES (Super Built up Area)</p>
          <p className="text-3xl font-bold text-red-900">₹ 3,900 <span className="text-lg font-medium">/ sq.ft</span></p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-red-100 text-red-900 rounded-md font-medium">With Locality</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md font-medium">With Societies</button>
        </div>

        {/* Time Range Dropdown */}
        <div className="flex justify-start">
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-md">Last 5 Years ▼</button>
        </div>
      </div>

      {/* Right Side - Graph */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <AreaChart width={600} height={250} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6b5bd2" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#f0f0f0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="rate" stroke="#6b5bd2" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </div>

    </div>
  );
};

export default PriceTrend;
