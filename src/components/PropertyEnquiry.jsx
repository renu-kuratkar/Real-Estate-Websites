import React, { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const PropertyEnquiry = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("What's your name?");
    } else {
      setError("");
      alert("Form submitted!");
    }
  };

  return (
    <div className="max-w-full mx-auto p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md p-4 rounded-lg">
        
        {/* Left Section - Owner Details */}
        <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="text-2xl font-bold">Owner Details</h1>
          {/* FaUser Image */}
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden mt-6">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Ajit Raut</h2>
          <p className="text-gray-500 text-xs">Owner</p>
          <button className="bg-teal-400 text-white px-3 py-1 rounded-md text-sm font-semibold">
            View Phone Number
          </button>
          <p className="text-blue-600 text-xs">Properties Listed: <span className="font-bold">2</span></p>
          <p className="text-gray-500 text-xs">Localities: Talegaon Dabhade</p>
        </div>

        {/* Right Section - Enquiry Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">Send enquiry to Owner</h2>

          {/* Radio Buttons */}
          <div className="flex items-center space-x-4 text-gray-600 text-xs">
            <label><input type="radio" name="userType" className="mr-1" /> Individual</label>
            <label><input type="radio" name="userType" className="mr-1" /> Dealer</label>
          </div>

          <div className="flex items-center space-x-4 text-gray-600 text-xs">
            <label><input type="radio" name="reason" className="mr-1" /> Investment</label>
            <label><input type="radio" name="reason" className="mr-1" /> Self Use</label>
          </div>

          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-1 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md text-sm`}
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </div>

          {/* Email Field */}
          <input type="email" placeholder="Email" className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm" />

          {/* Phone Field */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden text-sm">
            <select className="px-2 py-1 bg-gray-200 text-gray-600">
              <option>IND (+91)</option>
            </select>
            <input type="text" placeholder="Phone Number" className="w-full px-3 py-1" />
          </div>

          {/* Textarea */}
          <textarea className="w-full px-3 py-1 border border-gray-300 rounded-md text-sm" rows="2">
            I am interested in this Property.
          </textarea>

          {/* Checkbox */}
          <div className="flex items-center text-xs">
            <input type="checkbox" className="mr-1" />
            <label className="text-gray-600">
              I agree to the <a href="#" className="text-blue-600">Terms & Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white py-1 rounded-md text-sm font-semibold hover:bg-blue-600">
            Send Email & SMS
          </button>
        </form>

      </div>
    </div>
  );
};

export default PropertyEnquiry;
