import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSection = () => {
  const [propertyType, setPropertyType] = useState("Residential");
  const [formStep, setFormStep] = useState(1); // 1: Property Form, 2: OTP Verification
  const [formType, setFormType] = useState("signup"); // 'signup' or 'login'
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  // Handle Start Now button
  const handleStartNow = () => {
    if (phoneNumber.length === 10) {
      setFormStep(2); // Move to OTP Verification
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = () => {
    if (otp === "1234") {
      alert("Verification successful!");
      navigate("/seller-registration"); // Redirect to seller dashboard
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-10 flex justify-between items-start ">
      {/* Left Section */}
      <div className="w-3/5 space-y-6 pt-12">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Sell your Property <span className="text-red-900">online faster</span>{" "}
          with <span className="text-red-900">Zaminwale.com</span>
        </h2>
        <ul className="space-y-3 text-gray-900 text-lg mt-6">
          <li>
            ✅ Advertise for{" "}
            <span className="font-bold text-red-900">FREE</span>
          </li>
          <li>✅ Get unlimited enquiries</li>
          <li>✅ Shortlisted buyers</li>
          <li>✅ Assistance in coordinating site visits</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-2/5 fixed top-20 right-10 max-w-[28rem] h-[80vh] overflow-y-auto">
  <div className="bg-white shadow-md rounded-xl p-3 border border-gray-300">


        {/* <div className="fixed top-40 right-27 w-[28rem] bg-white shadow-2xl rounded-xl p-6 border border-gray-300"> */}
          {formType === "signup" ? (
            formStep === 1 ? (
              <>
                {/* Property Form */}
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Start posting your property, it’s{" "}
                  <span className="text-red-900">free</span>
                </h3>
                <div className="mb-4">
                  <p className="font-medium text-gray-900 mb-2">
                    You're looking to...{" "}
                    <span className="text-red-900">SELL?</span>
                  </p>
                  <p className="font-medium text-gray-900 mb-2">
                    And it's a...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Residential", "Villa/Bungalow", "Commercial"].map(
                      (type) => (
                        <button
                          key={type}
                          onClick={() => setPropertyType(type)}
                          className={`px-4 py-2 rounded-full border ${
                            propertyType === type
                              ? "border-red-900 text-red-900 font-semibold"
                              : "border-gray-300 text-gray-600"
                          }`}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Phone Input */}
                <div className="mb-4">
                  <p className="font-medium text-gray-900 mb-2">
                    Your contact details for tenants to reach you
                  </p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border mb-3 rounded-lg outline-none focus:border-red-900"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border mb-3 rounded-lg outline-none focus:border-red-900"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg outline-none focus:border-red-900"
                  />
                </div>

                {/* Login Link */}
                <p className="text-sm text-gray-500">
                  Are you a registered Seller?{" "}
                  <button
                    className="text-red-900 font-medium"
                    onClick={() => setFormType("login")}
                  >
                    Login
                  </button>
                </p>

                {/* Start Now Button */}
                <button
                  onClick={handleStartNow}
                  className="w-full mt-4 bg-red-900 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition duration-300"
                >
                  Start now
                </button>
              </>
            ) : (
              <>
                {/* OTP Verification Form */}
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  OTP Verification
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  We have sent a 4-digit OTP to your phone number{" "}
                  <span className="font-bold">{phoneNumber}</span>
                </p>

                {/* OTP Input */}
                <input
                  type="text"
                  maxLength="4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full px-3 py-2 border rounded-lg outline-none focus:border-red-900 mb-4"
                />

                {/* Verify Button */}
                <button
                  onClick={handleVerifyOtp}
                  className="w-full bg-red-900 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition duration-300"
                >
                  Verify OTP
                </button>

                {/* Resend OTP */}
                <p className="text-sm text-gray-500 mt-4">
                  Didn't receive the OTP?{" "}
                  <button className="text-red-900 font-medium">
                    Resend OTP
                  </button>
                </p>
              </>
            )
          ) : (
            <>
              {/* Login Form */}
              <h3 className="text-xl font-bold mb-4 text-gray-800">Login</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enter your registered phone number to log in.
              </p>

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded-lg outline-none focus:border-red-900 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-lg outline-none focus:border-red-900 mb-4"
              />

              <button
                className="w-full bg-red-900 text-white font-bold py-2 rounded-lg hover:bg-red-800 transition duration-300"
                onClick={() => navigate("/mainseller")}
              >
                Send OTP
              </button>

              <p className="text-sm text-gray-500 mt-4">
                Don't have an account?{" "}
                <button
                  className="text-red-900 font-medium"
                  onClick={() => setFormType("signup")}
                >
                  Sign Up
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      </div>
    // </div>
  );
};

export default FormSection;
