import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.8 },
    }),
  };

  return (
    <div className="relative bg-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left Content Section */}
      <div className="relative max-w-3xl md:w-2/3">
        <motion.h2
          className="text-lg uppercase font-semibold text-gray-600 mb-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          Our Story
        </motion.h2>

        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          LEADERS THAT BUILD THE Future,NOT JUST THE STRUCTURE!
        </motion.h1>

        <motion.p
          className="text-sm text-gray-700 mb-6"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Armed with a legacy of 39+ years, Zaminwala Realty is not just in the business of building structures but creating a community that envisions lifestyles. As the No. 1 real estate brand in Pune, we operate under the mantra “World of Thoughtfulness.” pioneering maximum living areas. We deliver luxury and premium living with 2, 3, and 4 BHK homes that are:
        </motion.p>

        {/* Animated Text Blocks */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            ["Not Just At ParT But", "Beyond Your Expectations."],
            ["A Relentless Pursuit Of", "Excellence"],
            ["Setting The Carpet For", "Times Ahead!"]
          ].map(([title, subtitle], i) => (
            <motion.div
              key={i}
              className="border-l-4 border-blue-500 pl-4"
              initial="hidden"
              animate="visible"
              custom={i + 3}
              variants={textVariants}
            >
              <p className="text-gray-600">{title}</p>
              <h3 className="text-xl text-blue-700 font-semibold">{subtitle}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative w-full md:w-1/3 flex justify-center items-center">
        <img
          src="./src/assets/build.png"  // <-- Replace with actual image path
          alt="Architectural Design"
          className="w-full md:max-w-sm object-cover "
        />
      </div>
    </div>
  );
};

export default StorySection;
