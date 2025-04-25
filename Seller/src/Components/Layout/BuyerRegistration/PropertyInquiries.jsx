import React, { useState } from "react";
import { Pagination } from "@mui/material";
import '../../../data/data'; // Import the data

const PropertyInquiries = ({ inquiries, setData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedInquiries, setSelectedInquiries] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const statusOptions = ["Pending", "In Progress", "Resolved"];

  // Filtered and Paginated Inquiries
  const filteredInquiries = inquiries
    .filter(
      (item) =>
        (filterStatus === "All" || item.status === filterStatus) &&
        (item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.inquiry.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Update Inquiry Status
  const updateStatus = (id, newStatus) => {
    const updatedInquiries = inquiries.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setData((prev) => ({ ...prev, PropertyInquiries: updatedInquiries }));
    alert(`Inquiry #${id} status updated to '${newStatus}'!`);
  };

  // Handle Bulk Actions
  const handleBulkAction = (action) => {
    if (selectedInquiries.length === 0) {
      alert("Select at least one inquiry.");
      return;
    }
    const updatedInquiries = inquiries.map((item) =>
      selectedInquiries.includes(item.id) ? { ...item, status: action } : item
    );
    setData((prev) => ({ ...prev, PropertyInquiries: updatedInquiries }));
    setSelectedInquiries([]);
    alert(`Bulk action '${action}' applied to selected inquiries.`);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search inquiries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full lg:w-1/3 border px-4 py-2 rounded-lg mb-4 lg:mb-0"
        />

        {/* Filter by Status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="w-full lg:w-1/4 border px-4 py-2 rounded-lg"
        >
          <option value="All">All Statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        {/* Bulk Action Button */}
        <button
          onClick={() => handleBulkAction("Resolved")}
          className="bg-red-900 text-white px-4 py-2 rounded-lg ml-2"
        >
          Mark Resolved
        </button>
      </div>

      {/* Inquiry List */}
      <ul className="divide-y divide-gray-200">
        {filteredInquiries.length === 0 ? (
          <p className="text-gray-500 text-center">No inquiries found.</p>
        ) : (
          filteredInquiries.map((item) => (
            <li
              key={item.id}
              className="p-4 flex flex-col lg:flex-row justify-between items-start lg:items-center hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedInquiries.includes(item.id)}
                  onChange={() =>
                    setSelectedInquiries((prev) =>
                      prev.includes(item.id)
                        ? prev.filter((selectedId) => selectedId !== item.id)
                        : [...prev, item.id]
                    )
                  }
                  className="w-5 h-5 mt-1"
                />
                <div>
                  <span className="font-bold text-red-900">{item.customer}</span>
                  <p className="text-sm text-gray-500">{item.inquiry}</p>
                  <p className="text-xs text-gray-400">
                    Type: {item.type || "General"} | Date: {item.date || "N/A"}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-2 lg:mt-0">
                <select
                  value={item.status}
                  onChange={(e) => updateStatus(item.id, e.target.value)}
                  className="border px-3 py-1 rounded-lg"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => alert(`Viewing inquiry #${item.id}`)}
                  className={`px-3 py-1 rounded-md shadow-md transition duration-300 bg-white border border-red-900 hover:bg-red-900 hover:text-white text-red-900`}

                >
                  View
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          count={Math.ceil(inquiries.length / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </div>
  );
};

export default PropertyInquiries;
