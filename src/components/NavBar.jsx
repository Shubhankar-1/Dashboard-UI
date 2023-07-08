"use client";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import CircleIcon from "./CircleIconContainer";
import { Avatar } from "@mui/material";
function NavBar() {
    return (
        <div className="flex md:justify-between sticky top-0 h-16 md:h-20 w-full p-5 border items-center text-[#7d8fb3] !bg-[#f7f8fa] ">
            {/* Menu Button */}
            <button className="w-[50px] h-[50px] p-[10px] text-center rounded-full  bg-white shadow-md hover:shadow-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z"
                        fill="#C3CAD9"
                    />
                </svg>
            </button>

            {/* Brand logo */}
            <div className="text-[18px] font-medium ml-4 lg:ml-[25px] md:ml-[35px] text-[#4d5e80]">
                Constructor
            </div>

            {/* Navlinks */}
            <div className="hidden lg:flex items-center justify-center mx-3 text-sm font-medium gap-7">
                <div>Dashboard</div>
                <div>About Us</div>
                <div>News</div>
                <div>User Policy</div>
                <div>Contacts</div>
                <div className="text-xl">
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
            <div className="md:hidden bg-white shadow-md hover:shadow-sm cursor-pointer rounded-full w-12 h-12 p-2 right-5 absolute">
                <Avatar className="rounded-full !w-8 !h-8 bg-[#c3cad9]" />
            </div>

            <div className="hidden md:flex gap-2  ml-3">
                <CircleIcon
                    icon={<IoIosNotifications />}
                    notificationDotColor="#e62e7b"
                />
                <CircleIcon icon={<AiFillCloseCircle />} />
            </div>
        </div>
    );
}

export default NavBar;
