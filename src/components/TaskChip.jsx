import React from "react";
import CircleIconContainer from "./CircleIconContainer";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdAdd } from "react-icons/md";

function TaskChip({ title, numberOfTasks, ribboncolor }) {
    return (
        <div className="flex gap-3 relative p-5 text-gray-600 rounded-md shadow-md shadow-gray-200 items-center justify-between bg-white h-14 max-w-xs">
            <div
                className={`${ribboncolor} absolute left-0 h-8 w-[3px] rounded-md`}></div>
            <div className="flex gap-4 items-center">
                {title}
                <CircleIconContainer
                    icon={numberOfTasks}
                    textsize="text-xs text-gray-600"
                    size="w-6 h-6 ring-2 ring-black ring-opacity-5 "
                />
            </div>

            <div className="flex gap-2 text-gray-400">
                <FiMoreHorizontal size={20} /> <MdAdd size={20} />
            </div>
        </div>
    );
}

export default TaskChip;
