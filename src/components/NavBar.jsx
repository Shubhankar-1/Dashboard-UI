"use client";
import React from "react";
import { FiMoreHorizontal, FiMenu } from "react-icons/fi";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

// import CircleIcon from "./CircleIconContainer";
import { Avatar } from "@mui/material";
import CircleIconContainer from "./CircleIconContainer";
function NavBar() {
    return (
        <div className="flex justify-around fixed top-0 right-0 z-50 h-16 md:h-20 w-full p-5 border items-center text-[#7d8fb3] !bg-[#f7f8fa] ">
            {/* Menu Button */}
            <CircleIconContainer icon={<FiMenu />} />

            {/* Brand logo */}
            <div className="text-[18px] font-medium ml-4 lg:ml-[25px] md:ml-[35px] text-[#4d5e80]">
                Constructor
            </div>

            {/* Navlinks */}
            <div className="hidden lg:flex items-center justify-center mx-3 text-sm font-medium gap-7">
                <div className="headerLink">Dashboard</div>
                <div className="headerLink">About Us</div>
                <div className="headerLink">News</div>
                <div className="headerLink">User Policy</div>
                <div className="headerLink">Contacts</div>
                <div className="headerLink text-xl">
                    <FiMoreHorizontal />
                </div>
            </div>

            {/* Search Input Bar */}
            <form
                type="text"
                className="hidden md:flex gap-2 px-5 py-3 mx-3 rounded-3xl shadow-sm hover:shadow-md  items-center bg-white w-[430px] h-[50px] text-sm font-medium">
                <div>
                    <AiOutlineSearch className="text-xl" />
                </div>
                <input
                    type="text"
                    placeholder="Search Products, Orders and Clients"
                    className="outline-none w-full"
                />
                <MdKeyboardArrowRight className="text-2xl" />
            </form>

            {/* User Avatar */}
            <div className="hidden md:flex items-center ml-3 gap-3 ">
                <div>
                    <Avatar className=" bg-[#c3cad9]" />
                </div>
                <div className="hidden md:flex text-sm font-semifont-medium ">
                    Clayton Santos
                </div>
            </div>

            {/* User mobile avatar */}
            <div className="md:hidden ">
                <CircleIconContainer icon={<Avatar />} />
            </div>

            <div className="hidden md:flex gap-2  ml-3">
                <CircleIconContainer
                    icon={<IoIosNotifications />}
                    notificationDotColor="#e62e7b"
                />
                <CircleIconContainer icon={<AiFillCloseCircle />} />
            </div>
        </div>
    );
}

export default NavBar;
