import React from "react";
import step1Icon from "../../../assets/1icon.png";
import step2Icon from "../../../assets/2icon.png";
import step3Icon from "../../../assets/3icon.png";

const PostSteps = () => {
    const steps = [
        {
            id: "01",
            title: "Add details of your property",
            description:
                "Begin by telling us the few basic details about your property like your property type, location, No. of rooms etc",
            icon: step1Icon,
        },
        {
            id: "02",
            title: "Upload Photos & Videos",
            description:
                "Upload photos and videos of your property either via your desktop device or from your mobile phone",
            icon: step2Icon,
        },
        {
            id: "03",
            title: "Add Pricing & Ownership",
            description:
                "Just update your property's ownership details and your expected price and your property is ready for posting",
            icon: step3Icon,
        },
    ];

    return (
        <section className="container w-1/2 mx-15">
            {/* Heading Section */}
            <h4 className="text-center text-sm text-red-900 uppercase tracking-widest">
                HOW TO POST
            </h4>
            <h2 className="text-center text-4xl font-extrabold mt-2 mb-8 text-gray-800">
                Post Your Property in{" "}
                <span className="text-red-900">3 Simple Steps</span>
            </h2>

            {/* Steps Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center p-6 shadow-lg rounded-lg bg-gray-50 hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={step.icon}
                            alt={`Step ${step.id}`}
                            className="w-16 h-16 mb-4 rounded-full bg-red-100 p-2"
                        />
                        <h3 className="text-lg font-bold text-gray-800">
                            <span className="text-red-900">{step.id}.</span> {step.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Button Section */}
            <div className="flex justify-center mt-8">
                <button className="bg-red-900 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors duration-300 shadow-md hover:shadow-lg">
                    Begin to Post your Property
                </button>
            </div>
        </section>
    );
};

export default PostSteps;
