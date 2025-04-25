import React from "react";

const ProjectCard = ({
    projectName,
    location,
    priceRange,
    config,
    priceIncrease,
    priceDuration,
    offerText,
    projectImage,
    reraIcon,
    projectStatus,
    possessionDate,
    projectSize,
    builderName,
}) => {
    return (
        <>
            <div className="flex justify-center w-98 items-center">
            <div className="relative cursor-pointer rounded-lg shadow-lg bg-white p-4 max-w-lg" style={{ width: "400px", height: "600px" }}>
                {/* Top Tag - New Launch */}
                <div className="flex items-center gap-2">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-l-lg">
                        <p className="text-xs font-semibold">{projectStatus}</p>
                    </div>
                    <img
                        src="https://static.99acres.com/universalapp/img/LeftTagEnd.png"
                        alt="Tag"
                        className="h-4"
                    />
                </div>

                {/* Main Content */}
                <div className="mt-2 flex flex-col gap-2">
                    {/* Project Image with RERA Tag */}
                    <div className="relative w-full">
                        <img
                            src={projectImage}
                            alt={projectName}
                            className="w-full h-48 rounded-lg object-cover"
                        />
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow">
                            <img src={reraIcon} alt="RERA" className="h-4 w-4" />
                            <p className="text-xs font-semibold text-blue-500">RERA</p>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-1">
                        <p className="text-lg font-bold">{projectName}</p>
                        <p className="text-sm text-gray-600">{location}</p>

                        <div className="flex items-center gap-2 text-sm">
                            <p className="font-bold">{priceRange}</p>
                            <p className="text-gray-400">|</p>
                            <p>{config}</p>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-green-600">
                            <span className="font-semibold">{priceIncrease}</span>
                            <span>price increase in {priceDuration}</span>
                        </div>

                        {/* New Additional Info */}
                        <div className="flex flex-col gap-1 text-sm text-gray-700 mt-2">
                            <p>
                                <strong>Status:</strong> {projectStatus}
                            </p>
                            <p>
                                <strong>Possession Date:</strong> {possessionDate}
                            </p>
                            <p>
                                <strong>Project Size:</strong> {projectSize}
                            </p>
                            <p>
                                <strong>Builder:</strong> {builderName}
                            </p>
                        </div>
                    </div>

                    {/* Offer Section */}
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg mt-2">
                        <img
                            src="https://static.99acres.com/universalapp/img/NL_Tag.png"
                            alt="Offer"
                            className="h-5"
                        />
                        <p className="text-sm font-semibold">{offerText}</p>
                    </div>

                    {/* View Number Button */}
                    <button className="bg-[#6f272b] text-white px-4 py-2 rounded-full mt-2 hover:bg-[#5a1e23] transition duration-300">
                        View Number
                    </button>
                </div>

                {/* Dashed Line */}
                <img
                    src="https://static.99acres.com/universalapp/img/Dashed_Line.png"
                    alt="Dashed Line"
                    className="mt-4"
                />
            </div>
        </div>
        </>
    );
};

export default ProjectCard;
