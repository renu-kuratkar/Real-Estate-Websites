// import { Outlet } from "react-router-dom";
import { Header } from "../Layout/BuyerComp/header/Bheader";
import { Sidebar } from "./UI/Sidebar/Sidebar"
import PropertyCard from "./fakeDataComp/PropertyCard";
import PropertyList from "./fakeDataComp/propertylist";
import ImageSlider from "./fakeDataComp/ImageSlider";
import PropertySelector from "./fakeDataComp/PropertySelector";
import ActivityBox from "./fakeDataComp/Activity";
import ProjectCard from "./fakeDataComp/ProjectCard";
import { projectData } from "../../data/data";
import Advertisement from "./fakeDataComp/Advertisement";
import PlotCarousel from "./fakeDataComp/PlotCarousel";
import Footer from "./fakeDataComp/footer";
import BlogData from "./fakeDataComp/BlogData";
import BudgetBrowser from "./fakeDataComp/BudgetBrowser";
import GoalCards from "./fakeDataComp/GoalCards";
export const Applayout = () => {

    return (
        <>
            <Header />
            <Sidebar />
            <PropertySelector />
            <ImageSlider />
            <Advertisement />
            <PropertyCard />
            <PropertyList />
            <div className="flex gap-4 w-3/4 mx-auto">
                <div className="w-3/4">
                    <BudgetBrowser />
                </div>
                <div>
                    <ActivityBox />
                </div>
            </div>
            <div className="mb-6 mt-5 text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    Top Highlighted Project
                </h2>
                <p className="text-gray-500 text-sm">Curated especially for you</p>
            </div>
            <div className=" justify-center gap-8 flex ">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <PlotCarousel />
            <GoalCards />
            <BlogData />
            <Footer />
        </>
    );
};

