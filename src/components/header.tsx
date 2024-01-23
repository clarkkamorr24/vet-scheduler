/** @format */
"use client";

import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { GoBell } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { MdLogout } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { useFormState } from "./form-context";


// import dayGridPlugi

type Event = {
    title: string;
    // other properties of the event object
}

export default function Header({ }) {
    const { setSearchText } = useFormState();

    return (
        <header className="top-0 z-9999 flex w-full bg-white dark:bg-boxdark dark:drop-shadow-none border-b border-gray py-4">
            <div className="flex items-center justify-between px-4 py-4 md:px-6 gap-6 w-full">
                <div className="hidden sm:block w-full">
                    <form action="" method="POST">
                        <div className="relative">
                            <div className="relative">
                                <div className="absolute inset-y-0 end-5 items-center flex ps-3.5 pointer-events-none">
                                    <CiSearch className="text-2xl" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-light-yellow pr-4 font-medium focus:outline-none rounded-lg p-2.5"
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>

                        </div>
                    </form>
                </div>

                <div className="flex">
                    <ul className="grid grid-cols-5 md:grid-cols-6 items-center gap-2 ">
                        <div>
                            <Image src={`/images/user/user-14.png`} alt="User" width={50} height={50} />
                        </div>
                        <div className="col-span-1 md:col-span-2 flex items-center gap-1 cursor-pointer">Jane Dee <FiChevronDown /></div>
                        <div className="rounded-full bg-light-yellow p-2 justify-self-center cursor-pointer hover:bg-medium-orange hover:text-white">
                            <GoBell />
                        </div>
                        <div className="rounded-full bg-light-yellow p-2 justify-self-center cursor-pointer hover:bg-medium-orange hover:text-white"><SlSettings /></div>
                        <div className="rounded-full bg-light-yellow p-2 justify-self-center cursor-pointer hover:bg-medium-orange hover:text-white"><MdLogout /></div>
                    </ul>
                </div>
            </div>
        </header>
    )
}
