"use client";
import React from "react";
import CircleIconContainer from "./CircleIconContainer";
import avatar from "../assets/Avatar/Image.png";
import Image from "next/image";

import { Avatar, Badge } from "@mui/material";
import { BsFillPersonFill, BsPhoneFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { CircularProgress } from "@mui/material";
import {
    MdBuild,
    MdCalendarMonth,
    MdChromeReaderMode,
    MdDashboard,
    MdEmail,
    MdGroup,
    MdLocalPhone,
    MdMail,
    MdPlaylistAddCheck,
} from "react-icons/md";
import { AiFillCloud } from "react-icons/ai";
import MenuChip from "./MenuChip";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import AvatarWithProgressBar from "./AvatarWithProgressBar";

function SidePanel() {
    return (
        <div className="hidden lg:flex flex-col gap-10 m-10 w-72 h-screen ">
            {/* Head */}
            <div className="">
                <div className="flex justify-between">
                    <CircleIconContainer
                        size="w-10 h-10"
                        icon={<BsFillPersonFill />}
                    />

                    <CircleIconContainer
                        size="w-10 h-10"
                        icon={<FiMoreHorizontal />}
                    />
                </div>

                {/* User Info */}
                <div className="flex flex-col justify-center items-center cursor-pointer">
                    {/* Avatar */}
                    <AvatarWithProgressBar avatar={avatar} progress={75} />

                    <div className="flex flex-col gap-4 mt-8 text-center">
                        <div className="darkgrayblue font-bold">
                            Hello Alfred Bryant
                        </div>
                        <div className="text-sm">adrain.nader@yahoo.com</div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="grid grid-cols-2 border rounded-2xl text-2xl h-full ">
                <MenuChip extraCSS='border-r border-b' icon={<MdDashboard />} title="Dashboard" />
                <MenuChip extraCSS='border-b' icon={<MdPlaylistAddCheck />} title="Notes" />
                <MenuChip extraCSS='border-r border-b' icon={<MdPlaylistAddCheck />} title="Tasks" />
                <MenuChip extraCSS='border-b' icon={<AiFillCloud />} title="Files" />
                <MenuChip extraCSS='border-r border-b' icon={<MdEmail />} title="Email" />
                <MenuChip extraCSS='border-b' icon={<MdGroup />} title="Contacts" />
                <MenuChip extraCSS='border-r' icon={<MdCalendarMonth />} title="Calendar" />
                <MenuChip icon={<MdBuild />} title="Settings" />
            </div>

            {/* Socials */}
            <div className="flex w-full justify-between border text-xl rounded-full p-5">
                <MdLocalPhone className="cursor-pointer hover:scale-[1.2] text-orange-500" />
                <MdMail className="cursor-pointer hover:scale-[1.2] text-green-500" />
                <MdChromeReaderMode className="cursor-pointer hover:scale-[1.2] text-purple-500" />
                <FaTelegramPlane className="cursor-pointer hover:scale-[1.2] text-blue-400" />
                <IoLogoWhatsapp className="cursor-pointer hover:scale-[1.2] text-green-500" />
            </div>
        </div>
    );
}

export default SidePanel;
