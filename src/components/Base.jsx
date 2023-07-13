"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs, Typography } from "@mui/material";
import {
    MdCalendarMonth,
    MdDashboard,
    MdPlaylistAddCheck,
    MdSort,
} from "react-icons/md";
import MenuChip from "./MenuChip";
import { FiMenu } from "react-icons/fi";
import { AiOutlineRise, AiOutlineSearch } from "react-icons/ai";
import Board from "./Board";

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}>
            <div>
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <div>{children}</div>
                    </Box>
                )}
            </div>
        </div>
    );
}

function Base(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="m-5 relative md:my-10 h-full border rounded-xl">
            {/* Head */}
            <div className="relative flex justify-between items-center border-b lg:px-10">
                <Tabs
                    // className="md:!h-20"
                    textColor="inherit"
                    value={value}
                    onChange={handleChange}
                    aria-label="Tabs"
                    variant="scrollable"
                    // scrollButtons="true"
                    allowScrollButtonsMobile={true}
                    selectionFollowsFocus>
                    <Tab
                        label={
                            <div className="tabitem">
                                <MdDashboard size={20} />
                                Boards
                            </div>
                        }
                        id="tab-0"
                        className={`${
                            value == 0 ? "text-[#3361ff]" : "text-[#233c6b]"
                        } tab`}
                    />
                    <Tab
                        label={
                            <div className="tabitem">
                                <MdPlaylistAddCheck size={25} />
                                List Tasks
                            </div>
                        }
                        id="tab-1"
                        className={`${
                            value == 1 ? "text-[#3361ff]" : "text-[#233c6b]"
                        } tab`}
                    />
                    <Tab
                        label={
                            <div className="tabitem">
                                <MdCalendarMonth size={20} />
                                Calendar
                            </div>
                        }
                        id="tab-2"
                        className={`${
                            value == 2 ? "text-[#3361ff]" : "text-[#233c6b]"
                        } tab`}
                    />
                    <Tab
                        label={
                            <div className="tabitem">
                                <MdSort size={20} />
                                Gantt
                            </div>
                        }
                        id="tab-3"
                        className={`${
                            value == 3 ? "text-[#3361ff]" : "text-[#233c6b]"
                        } tab`}
                    />
                    <Tab
                        label={
                            <div className="tabitem">
                                <FiMenu size={20} />
                                Timeline
                            </div>
                        }
                        id="tab-4"
                        className={`${
                            value == 4 ? "text-[#3361ff]" : "text-[#233c6b]"
                        } tab`}
                    />
                    <Tab
                        label={
                            <div className="tabitem">
                                <AiOutlineRise size={20} />
                                Activity
                            </div>
                        }
                        id="tab-5"
                        className={`${
                            value == 5 ? "text-[#3361ff]" : "text-[#233c6b]"
                        } tab`}
                    />
                </Tabs>

                {/* Search Tasks */}
                <div className="flex justify-center items-center">
                    <form
                        type="text"
                        className="hidden md:flex gap-2 px-5 py-3 mx-3 rounded-3xl shadow-sm hover:shadow-md  items-center bg-white h-[50px] text-sm font-medium">
                        <div>
                            <AiOutlineSearch className="text-xl" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Tasks"
                            className="outline-none w-full"
                        />
                    </form>
                </div>
            </div>

            {/* White gradient for right side of the mobile screen to show scrollable Dashboard  */}
            <div className="lg:hidden absolute right-0 w-5 h-full bg-gradient-to-l from-white/80 to-transparent z-30"></div>

            {/* Tab content */}
            <div className="md:p-5 overflow-auto min-h-fit relative font-semibold ">
                <TabPanel value={value} index={0}>
                    <div>
                        <Board />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    List Tasks
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Calendar
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Gantt
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Timeline
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Activity
                </TabPanel>
            </div>
        </div>
    );
}

export default Base;
