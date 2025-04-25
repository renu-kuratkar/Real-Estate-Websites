import React, { useState, useEffect, useRef } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import NavbarDropDown from "./ui/NavbarDropDown";

import BuyDropDown from "./ui/BuyDropDown";
import AllResidential from "./ui/AllResidential";
import {
  FaMapMarkerAlt,
  FaMicrophone,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import ExampleWrapper from "./ui/SpringModal";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import { useNavigate } from "react-router-dom";


const RouteNavbar = () => {

    const [open, setOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
  
    const toggleDrawer = (state) => () => {
      setOpen(state);
    };
  
    const [openNestedDrawer, setOpenNestedDrawer] = useState(false);
    const [nestedContent, setNestedContent] = useState("");
  
    const toggleNestedDrawer =
      (status, content = "") =>
      () => {
        setOpenNestedDrawer(status);
        setNestedContent(content);
      };
  
    const listItems = [
      {
        title: "For Buyers",
        content: (
          <div className="">
            <List className="list-disc pl-5 text-black">
              <ListItem style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                <ArrowRightIcon />
                <ListItemText>Buy a Home in Pune</ListItemText>
              </ListItem>
              <ListItem style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                <ArrowRightIcon />
                <ListItemText>Commercial in Pune</ListItemText>
              </ListItem>
              <ListItem style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                <ArrowRightIcon />
                <ListItemText>Top Areas for Residential</ListItemText>
              </ListItem>
              <ListItem style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                <ArrowRightIcon />
                <ListItemText>Top Areas for Commercial</ListItemText>
              </ListItem>
              <ListItem style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                <ArrowRightIcon />
                <ListItemText className="flex ">
                  <div>Insights</div>
                  <div className="relative  px-2 text-xs flex items-center justify-between  text-white bg-green-500 rounded-md font-semibold overflow-hidden">
                    <p className="r"> FREE</p>
                    {/* Shine Effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-75"
                      style={{
                        animation: "shine 1.5s infinite linear",
                        transform: "translateX(-100%)",
                      }}
                    ></div>
                    <style>
                      {`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
                    </style>
                  </div>
                </ListItemText>
              </ListItem>
              <ListItem style={{ paddingTop: "2px", paddingBottom: "2px" }}>
                <ArrowRightIcon />
                <ListItemText>Articles & News</ListItemText>
              </ListItem>
            </List>
          </div>
        ),
      },
      {
        title: "For Tenants",
        content: <p>Explore rental options and find a perfect place to live.</p>,
      },
      {
        title: "For Owners",
        content: (
          <p>List your property and connect with potential buyers easily.</p>
        ),
      },
      {
        title: "For Dealers / Builders",
        content: (
          <p>Partner with us for seamless property management solutions.</p>
        ),
      },
    ];
  
    
    
  return (
    <>
        {/* Navbar */}
        <div
        className="bg-[#6f272b] navbar  shadow-sm fixed w-full top-0 z-50 flex  items-center px-4 py-2 justify-between"
      >
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <button className=" text-2xl cursor-pointer font-bold text-white" onClick={() => navigate("/")}>
          
            Zaminwala.com
          </button>

          <div className="relative z-10">
            <BuyDropDown />
          </div>
        </div>

        {/* Center - Moving Overlay Div */}
        <div
          className="transition-all duration-300  "
        >
          <div className="bg-white block bg-opacity-80 p-2 rounded-md  text-center">
            <div className="relative flex items-center  ">
              {/* Left Section - AllResidential Component */}
              <div className=" border-r border-gray-300">
                <AllResidential />
              </div>

              {/* Center Section - Search Bar (Expands to fill space) */}
              <div className="flex-1 flex justify-center">
                <div className="relative flex items-center w-full max-w-3xl ">
                  {/* Search Icon Positioned Inside Input */}
                  <FaSearch className="absolute left-4 text-[#6f272b]" />

                  {/* Search Input Field */}
                  <input
                    type="text"
                    placeholder="Search for properties..."
                    className="px-12 py-2 w-full outline-none border-none "
                  />
                </div>
              </div>

              {/* Right Section - Location, Mic, and Search Button */}
              <div className="flex items-center  space-x-4">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="Search Near Me"
                >
                  <button className=" btn p-3 bg-red-50 rounded-full  transition">
                    <FaMapMarkerAlt className=" text-red-900" />
                  </button>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Speack">
                  <button className="p-3 bg-red-50 rounded-full hover:bg-gray-200 transition">
                    <FaMicrophone className=" text-red-900" />
                  </button>
                </div>
                <button className="px-6 py-2 bg-[#6f272b] text-white rounded-full font-semibold hover:bg-gray-900 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Navbar Elements */}
        <div className="navbar-end flex justify-between w-auto">
        
          {/* Hamburger Menu - Moves to Right When Scrolled */}
          

          <div
            className="dropdown transition-all duration-300 flex justify-between items-center "
          >
            {/* <div className="flex items-center gap-5"> */}
              {/* User Icon with Login Popup */}
             

             
            {/* </div> */}
            <ExampleWrapper />
            <div className="relative hidden md:block ">
                <FaUserCircle
                  className="text-white text-2xl cursor-pointer"
                  onClick={() => setShowLogin(true)} // Show login modal on click
                />
                <span className="absolute top-0 right-0 bg-red-600 w-2 h-2 rounded-full"></span>
              </div>

            <div
              className="pr-4 pl-5 cursor-pointer"
              onClick={toggleDrawer(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex  bg-blur items-center justify-center backdrop-blur-sm  z-50">
          {/* <div className=" p-6 rounded-lg shadow-lg relative mb-0 w-150"> */}
            {/* Close Button */}
            <button
              className="absolute top-10  text-white right-100 "
              onClick={() => setShowLogin(false)}
            >
            <CloseIcon />
              {/* ✖ */}
            </button>
            <Login /> {/* Login Component */}
          {/* </div> */}
        </div>
      )}
      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { width: "330px" } }}
      >
        <div className=" flex flex-start bg-gray-200 p-4">
          <PersonPinIcon className="text-[#300D4D] " />
          <p className="text-blue font-semibold pl-2">LOGIN / REGISTER</p>
        </div>
        <div className="pl-[20px]">
          <div className="p-4 flex border-b border-[#ebecf0] hover:bg-gray-200">
            <button className=" flex justify-between bg-opacity-80 p-1 rounded-md ">
              <div className="font-medium pr-4">Post Property</div>
              <div className="relative  px-2 text-xs flex items-center justify-between  text-white bg-green-500 rounded-md font-semibold overflow-hidden">
                <p className="r"> FREE</p>
                {/* Shine Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-75"
                  style={{
                    animation: "shine 1.5s infinite linear",
                    transform: "translateX(-100%)",
                  }}
                ></div>
              </div>
            </button>

            {/* Shine Effect Keyframes inside JSX */}
            <style>
              {`
      @keyframes shine {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `}
            </style>
          </div>
          <div className="p-4 pb-4 flex border-b border-[#ebecf0] hover:bg-gray-200">
            <button className=" flex justify-between bg-opacity-80 p-1 rounded-md ">
              <div className="font-thin pr-4">Explore our Services</div>
            </button>
          </div>
          <div className="w-64 ">
            {/* <h2 className="text-xl font-bold mb-4">Menu</h2> */}
            <List>
              {/* Each ListItem Opens a Nested Drawer */}
              {listItems.map((item) => (
                <ListItem
                  button
                  key={item.title}
                  className="min-h-[30px]"
                  onClick={toggleNestedDrawer(true, item.content)}
                  style={{ paddingBottom: "2px" }}
                >
                  <ArrowRightIcon />
                  <ListItemText primary={item.title} className="text-sm" />
                </ListItem>
              ))}
            </List>
          </div>
        </div>

        <Drawer
          anchor="right"
          open={openNestedDrawer}
          onClose={toggleNestedDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "330px",
              zIndex: 1301,
              boxShadow: "none",
              top: "56px",
            },
          }} // Higher z-index to overlay main drawer
          BackdropProps={{ invisible: true }}
        >
          <div className="p-4 flex justify-between ">
            <h2 className="text-lg font-semibold">Details</h2>
            <CloseIcon
              className="cursor-pointer text-gray-600 hover:text-gray-900"
              onClick={toggleNestedDrawer(false)}
            />
          </div>
          <div className="p-4 pt-0">
            {nestedContent} {/* Dynamically changing content */}
          </div>
        </Drawer>
      </Drawer>

      {/* Carousel Section */}
      <div className="relative ">
        {/*<Carousel />*/}

        {/* Overlaying Div (Visible only when not scrolled) */}
       
      </div>
      {/* <hovercard /> */}
      <div className=""></div>
      {/* twocard  */}
      <div className="img-div flex justify-center items-center ">
        <img src="/Image/3rd-mumbai-ad.jpg" alt="" className="rounded-md" />
      </div>
      <div className="">{/* <TwoColumnLayout /> */}</div>

      {/* <ForBuyer/> */}
      {/* <SwipeCarousel /> */}
      {/* <DrawerComponent/> */}
    
    </>
  )
}

export default RouteNavbar
