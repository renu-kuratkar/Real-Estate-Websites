import React, { useState } from "react";
import New from "../assets/plot.jpg"; 

const ViewNumber = () => {
  const [step, setStep] = useState("login"); // 'login' or 'otp'
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (!username || !password) {
        setError("Username and Password are required!");
        return;
      }
      setError("");
      setStep("otp"); // Move to OTP step
    };
  
    const handleOtpSubmit = (e) => {
      e.preventDefault();
      if (otp !== "1234") {
        setError("Invalid OTP. Try again!");
        return;
      }
      setError("");
      setSuccess(true); // Show success message
    };
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div
        className="relative w-full max-w-4xl h-[500px]  rounded-lg flex overflow-hidden bg-cover bg-center"
         
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0bg-[url('/plot.jpg')] bg-cover bg-center bg-no-repeat bg-black bg-opacity-10"></div> */}

        {/* Login Box */}
        <div className="relative w-96  bg-white p-8 rounded-lg m-auto shadow-lg">
          {success ? (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-green-600">Login Successful!</h2>
              <p className="text-sm text-gray-600 mt-2">Welcome to our Real Estate Portal</p>
            </div>
          ) : step === "login" ? (
            <form onSubmit={handleLogin}>
              <h2 className="text-xl font-semibold text-gray-800 text-center">Registration Form </h2>
              <p className="text-sm text-gray-600 text-center mb-6">Please enter your details</p>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="mb-4">
                <label className="text-gray-700 text-sm block mb-1">Username</label>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 text-sm block mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <div className="text-right mb-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Continue
              </button>

              <p className="text-center text-gray-600 text-sm mt-4">
                Are you new? <a href="#" className="text-blue-600 font-semibold">Create an Account</a>
              </p>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <h2 className="text-xl font-semibold text-gray-800 text-center">Enter OTP</h2>
              <p className="text-sm text-gray-600 text-center mb-6">Check your phone for OTP</p>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div className="mb-4">
                <label className="text-gray-700 text-sm block mb-1">OTP</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Verify OTP
              </button>

              <p className="text-center text-gray-600 text-sm mt-4">
                Didn't receive OTP? <a href="#" className="text-blue-600 font-semibold">Resend</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewNumber
