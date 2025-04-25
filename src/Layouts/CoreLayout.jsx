// src/layouts/MainLayout.jsx
import Newnavbar from "../components/Layout/Newnavbar";
import SidebarMenu from "../components/Layout/SidebarMenu";
import Dashboard from "../components/Dashboard";
import NewMiddleNavbar from "../components/Layout/NewMiddleNavbar";
import SwiperComponent from "../components/ui/SwiperComponent";
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
import Footer from "../components/Layout/Footer";

const MainLayout = ({ openLoginModal }) => {
  return (
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
  );
};

export default MainLayout;
