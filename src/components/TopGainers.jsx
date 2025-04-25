import React from "react";

const localities = [
  {
    name: "Pune Mumbai Highway",
    area: "Pune North",
    rate: "₹9,250/ sq.ft",
    rentalYield: "4%",
    priceTrend: "40.2% YOY",
  },
  {
    name: "Karve Nagar",
    area: "Pune Central",
    rate: "₹11,750/ sq.ft",
    rentalYield: "2%",
    priceTrend: "29.8% YOY",
  },
  {
    name: "Kate Wasti",
    area: "Pune West",
    rate: "₹7,100/ sq.ft",
    rentalYield: "4%",
    priceTrend: "27.9% YOY",
  },
  {
    name: "Dange Chowk",
    area: "Pune West",
    rate: "₹9,500/ sq.ft",
    rentalYield: "2%",
    priceTrend: "26.7% YOY",
  },
  {
    name: "Dudulgaon",
    area: "Pune North",
    rate: "₹5,500/ sq.ft",
    rentalYield: "NA",
    priceTrend: "23.6% YOY",
  },
];

const TopGainers = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold">Top Gainers</h2>
      <p className="text-gray-500">across Pune with highest appreciation</p>
      <div className="bg-gray-100 mt-4 p-2 rounded-lg">
        <div className="flex gap-4 border-b">
          <button className="px-4 py-2 font-semibold bg-white rounded-md">Localities</button>
          <button className="px-4 py-2 text-gray-500">Societies</button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg mt-4 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-4">Locality</th>
              <th className="p-4">Rate on 99acres</th>
              <th className="p-4">Rental Yield</th>
              <th className="p-4">Price Trends</th>
            </tr>
          </thead>
          <tbody>
            {localities.map((loc, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 text-lg">📍</span>
                    <div>
                      <p className="font-semibold">{loc.name}</p>
                      <p className="text-gray-500 text-sm">{loc.area}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">{loc.rate}</td>
                <td className="p-4">{loc.rentalYield}</td>
                <td className="p-4 text-green-500 font-semibold">⬆ {loc.priceTrend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button className="bg-red-900 text-white px-6 py-2 rounded-md font-semibold">
          View all most appreciated localities of Pune
        </button>
      </div>
    </div>
  );
};

export default TopGainers;