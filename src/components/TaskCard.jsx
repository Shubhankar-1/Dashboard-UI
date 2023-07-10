import Image from "next/image";
import React from "react";
import Avatars from "./Avatars";
import { MdAlarm, MdAttachment, MdList } from "react-icons/md";
function TaskCard({
    img,
    spacetask,
    avatar,
    tasktitle,
    nunmberOfLists,
    nunmberOfAttachments,
    nunmberOfDaysLeft,
}) {
    return (
        <div className="mt-5 flex flex-col w-56 gap-2 border rounded-md bg-white font-light text-xs text-slate-400 ">
            {img && (
                <div>
                    <Image
                        src={img}
                        // layout="responsive"
                        width={500}
                        height={500}
                        alt="task image"
                        loading="eager"
                    />
                </div>
            )}
            <div className="px-3 pt-3 pb-3">
                <div className="flex justify-between items-center">
                    <div className="">{spacetask}</div>
                    <div>
                        <Avatars image={avatar} height={20} width={20} />{" "}
                    </div>
                </div>
                <div className=" py-2">
                    <div className="text-slate-500 font-medium">
                        {tasktitle}
                    </div>
                    {nunmberOfLists && (
                        <div className="flex justify-between pt-3 px-1 items-center ">
                            <div className="flex gap-1 items-center">
                                <MdList size={20} /> {nunmberOfLists}
                            </div>
                            <div className="flex gap-1 items-center">
                                <MdAttachment size={20} />{" "}
                                {nunmberOfAttachments}
                            </div>
                            <div className="flex gap-1 items-center">
                                <MdAlarm size={20} /> {nunmberOfDaysLeft} Days
                                Left
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
