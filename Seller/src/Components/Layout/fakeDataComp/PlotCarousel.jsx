import React from "react";
import PlotCard from "./Plotcard";
import { plotData } from "../../../data/data";

const PlotCarousel = () => {
return (
    <div className="flex w-full">
        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-10 xl:py-12">
            {/* Section Title */}
            <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-2 w-fit">
                    <h2 className="text-lg font-medium md:text-xl lg:text-2xl flex flex-col w-fit">
                        <span>Find Your Dream Plots With Zaminwale.</span>
                        <span className="h-1.5 w-20 bg-[#6f272b] rounded-full"></span>
                    </h2>
                </div>
            </div>

            {/* Plot Cards Carousel */}
            <div className="flex w-full overflow-x-auto scrollbar-none">
                <div className="flex -ml-2 sm:-ml-4 space-x-4">
                    {plotData.map((plot, index) => (
                        <PlotCard key={index} {...plot} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);
};

export default PlotCarousel;
