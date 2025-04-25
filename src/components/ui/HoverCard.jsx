import React, { useState } from "react";
import { CallMade } from "@mui/icons-material";

const HoverCard = ({image}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-80 h-80 bg-black  shadow-lg transition-all duration-500 overflow-visible pb-5 min-h-80 "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="p-10 Items-start">

                <p className=" text-2xl font-bold text-white">BHK..</p>
                <p className=" text-sm text-white">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            {/* Image Section (Moves & Changes BG on Hover) */}
            <div
                className={`absolute transition-all duration-500 z-10 ${hovered ? "h-1/2 w-1/2 left-0 top-1/2 " : "h-full w-full top-0 "
                    } flex justify-center items-center`}
            >
                 <img
                    src={image}
                    alt="Card Image"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Bottom Two Divs (Take Same Height as Image on Hover) */}
            <div
                className={`absolute bottom-0 left-0 w-full transition-all duration-500 flex ${hovered ? "h-1/2 opacity-100" : "h-0 opacity-0"
                    }`}
            >
                {/* Left Placeholder (Same size as image) */}
                <div className="w-1/2 bg-gray-200"></div>

                {/* Right Side Content */}
                <div className="w-1/2 flex flex-col justify-center items-center p-4 bg-white">
                    <div className="flex items-center justify-center h-full w-full">
                        <h2 className="text-sm font-bold text-black transition-colors duration-300 flex items-center gap-2 hover:text-[#041533]">
                            MORE
                        </h2>
                        <CallMade className="text-sm text-black transition-colors duration-300 hover:text-[#041533]" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HoverCard;
