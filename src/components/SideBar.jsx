"use client";
import React from "react";
import { AiFillStar, AiOutlineRise } from "react-icons/ai";
import {
    FaCompass,
    FaFacebookMessenger,
    FaGlobeAmericas,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import CircleIcon from "./CircleIconContainer";
import { Avatar } from "@mui/material";
import avatar1 from "../assets/Avatar/Avatar1.jpg";
import avatar3 from "../assets/Avatar/Avatar2.jpg";
import avatar2 from "../assets/Avatar/Avatar3.jpg";
import avatar4 from "../assets/Avatar/Avatar.jpg";
import Image from "next/image";

import { Badge } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";

function SideBar() {
    return (
        <div className="flex flex-col -z-10 p-6 justify-between mr-2 sticky left-0 top-0 border min-h-screen h-full w-24 bg-[#f7f8fa]">
            {/* Sidebar Navigations */}
            <div className="flex flex-col gap-3">
                <CircleIcon icon={<FaCompass color="#3361ff" />} />
                <CircleIcon icon={<AiFillStar />} />
                <CircleIcon
                    icon={<FaFacebookMessenger />}
                    notificationDotColor="#3361ff"
                />
                <CircleIcon icon={<AiOutlineRise />} />
                <CircleIcon icon={<FaGlobeAmericas />} />
                <CircleIcon icon={<MdLocationCity />} />
            </div>

            {/* Avatars */}
            <div className=" flex flex-col gap-3">
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    badgeContent={
                        <div className="bg-[#3361ff] w-2 h-2 rounded-full"></div>
                    }>
                    <Avatar sx={{ width: 45, height: 45 }}>
                        <Image src={avatar2} alt="avatar" />
                    </Avatar>
                </Badge>
                <Avatar sx={{ width: 45, height: 45 }}>
                    <Image src={avatar3} alt="avatar" />
                </Avatar>
                <Avatar sx={{ width: 45, height: 45 }}>
                    <Image src={avatar1} alt="avatar" />
                </Avatar>
                <Avatar sx={{ width: 45, height: 45 }}>
                    <Image src={avatar4} alt="avatar" />
                </Avatar>
                <CircleIcon icon={<IoMdAddCircle />} />
            </div>
        </div>
    );
}

export default SideBar;
