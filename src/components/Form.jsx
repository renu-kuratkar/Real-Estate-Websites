import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Form = ({ onClose }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    let countdown;
    if (resendDisabled) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [resendDisabled]);

  // Handle OTP resend
  const handleResendOtp = () => {
    setTimer(30);
    setResendDisabled(true);
  };

  // Handle OTP verification
  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      // Navigate to PropertyDetails page after OTP verification
      navigate("/property-details");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center z-20 justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-4xl max-h-[500px] overflow-auto rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            You are requesting to view advertiser details.
          </h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Advertiser Info */}
        <div className="p-4 border-b flex flex-col md:flex-row justify-between gap-5">
          <div className="md:w-1/2 ml-5">
            <p className="text-sm font-semibold text-black">POSTED BY BUILDER:</p>
            <p className="text-sm text-black">+91 98***543** | ******@******.com</p>
            <p className="text-xs text-black">RENU KURATKAR</p>
          </div>

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

        {/* OTP Section */}
        <div className="p-4 text-center">
          <p className="text-sm font-semibold mb-2">Enter OTP sent to your mobile</p>

          {/* OTP Input */}
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 text-center w-32 text-lg tracking-widest outline-none focus:ring-2 focus:ring-blue-500"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="------"
          />

          {/* Resend OTP */}
          <div className="mt-3">
            {resendDisabled ? (
              <p className="text-gray-500 text-sm">Resend OTP in {timer}s</p>
            ) : (
              <button
                className="text-blue-600 text-sm font-semibold hover:underline"
                onClick={handleResendOtp}
              >
                Resend OTP
              </button>
            )}
          </div>

          {/* Submit Button */}
          <button
            className={`mt-4 px-6 py-2 text-white font-semibold rounded-lg ${
              otp.length === 6 ? "bg-red-900 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={otp.length !== 6}
            onClick={handleVerifyOtp} // Call the navigate function on button click
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
