import { useState } from "react";
import { FaTimes, FaEnvelope } from "react-icons/fa";

export default function LoginRegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
  <div className="fixed inset-0 flex justify-center items-center p-4 bg-black bg-opacity-50 backdrop-blur-xl">


      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Login / Register</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <FaTimes size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">Please enter your Phone Number</p>
        
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-700" htmlFor="phone">Phone Number</label>
          <div className="flex border border-gray-300 rounded-md overflow-hidden mt-1">
            <select className="bg-gray-100 px-3 text-gray-700 outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              className="w-full px-3 py-2 outline-none"
            />
          </div>
        </div>
        
        <button className="w-full bg-red-200 text-black py-2 rounded-md font-semibold disabled:opacity-50">
          Continue
        </button>
        
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        
        <button className="w-full border flex items-center justify-center gap-2 py-2 rounded-md font-semibold">
          <FaEnvelope /> Continue with Email/Username
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By clicking you agree to <a href="#" className="text-blue-500">Terms and Conditions</a>
        </p>
      </div>
    </div>
  );
}
