import React from "react";

const TableComponent = () => {
  return (
    <div className="max-w-full mt-5 mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transcation Details</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2 border">Registry Date</th>
              <th className="px-4 py-2 border">Agreement Price</th>
              <th className="px-4 py-2 border">Area(Sq.ft)</th>
              <th className="px-4 py-2 border">Price/Sq.ft</th>
              <th className="px-4 py-2 border">Floor No</th>
              <th className="px-4 py-2 border">Tower/Wing6</th>
              <th className="px-4 py-2 border">Purchase Type</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="px-4 py-2 border text-center text-sm font-semibold ">22 March 2025</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.25L</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">678(Carpet)</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.4567</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold"> 5</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">A</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Resale</td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="px-4 py-2 border text-center text-sm font-semibold">29 March 2025</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.55L</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">658(Carpet)</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.4897</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold"> 12</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">B</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Sale</td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="px-4 py-2 border text-center text-sm font-semibold">28 March 2025</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.95L</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">378(Carpet)</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.3567</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold"> 19</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">C</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Resale</td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td className="px-4 py-2 border text-center text-sm font-semibold">12 March 2025</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.25L</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">878(Carpet)</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Rs.2967</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">6</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">D</td>
              <td className="px-4 py-2 border text-center text-sm font-semibold">Sale</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
