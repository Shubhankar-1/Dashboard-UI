"use client";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import CircleIconContainer from "./CircleIconContainer";
import TaskChip from "./TaskChip";
import TaskCard from "./TaskCard";
import avatar4 from "../assets/Avatar/Avatar4.jpg";
import image from "../assets/Images/Image.jpg";

const data = [
    {
        todo: [
            {
                id: "zdfzdfdzfzdawdeawer3q43q",
                image: "https://i.pravatar.cc/210",
                avatar: "https://i.pravatar.cc/15",
                spacetask: "Space Tasks 2",
                tasktitle: "Types of paper",
                nunmberOfLists: 4,
                nunmberOfAttachments: 2,
                nunmberOfDaysLeft: 6,
            },
            {
                id: "awsdfdsdea3432wer3xcxdfdzxfzq43q",
                avatar: "https://i.pravatar.cc/77",
                spacetask: "Space Tasks 2",
                tasktitle: "Make Money Online Through",
            },
            {
                id: "asdfwdea3432DZFCZDsdfdsfdsfgbxcbxcbwer3q43q",

                avatar: "https://i.pravatar.cc/76",
                spacetask: "Space Tasks 2",
                tasktitle: "Search Engine Optimization ...",
            },
            {
                id: "awdsdfdsea3432wZDCZesdffffffffr3q43q",

                avatar: "https://i.pravatar.cc/75",
                spacetask: "Space Tasks 2",
                tasktitle: "Characteristics Of A Successful",
            },
            {
                id: "adsfdswdea3432wZDCZdssdfsdfer3q43q",

                avatar: "https://i.pravatar.cc/90",
                spacetask: "Space Tasks 2",
                tasktitle: "Getting Free Publicity",
            },
            {
                id: "awsdfdsdea3432fghfgwZDCZer3q43q",
                avatar: "https://i.pravatar.cc/80",
                spacetask: "Space Tasks 2",
                tasktitle: "Importance Of The Custom ...",
            },
        ],

        inwork: [
            {
                id: "asdfsdfwdeasdfdsfgds3432wZDCZer3q43q",
                avatar: "https://i.pravatar.cc/100",
                spacetask: "Space Tasks 3",
                tasktitle: "Types Of Paper In Catalog",
            },
            {
                id: "awdsfdsfdea3sdfsd432wZDCZer3q43qsef",
                image: "https://i.pravatar.cc/500",
                avatar: "https://i.pravatar.cc/50",
                spacetask: "Space Tasks 2",
                tasktitle: "Global Resorts Network",
                nunmberOfLists: 4,
                nunmberOfAttachments: 2,
                nunmberOfDaysLeft: 6,
            },
            {
                id: "awdea3sdfsd432wZDCZer3q43qsefse",
                avatar: "https://i.pravatar.cc/60",
                spacetask: "Space Tasks 2",
                tasktitle: "Development Apps",
            },
            {
                id: "awdea3432wZDCZersdfsd3q43qesfesafaesfea",
                avatar: "https://i.pravatar.cc/70",
                spacetask: "Space Tasks 2",
                tasktitle: "Copper Canyon",
                nunmberOfLists: 4,
                nunmberOfAttachments: 2,
                nunmberOfDaysLeft: 1,
            },
        ],

        review: [
            {
                id: "awdea343dsfdsf2wZDCZer3q43qsefesfe",
                avatar: "https://i.pravatar.cc/65",
                spacetask: "Space Tasks 3",
                tasktitle: "Astronomy Or Astrology",
            },
            {
                id: "awdea3432wdsfdsfZDCZer3q43qfbcvbcv",
                avatar: "https://i.pravatar.cc/55",
                spacetask: "Space Tasks 3",
                tasktitle: "Astronomy Or Astrology",
            },
        ],

        done: [
            {
                id: "awdea3432wdsfsdfZDCZer3q43qcvbvcb",
                avatar: "https://i.pravatar.cc/45",
                spacetask: "Space Tasks 2",
                tasktitle: "Copper Canyon",
            },
        ],
    },
];

function Board() {
    return (
        <div className=" flex gap-5 justify-between  text-sm">
            {/* To Do */}
            <div>
                <TaskChip
                    title="TO DO"
                    numberOfTasks={data[0].todo.length}
                    ribboncolor="bg-purple-500"
                />
                <div>
                    {data[0].todo.map((items) => (
                        <TaskCard
                            key={items.id}
                            img={items.image}
                            avatar={items.avatar}
                            spacetask={items.spacetask}
                            tasktitle={items.tasktitle}
                            nunmberOfLists={items.nunmberOfLists}
                            nunmberOfAttachments={items.nunmberOfAttachments}
                            nunmberOfDaysLeft={items.nunmberOfDaysLeft}
                        />
                    ))}
                </div>
            </div>

            {/* In Work */}
            <div>
                <TaskChip
                    title="IN WORK"
                    numberOfTasks={data[0].inwork.length}
                    ribboncolor="bg-cyan-500"
                />
                <div>
                    {data[0].inwork.map((items) => (
                        <TaskCard
                            key={items.id}
                            img={items.image}
                            avatar={items.avatar}
                            spacetask={items.spacetask}
                            tasktitle={items.tasktitle}
                            nunmberOfLists={items.nunmberOfLists}
                            nunmberOfAttachments={items.nunmberOfAttachments}
                            nunmberOfDaysLeft={items.nunmberOfDaysLeft}
                        />
                    ))}
                </div>
            </div>

            {/* Review */}
            <div>
                <TaskChip
                    title="REVIEW"
                    numberOfTasks={data[0].review.length}
                    ribboncolor="bg-yellow-500"
                />
                <div>
                    {data[0].review.map((items) => (
                        <TaskCard
                            key={items.id}
                            img={items.image}
                            avatar={items.avatar}
                            spacetask={items.spacetask}
                            tasktitle={items.tasktitle}
                            nunmberOfLists={items.nunmberOfLists}
                            nunmberOfAttachments={items.nunmberOfAttachments}
                            nunmberOfDaysLeft={items.nunmberOfDaysLeft}
                        />
                    ))}
                </div>
            </div>

            {/* Done  */}
            <div>
                <TaskChip
                    title="DONE"
                    numberOfTasks={data[0].done.length}
                    ribboncolor="bg-green-500"
                />
                <div>
                    {data[0].done.map((items) => (
                        <TaskCard
                            key={items.id}
                            img={items.image}
                            avatar={items.avatar}
                            spacetask={items.spacetask}
                            tasktitle={items.tasktitle}
                            nunmberOfLists={items.nunmberOfLists}
                            nunmberOfAttachments={items.nunmberOfAttachments}
                            nunmberOfDaysLeft={items.nunmberOfDaysLeft}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Board;
