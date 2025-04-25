import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const AllResidential = () => {
    return (
        <div className="relative flex justify-between">
            <FlyoutLink href="#" FlyoutContent={NavbarItemContent}>
                All Residential
            </FlyoutLink>
        </div>
    );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative w-fit h-fit gap-2">
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="relative flex items-center gap-2 cursor-pointer"
            >
                <a href={href} className="text-black flex items-center gap-2">
                    {children}
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <FaChevronDown className="text-black transition-transform duration-300" />
                    </motion.span>
                </a>
            </div>

            {/* Dropdown */}
            <AnimatePresence>
                {open && FlyoutContent && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-full mt-2 z-50 bg-white text-black shadow-xl rounded-lg border border-gray-200"
                        style={{ transform: "translateX(-50%)" }}
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const NavbarItemContent = () => {
    return (
        <div className="w-60 bg-white p-4 shadow-xl rounded-md z-100">
            <div className="mb-3 space-y-2">
                <h3 className="font-semibold text-lg">Explore real estate in...</h3>
                <a href="#" className="block text-sm hover:underline">
                    Introduction
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Pay as you go
                </a>
            </div>
            <div className="mb-6 space-y-2">
                <h3 className="font-semibold">For Companies</h3>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
            </div>
            <button className="w-full  rounded-lg border-2 border-black px-4 py-2 font-semibold transition-colors hover:bg-black hover:text-white">
                Contact sales
            </button>
        </div>
    );
};

export default AllResidential;
