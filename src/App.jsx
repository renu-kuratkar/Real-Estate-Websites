import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import Dashboard from "./components/Dashboard";
import NewlyLaunchedProjects from "./components/NewlyLaunched";
import Properties from "./components/Properties";
import PropertySlider from "./components/PropertySlider";
import SelectionCard from "./components/SelectionCard";
import TopLocations from "./components/TopLocations";
import FeaturedProperty from "./components/FeaturedProperty";
import RegisterProperty from "./components/RegisterProperty";
import ExploreServices from "./components/ExploreServices";
import TopCities from "./components/TopCities";
import DownloadApp from "./components/DownloadApp";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import LoginRegisterModal from "./components/LoginRegisterModal";
import PlotNavbar from "./components/PlotNavbar";
import Combine from "./components/Combine";
import Newnavbar from "./components/Newnavbar";
import NewMiddleNavbar from "./components/NewMiddleNavbar";
import SwiperComponent from "./components/ui/SwiperComponent";
import TextParallaxContentExample from "./components/TextParallaxContentExample";
import Seller from "./components/seller";
import BuyerRegistration from "../Seller/src/Components/Layout/BuyerRegistration/BuyerRegistration";
import AppRouter from "./Routes/AppRouter";
import SellerDashboard from "./components/SellerDashboard";
import PropertyDetails from "./components/PropertyDetails"; // Import PropertyDetails
import Residential from "./components/middlenavbarcomponent/Residential";
import Commercial from "./components/middlenavbarcomponent/Commercial";
import VillaBunglow from "./components/middlenavbarcomponent/VillaBunglow";

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  // Function to open modal
  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<AppRouter />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/plot-navbar" element={<PlotNavbar />} />
        <Route path="/about" element={<TextParallaxContentExample />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/seller-registration" element={<BuyerRegistration />} />
        <Route path="/mainseller" element={<SellerDashboard />} />

        {/* Dynamic route for property details */}
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/residential" element={<Residential/>} />
        <Route path="/commercial" element={<Commercial/>} />
        <Route path="/villbunglow" element={<VillaBunglow/>}/>
      </Routes>
    </div>
  );
}

// AppWrapper to wrap with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
