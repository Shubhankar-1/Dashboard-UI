import React from "react";

function MenuChip({ icon, title,extraCSS }) {
    return (
        <div className={`${extraCSS} flex flex-col justify-center items-center cursor-pointer gap-2 hover:rounded-2xl hover:bg-white hover:scale-[1.2] hover:shadow-sm hover:text-blue-600 transition duration-100`}>
            {icon}
            <div className="!text-xs">{title}</div>
        </div>
    );
}

export default MenuChip;