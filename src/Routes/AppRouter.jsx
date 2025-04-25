import React from 'react'
import { useState } from "react";
import { BrowserRouter as useLocation } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";
import Dashboard from "../components/Dashboard";
import NewlyLaunchedProjects from "../components/NewlyLaunched";
import Properties from "../components/Properties";
import PropertySlider from "../components/PropertySlider";
import SelectionCard from "../components/SelectionCard";
import TopLocations from "../components/TopLocations";
import FeaturedProperty from "../components/FeaturedProperty";
import RegisterProperty from "../components/RegisterProperty";
import ExploreServices from "../components/ExploreServices";
import TopCities from "../components/TopCities";
import DownloadApp from "../components/DownloadApp";
import ChatBot from "../components/ChatBot";
import Footer from "../components/Footer";
import LoginRegisterModal from "../components/LoginRegisterModal";

import Combine from "../components/Combine";
import Newnavbar from "../components/Newnavbar";
import NewMiddleNavbar from "../components/NewMiddleNavbar";
import SwiperComponent from "../components/ui/SwiperComponent";

const AppRouter = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  

  // Function to open modal
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <div>
     
        <>
          <Newnavbar />
          <SidebarMenu />
          <Dashboard />
          <NewMiddleNavbar />
          <div className="flex w-full h-100 justify-center overflow-x-hidden">
            <SwiperComponent />
          </div>
          <NewlyLaunchedProjects />
          <Properties openLoginModal={openLoginModal} />
          <PropertySlider />
          <SelectionCard />
          <TopLocations />
          <FeaturedProperty />
          <RegisterProperty />
          <ExploreServices />
          <TopCities />
          <DownloadApp />
          <ChatBot />
          <Footer />
        </>
      

      {/* Login/Register Modal */}
      <LoginRegisterModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>

  )
}

export default AppRouter
