import React, { useState } from "react";
import { Pagination } from "@mui/material";
import sellerData from "../../Seller/src/data/newdata";
import PropertyInquiries from "../../Seller/src/Components/Layout/BuyerRegistration/PropertyInquiries";

const Navbar = () => (
  <nav className="bg-red-900 text-white p-4 flex justify-between items-center shadow-lg">
    <h1 className="text-xl font-bold text-left w-full">Seller Dashboard</h1>
    <ul className="flex space-x-6 items-center">
      {['Home', 'Profile', 'Logout'].map((item) => (
        <li key={item} className="hover:text-gray-300 cursor-pointer flex items-center gap-2">
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </nav>
);


const AddProperty = ({ setData }) => {
  const [newProperty, setNewProperty] = useState({
    title: '',
    price: '',
    status: 'Active',
    propertyType: 'Residential',
    configuration: '',
    carpetArea: '',
    numBathrooms: '',
    furnishingStatus: 'Unfurnished',
    ownershipType: 'Freehold',
    propertyAge: 'New',
    availabilityStatus: 'Ready to Move',
    completeAddress: '',
    propertyImages: [],
    ownerName: '',
    ownerMobile: '',
    ownerEmail: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      PostedProperties: [...prevData.PostedProperties, { id: Date.now(), ...newProperty }],
    }));
    alert('Property added successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-h-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Property Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={newProperty.title}
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              id="price"
              name="price"
              type="number"
              value={newProperty.price}
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <select
              id="status"
              name="status"
              value={newProperty.status}
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Sold">Sold</option>
            </select>
          </div>

          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
            <select
              id="propertyType"
              name="propertyType"
              value={newProperty.propertyType}
              onChange={handleChange}
              className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Bungalow/Villa">Bungalow/Villa</option>
              <option value="Plot/Land">Plot/Land</option>
            </select>
          </div>
        </div>

        {/* Conditional fields based on property type */}
        {newProperty.propertyType === 'Residential' && (
          <>
            <div className="mb-6">
              <label htmlFor="configuration" className="block text-sm font-medium text-gray-700">Configuration</label>
              <input
                id="configuration"
                name="configuration"
                type="text"
                value={newProperty.configuration}
                onChange={handleChange}
                className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="carpetArea" className="block text-sm font-medium text-gray-700">Carpet Area (Sq. ft./Sq. m.)</label>
                <input
                  id="carpetArea"
                  name="carpetArea"
                  type="text"
                  value={newProperty.carpetArea}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="numBathrooms" className="block text-sm font-medium text-gray-700">Number of Bathrooms</label>
                <input
                  id="numBathrooms"
                  name="numBathrooms"
                  type="number"
                  value={newProperty.numBathrooms}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </>
        )}

        {newProperty.propertyType === 'Commercial' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="carpetArea" className="block text-sm font-medium text-gray-700">Carpet Area (Sq. ft./Sq. m.)</label>
                <input
                  id="carpetArea"
                  name="carpetArea"
                  type="text"
                  value={newProperty.carpetArea}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="washroomsAvailable" className="block text-sm font-medium text-gray-700">Washrooms Available</label>
                <select
                  id="washroomsAvailable"
                  name="washroomsAvailable"
                  value={newProperty.washroomsAvailable || 'No'}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </>
        )}

        {newProperty.propertyType === 'Bungalow/Villa' && (
          <>
            <div className="mb-6">
              <label htmlFor="configuration" className="block text-sm font-medium text-gray-700">Configuration (e.g., 3 BHK, 4 BHK)</label>
              <input
                id="configuration"
                name="configuration"
                type="text"
                value={newProperty.configuration}
                onChange={handleChange}
                className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="plotArea" className="block text-sm font-medium text-gray-700">Plot Area (Sq. ft./Sq. m.)</label>
                <input
                  id="plotArea"
                  name="plotArea"
                  type="text"
                  value={newProperty.plotArea}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="numFloors" className="block text-sm font-medium text-gray-700">Number of Floors</label>
                <input
                  id="numFloors"
                  name="numFloors"
                  type="number"
                  value={newProperty.numFloors}
                  onChange={handleChange}
                  className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </>
        )}

        {newProperty.propertyType === 'Plot/Land' && (
          <>
            <div className="mb-6">
              <label htmlFor="plotArea" className="block text-sm font-medium text-gray-700">Plot Area (Sq. ft./Sq. m./Acres)</label>
              <input
                id="plotArea"
                name="plotArea"
                type="text"
                value={newProperty.plotArea}
                onChange={handleChange}
                className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        )}

        {/* Common fields for all property types */}
        <div className="mb-6">
          <label htmlFor="completeAddress" className="block text-sm font-medium text-gray-700">Complete Address (Landmark, City, Pincode)</label>
          <input
            id="completeAddress"
            name="completeAddress"
            type="text"
            value={newProperty.completeAddress}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="propertyImages" className="block text-sm font-medium text-gray-700">Property Images (Minimum 5)</label>
          <input
            id="propertyImages"
            name="propertyImages"
            type="file"
            multiple
            onChange={(e) => setNewProperty({ ...newProperty, propertyImages: e.target.files })}
            className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">Owner/Agent Name</label>
          <input
            id="ownerName"
            name="ownerName"
            type="text"
            value={newProperty.ownerName}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="ownerMobile" className="block text-sm font-medium text-gray-700">Owner/Agent Mobile</label>
          <input
            id="ownerMobile"
            name="ownerMobile"
            type="text"
            value={newProperty.ownerMobile}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">Owner/Agent Email</label>
          <input
            id="ownerEmail"
            name="ownerEmail"
            type="email"
            value={newProperty.ownerEmail}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md w-full shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-3 py-1 rounded-md shadow-md transition duration-300 bg-white border border-red-900 hover:bg-red-900 hover:text-white text-red-900`}
">
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};
  

const Sidebar = ({ selectedTab, setSelectedTab }) => (
    <div className="w-1/5 bg-gray-50 text-black p-6 h-250 shadow-2xl transition-all duration-300">
      
      <div className="flex flex-col gap-4">
        {['ApprovedSellerRequest', 'PropertyInquiries', 'PostedProperties', 'AddProperty'].map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`w-full text-left px-4 py-2 rounded-md transition duration-300 ${selectedTab === tab ? 'bg-white border text-black' : 'bg-red-900  cursor-pointer hover: bg-black-200'}`}
          >
            <i className="fa fa-home mr-2"></i> {/* Add appropriate icons for each tab */}
            {tab.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
    </div>
  );
  

const PostedProperties = ({ properties, setData }) => {
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProperties = properties
    .filter((item) => filterStatus === "All" || item.status === filterStatus)
    .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => sortOption === "Latest" ? new Date(b.date) - new Date(a.date) : sortOption === "LowToHigh" ? a.price - b.price : b.price - a.price)
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleDelete = (id) => {
    setData((prev) => ({ ...prev, PostedProperties: prev.PostedProperties.filter((item) => item.id !== id) }));
    alert("Property deleted successfully!");
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-4 py-2 rounded-md w-full sm:w-1/3 shadow-sm focus:ring-2 focus:ring-red-500"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border px-4 py-2 rounded-md w-full sm:w-1/4 shadow-sm focus:ring-2 focus:ring-red-500"
        >
          {['All', 'Active', 'Pending', 'Sold'].map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-4 py-2 rounded-md w-full sm:w-1/4 shadow-sm focus:ring-2 focus:ring-red-500"
        >
          {[
            { label: 'Sort by Date', value: 'Latest' },
            { label: 'Price: Low to High', value: 'LowToHigh' },
            { label: 'Price: High to Low', value: 'HighToLow' }
          ].map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">No properties found.</p>
        ) : (
          filteredProperties.map((item) => (
            <div key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
              <h3 className="font-bold text-red-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
              <p className="text-xs text-gray-400">Status: {item.status}</p>
              <div className="flex justify-end mt-4 gap-3">
                {['View', 'Edit', 'Delete'].map((action) => (
                  <button
                    key={action}
                    onClick={action === 'Delete' ? () => handleDelete(item.id) : undefined}
                    className={`px-3 py-1 rounded-md shadow-md transition duration-300 bg-white border border-red-900 hover:bg-red-900 hover:text-white text-red-900`}
>
                    <i className={`fa fa-${action.toLowerCase()} mr-2`} /> {action}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center mt-6">
        <Pagination count={Math.ceil(properties.length / itemsPerPage)} page={page} onChange={(e, value) => setPage(value)} />
      </div>
    </div>
  );
};

const SellerDashboard = () => {
    const [selectedTab, setSelectedTab] = useState("ApprovedSellerRequest");
    const [data, setData] = useState(sellerData);
  
    return (
      <>
        <Navbar />
        <div className="flex">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="p-6 lg:p-8 w-3/4">
            {selectedTab === "PropertyInquiries" ? (
              <PropertyInquiries inquiries={data.PropertyInquiries} setData={setData} />
            ) : selectedTab === "PostedProperties" ? (
              <PostedProperties properties={data.PostedProperties} setData={setData} />
            ) : selectedTab === "AddProperty" ? (
              <AddProperty setData={setData} />
            ) : (
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl text-black mb-4">Approved By Admin</h2>
                <ul className="divide-y divide-gray-200">
                  {data.ApprovedSellerRequest.length === 0 ? (
                    <p className="text-gray-500 text-center">No data available.</p>
                  ) : (
                    data.ApprovedSellerRequest.map((item) => (
                      <li key={item.id} className="p-4 flex justify-between hover:bg-gray-100 rounded-lg">
                        <p className="text-black-800">{item.title}</p>
                        <span className="text-green-600 text-xl">{item.status}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
  

export default SellerDashboard;
