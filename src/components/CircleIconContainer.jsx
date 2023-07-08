"use client";
import { Badge, Icon, colors } from "@mui/material";
// import { Icon } from "@chakra-ui/react";
import React from "react";

function CircleIconContainer({
    icon,
    notificationDotColor,
    size = "w-12 h-12",
}) {
    return (
        <div
            className={`${size} bg-white relative flex justify-center items-center rounded-full p-2 shadow-sm hover:shadow-md text-[#c3cad9] hover:text-[#8f95a1] !duration-0 !cursor-pointer`}>
            {notificationDotColor ? (
                <div className={` absolute -top-2 right-1`}>
                    <svg
                        fill={notificationDotColor}
                        width="20px"
                        height="20px"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" />
                    </svg>
                </div>
            ) : null}

            {/* <Icon  /> */}
            <div className={` text-2xl`}>{icon}</div>
        </div>
    );
}

export default CircleIconContainer;
