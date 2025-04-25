import React from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { CallMade } from "@mui/icons-material";
import PropertyCarousel from "./PropertyCarousel ";

const TwoColumnLayout = () => {
  return (
    <div className="flex w-full h-screen p-4 m-auto pt-20">
      {/* Left side: Scrollable without scrollbar */}
      <div className="w-2/3 h-full overflow-y-auto p-4 bg-red text-white  scrollbar-hide">
        <p className="text-black">Continue browsing...</p>




        <PropertyCarousel />
        <PropertyCarousel />
        <PropertyCarousel />
        {/* <SmoothScrollHero/> */}
        <PropertyCarousel />
      </div>

      {/* Right side: No changes, just making it sticky */}
      <div className="w-1/3 bg-green p-4 text-white gap-4 sticky top-0 h-screen">
        <div className="p-5 bg-[#d1d3da] border border-[#ebecf0] rounded-lg mb-[23px]">
          <div className="user-icon flex items-center pb-4">
            <PersonPinIcon className="mr-[20px] w-5 h-5 text-[#43516E]" />
            <p className="text-black font-bold text-lg">Guest User</p>
          </div>
          <div className="text-[#43516E] text-xs pb-4">Your Recent Activity</div>
          <div className="pb-4">
            <div className="cursor-pointer inline-block align-top w-[142px] h-[80px] mr-2 p-3 rounded-md bg-[#FFF5E4] pb-4">
              <div className="flex justify-between items-center pb-2">
                <div className="text-[24px] leading-[32px] font-semibold text-[#43516E] block text-left align-middle">
                  1
                </div>
                <CallMade className="text-[#FFAF6B] text-sm" />
              </div>
              <div className="text-[#43516E] text-sm">Viewed</div>
            </div>
          </div>
          <div className="cursor-pointer align-top w-full h-auto mr-2 p-3 rounded-md bg-[#6f272b] text-white flex items-center justify-center font-bold">
            <h3>Login/Register to Save Activity</h3>
          </div>
          <p className="text-xs text-black flex items-center justify-center font-thin pt-4">
            & see your activities across browsers & devices...
          </p>
        </div>
        <img src="/Image/banner.png" alt="image" className="rounded-lg min-h-20" />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
