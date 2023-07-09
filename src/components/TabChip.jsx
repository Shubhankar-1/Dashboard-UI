import { Tab } from "@mui/material";
import React from "react";

function TabChip({ icon, title, value, id }) {
    return (
        <Tab
            label={
                <div className="flex gap-2">
                    {icon}
                    {title}
                </div>
            }
            id={id}
            className={`${
                value == 0 ? "text-[#3361ff]" : "text-[#7d8fb3] "
            } font-bold normal-case`}
        />
    );
}

export default TabChip;
