import React from "react";
import BRHeader from "../BuyerRegistration/BRheader/BRheader";
import PropertyForm from "./PropertyForm";
import Footer from "./Footer";
import PropertyAd from "./Propertyad";
import ExploreServices from "./ExploreServices";
import RouteNavbar from "../../../../../src/components/RouteNavbar";

const App = () => {
  return (
    <>
    <RouteNavbar/>
    <div className="w-full min-h-screen">
      {/* Header */}
      

      {/* Main Content */}
      <div className="p-6 flex flex-col md:flex-row gap-8 justify-center items-start w-full">
        {/* Left Section - PropertyAd */}
        <div className="w-full md:w-2/3 ">
          <PropertyAd />
        </div>

        {/* Right Section - PropertyForm (Sticky on Scroll) */}
        <div
          className="w-full md:w-1/2 relative md:sticky top-28 h-auto md:h-[80vh] overflow-auto"
          style={{
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For IE/Edge
          }}
        >
          <PropertyForm />
        </div>
      </div>

      {/* Explore Services & Footer */}
      <ExploreServices />
      <Footer />
    </div>
    </>
  );
};

export default App;
