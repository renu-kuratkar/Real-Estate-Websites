import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CallMade } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const NavbarDropDown = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  useEffect(() => {
    if (activeTab && tabRefs.current[activeTab]) {
      const tabElement = tabRefs.current[activeTab];
      setIndicatorStyle({
        left: tabElement.offsetLeft + tabElement.offsetWidth / 4,
        width: tabElement.offsetWidth / 2,
      });
    }
  }, [activeTab]);

  const navbarContents = {
    "For Buyer": ServicesContent,
    "For Seller": AboutContent,
    "Owner": ContactContent,
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="flex justify-between">
        {Object.keys(navbarContents).map((tab) => (
          <FlyoutLink
            key={tab}
            href="#"
            FlyoutContent={navbarContents[tab]}
            onMouseEnter={() => setActiveTab(tab)}
            ref={(el) => (tabRefs.current[tab] = el)}
          >
            {tab}
          </FlyoutLink>
        ))}
      </div>

      <motion.div
        className="rounded-t-[16px] h-[3px] bg-white absolute bottom-[-5px] left-0"
        animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

const FlyoutLink = React.forwardRef(({ children, href, FlyoutContent, onMouseEnter }, ref) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        setOpen(true);
        onMouseEnter();
      }}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit pr-10 pl-10"
    >
      <a href={href} className="relative text-white">
        {children}
      </a>
      <AnimatePresence>{showFlyout && <FlyoutContent />}</AnimatePresence>
    </div>
  );
});

const ServicesContent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("BUY A HOME");

  const content = {
    "BUY A HOME": [
      { isHeader: true, name: "PROPERTIES IN PUNE" },
      { name: "Flat", link: "/plot-navbar" },
      { name: "Builder Floors", link: "#" },
      { name: "Independent House", link: "#" },
    ],
    "Marketing": [
      { name: "SEO", link: "#" },
      { name: "Social Media", link: "#" },
    ],
  };

  const extraContent = (
    <div className="p-8 w-full h-full">
      {/* <div className="rounded-md w-60 h-50"> */}

      <div className="cursor-pointer inline-block align-top w-70 h-full mr-2 p-3 rounded-md bg-[#DCEEFF] pb-4">
        <div className="flex justify-between items-center pb-2">
          <div className="text-[24px] leading-[32px] font-semibold text-[#43516E] block text-left align-middle">
            1
          </div>
          <CallMade className="text-[#0078DB] text-sm" />
        </div>
        <div className="text-[#43516E] text-sm">
          
        <ul className="mt-6 flex flex-col gap-2 text-xs ">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>High-resolution image generation</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Customizable style templates</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Batch processing capabilities</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>AI-driven image enhancements</span>
          </li>
          <li className="opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="line-through">Seamless cloud integration</span>
          </li>
          <li className="opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );

  return <NavbarItemContent content={content} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} navigate={navigate} extraContent={extraContent}/>;
};

const AboutContent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Our Story");

  const content = {
    "Our Story": [
      { name: "Mission", link: "/seller" },
      { name: "Vision", link: "#" },
    ],
    "Team": [
      { name: "Leadership", link: "#" },
      { name: "Careers", link: "#" },
      { name: "Culture", link: "#" },
    ],
  };

  return <NavbarItemContent content={content} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} navigate={navigate} />;
};

const ContactContent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Support");

  const content = {
    "Support": [
      { name: "FAQ", link: "#" },
      { name: "Help Center", link: "#" },
    ],
    "Sales": [
      { name: "Enterprise", link: "#" },
      { name: "Startups", link: "#" },
    ],
  };

  return <NavbarItemContent content={content} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} navigate={navigate} />;
};

const NavbarItemContent = ({ content, selectedCategory, setSelectedCategory, navigate, extraContent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute right-1 top-full mt-5 bg-white text-black min-w-max shadow-xl rounded-lg flex"
    >
      <div className="w-50 bg-gray-100 p-6 min-h-70">
        <div className="absolute right-1 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
        {Object.keys(content).map((category) => (
          <button
            key={category}
            onMouseEnter={() => setSelectedCategory(category)}
            className={`block w-full text-left px-4 py-2 ${
              selectedCategory === category ? "bg-gray-300 font-semibold" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="p-6 bg-white min-w-[200px] flex flex-col justify-between">
        <div>
          {content[selectedCategory].map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.link)}
              className="block text-sm hover:underline mb-2"
            >
              {item.name}
            </button>
          ))}
        </div>
        <button className="w-full bottom-0 rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white mt-3">
          Contact sales
        </button>
      </div>
      
    {extraContent && <div className="bg-gray-50 p-4">{extraContent}</div>}
    </motion.div>
  );
};

export default NavbarDropDown;
