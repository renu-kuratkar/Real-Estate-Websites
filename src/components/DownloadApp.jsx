import React from "react";
import { Download, Bell } from "lucide-react"; // Icons for download and notification

const DownloadApp = () => {
  return (
    <div className="bg-[#FEF8EE] px-6 py-10 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Section - Text & Buttons */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Download Zaminwala Mobile App
          </h2>
          <p className="text-gray-600 mt-2">and never miss out any update</p>
          
          {/* Features List */}
          <div className="mt-4 space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              ✅ Get to know about newly posted properties as soon as they are posted
            </p>
            <p className="flex items-center gap-2">
              ✅ Manage your properties with ease and get instant alerts about responses
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <img 
              src="./src/assets/play.png" 
              alt="Google Play" 
              className="w-32 md:w-36 cursor-pointer" 
            />
            <img 
              src="./src/assets/ios.png" 
              alt="App Store" 
              className="w-32 md:w-36 cursor-pointer" 
            />
          </div>
        </div>

        {/* Right Section - Mobile App UI Preview */}
        <div className="relative flex justify-center">
  <div className="relative w-[200px] md:w-[250px] lg:w-[350px]">
    <img
      src="https://play-lh.googleusercontent.com/W1AclsgUfRWvzq3a_yEk5JeFQYDzCRydvxFcIwS6e_v7sFrSO7sqFdG7zIaq0VgOS7E=w1052-h592-rw"
      alt="Mobile App Preview"
      className="w-full max-w-[250px] h-100 mx-auto shadow-xl rounded-lg"
    />
            
            {/* Notification Icon
            <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded-full">
              <Bell size={20} />
            </div> */}

            {/* Download Count */}
            {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <Download size={20} className="text-blue-600" />
              <span className="font-semibold text-gray-900">5M+ Downloads</span>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DownloadApp;
