import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TextField, InputAdornment } from "@mui/material";
import Form from "./Form";

const AdvertiserDetails = ({ onClose, onViewDetails }) => {
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);
 
  const handleViewDetails = () => {
    setShowForm(true);
  };

  if (showForm) {
    return <Form onClose={() => setShowForm(false)} />;
  }
  return (
    <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50 p-4 z-60">
      <div className="bg-white w-full max-w-4xl max-h-[500px] overflow-y-auto rounded-lg shadow-lg">
        
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            You are requesting to view advertiser details.
          </h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Advertiser Info */}
        <div className="p-4 border-b flex flex-col md:flex-row justify-between gap-5">
          {/* Left Side */}
          <div className="md:w-1/2 ml-5">
            <p className="text-sm font-semibold text-black">POSTED BY BUILDER:</p>
            <p className="text-sm text-black">+91 98***543** | ******@******.com</p>
            <p className="text-xs text-black">RENU KURATKAR</p>
          </div>
          
          {/* Right Side */}
          <div className="md:w-1/2 mt-4 md:mt-0 text-left">
            <p className="text-sm font-semibold text-black">POSTED ON 01ST FEB, 2025:</p>
            <p className="text-sm font-medium text-gray-700">
              ₹ 88.75 Lac to 1.1 Cr | JN AA Privilege
            </p>
            <p className="text-xs text-gray-500">
              940 - 1081 SQ.FT. | 3 BHK RESIDENTIAL APARTMENT
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-4">
          <p className="text-sm font-semibold bg-black text-white p-4">
            Please fill in your details to be shared with this advertiser only.
          </p>

          <div className="bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Basic Information (Left Side) */}
              <div className="border-r md:pr-6">
                <h2 className="text-lg font-semibold text-black mb-4">Basic Information</h2>
                
                <p className="text-sm font-medium text-black">Your reason to buy is</p>
                <div className="flex items-center space-x-3 mt-2">
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="reason" className="w-4 h-4" />
                    <span className="text-black">Investment</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="reason" className="w-4 h-4" />
                    <span className="text-black">Self Use</span>
                  </label>
                </div>

                <p className="text-sm font-medium mt-4 text-black">Are you a property dealer?</p>
                <div className="flex items-center space-x-3 mt-2">
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="dealer" className="w-4 h-4" />
                    <span className="text-black">Yes</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="dealer" className="w-4 h-4" />
                    <span className="text-black">No</span>
                  </label>
                </div>

                <TextField id="name" label="Name" variant="standard" fullWidth className="mt-4 text-black" />

                <div className="flex items-center mt-4">
                  <TextField
                    id="phone"
                    label="Phone Number"
                    variant="standard"
                    fullWidth
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-black"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                    }}
                  />
                </div>
                {!phone && <p className="text-red-500 text-xs mt-1">What's your phone number?</p>}

                <TextField id="email" label="Email" variant="standard" fullWidth className="mt-4 text-black" />
              </div>

              {/* Optional Information (Right Side) */}
              <div className="md:pl-6">
                <h2 className="text-lg font-semibold text-black mb-4">Optional Information</h2>
                <p className="text-sm font-medium">By when are you planning to buy the property?</p>
                <div className="flex flex-col space-y-2 mt-2">
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="plan" className="w-4 h-4" />
                    <span className="text-black">3 months</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="plan" className="w-4 h-4" />
                    <span className="text-black">6 months</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="plan" className="w-4 h-4" />
                    <span className="text-black">More than 6 months</span>
                  </label>
                </div>

                <div className="mt-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-black">I am interested in home loan</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input type="checkbox" className="w-4 h-4" checked={checked} onChange={() => setChecked(!checked)} />
                    <span className="text-black">I am interested in site visits.</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-black">
                      I agree to the <a href="#" className="text-red-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="p-4 flex justify-center">
          <button
            className="bg-red-900 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700"
            onClick={handleViewDetails}
          >
            View Advertiser Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserDetails;
