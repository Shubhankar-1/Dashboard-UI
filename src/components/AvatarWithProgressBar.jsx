import { Badge, CircularProgress } from "@mui/material";
import React from "react";
import Avatars from "./Avatars";

function AvatarWithProgressBar({ avatar, progress }) {
    return (
        <div className="relative inline-block">
            {/* Avatar Image */}
            <Avatars image={avatar} width={110} height={110} />

            {/* Progress Bar Around Avatar*/}
            <CircularProgress
                className="text-[#3361FF]"
                size={"130px"}
                value={80}
                variant="indeterminate"
                thickness={0.8}
                style={{
                    transform: "scaleX(-1) rotate(-90deg)",
                    position: "absolute",
                    top: -10,
                    left: -10,
                }}
            />
        </div>
    );
}

export default AvatarWithProgressBar;
