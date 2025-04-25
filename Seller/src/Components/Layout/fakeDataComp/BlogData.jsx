import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Import Images from Local Storage
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";
import blog4 from "../../../assets/blog4.png";

// Blog Data with Local & Online Images
const blogData = [
    {
        id: 1,
        title: "Mahamumbai - Your Future Investment Opportunity",
        description:
            "MAHAMUMBAI enjoys high property supply, demand is growing due to construction of upcoming sea-link from...",
        image: blog1,
        link: "/blogs/mahamumbai-your-future-investment-opportunity",
    },
    {
        id: 2,
        title: "Why Thane is good for investment in Plots?",
        description:
            "Thane is an emerging cosmopolitan city in the Mumbai Metropolitan Area and the most preferred...",
        image: blog2,
        link: "/blogs/why-thane-is-good-for-investment-in-plots",
    },
    {
        id: 3,
        title: "The Dos and Don’ts of Buying Land",
        description:
            "Buying land is a dream for many people. Purchasing land is also one of the...",
        image: blog3,
        link: "/blogs/the-dos-and-donts-of-buying-land",
    },
    {
        id: 4,
        title: "Advantages of owning a Plots",
        description:
            "There is no doubt that real estate is one of the most fruitful and stable...",
        image: blog4,
        link: "/blogs/advantages-of-owning-a-plots",
    },
];

const BlogCarousel = () => {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 xl:py-14">
                {/* Header Section */}
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col gap-2 w-fit">
                        <h2 className="text-lg font-medium md:text-xl lg:text-2xl">
                            <span>News & Blogs</span>
                            <span className="h-1.5 w-20 bg-[#6f272b] rounded-full"></span>
                        </h2>
                    </div>
                    <span className="hidden md:flex items-center gap-2">
                        See More Blogs
                        <FaArrowRight size={20} />
                    </span>
                </div>

                {/* Blog Cards Container */}
                <div className="flex h-94 overflow-x-auto gap-4">
                    {blogData.map((blog) => (
                        <div
                            key={blog.id}
                            className="w-20 h-50 min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] xl:min-w-[280px] shrink-0"
                        >
                            {/* Blog Image */}
                            <div className="relative aspect-video rounded-t-lg overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className=" mx-auto h-36 transition-all duration-300 hover:blur-none"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-4">
                                <span className="text-sm md:text-base font-medium">
                                    {blog.title}
                                </span>
                                <p className="text-xs sm:text-sm mt-1 text-gray-600">
                                    {blog.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCarousel;
