import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

function Avatars({ image, width = 45, height = 45, dotColor }) {
    return (
        <div className="relative">
            {/* if dotColor is passed, then it shows the dot badge */}
            {dotColor ? (
                <div className={` absolute -top-2 right-1 z-10`}>
                    <svg
                        fill={dotColor}
                        width="20px"
                        height="20px"
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" />
                    </svg>
                </div>
            ) : null}

            {/* Avatar */}
            <Avatar src={image} sx={{ width: width, height: height }}>
                <Image src={image} alt="avatar" loading="eager" />
            </Avatar>
        </div>
    );
}

export default Avatars;
