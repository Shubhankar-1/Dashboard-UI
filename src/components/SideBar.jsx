"use client";
import React from "react";
import CircleIconContainer from "./CircleIconContainer";

import { AiFillStar, AiOutlineRise } from "react-icons/ai";
import {
    FaCompass,
    FaFacebookMessenger,
    FaGlobeAmericas,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { Avatar } from "@mui/material";
import avatar1 from "../assets/Avatar/Avatar1.jpg";
import avatar3 from "../assets/Avatar/Avatar2.jpg";
import avatar2 from "../assets/Avatar/Avatar3.jpg";
import avatar4 from "../assets/Avatar/Avatar.jpg";

import { Badge } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import Avatars from "./Avatars";

function SideBar() {
    return (
        <div className="hidden md:flex flex-col p-6 justify-between mr-2 sticky left-0 top-0 border h-screen w-24 bg-[#f7f8fa]">
            {/* Sidebar Navigations */}
            <div className="flex flex-col gap-3">
                <CircleIconContainer icon={<FaCompass color="#3361ff" />} />
                <CircleIconContainer icon={<AiFillStar />} />
                <CircleIconContainer
                    icon={<FaFacebookMessenger />}
                    notificationDotColor="#3361ff"
                />
                <CircleIconContainer icon={<AiOutlineRise />} />
                <CircleIconContainer icon={<FaGlobeAmericas />} />
                <CircleIconContainer icon={<MdLocationCity />} />
            </div>

            {/* Avatars */}
            <div className=" flex flex-col gap-3">
                <Avatars image={avatar2} dotColor="#3361ff" />
                <Avatars image={avatar3} />
                <Avatars image={avatar1} />
                <Avatars image={avatar4} />
                <CircleIconContainer icon={<IoMdAddCircle />} />
            </div>
        </div>
    );
}

export default SideBar;
