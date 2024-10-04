"use client";
import React from "react";
import { LuRocket, LuFileText, LuCode, LuCalendar } from "react-icons/lu"; // Importing icons
import Link from "next/link";
import { GoNumber } from "react-icons/go";

export const Sidebar = () => {
    // Sidebar groups and items with icons
    const sidebarItems = [
        {
            groupName: "Getting Started",
            items: [
                {
                    page: "Installation",
                    path: "/doc/installation",
                    icon: <LuFileText className="w-5 h-5" />, // Icon for Installation
                },
            ],
        },
        {
            groupName: "String",
            items: [
                {
                    page: "String Utilities",
                    path: "/doc/string-utilities",
                    icon: <LuCode className="w-5 h-5" />, // Icon representing String Utilities
                },
            ],
        },
        {
            groupName: "Number",
            items: [
                {
                    page: "Number Utilities",
                    path: "/doc/number-utilities",
                    icon: <GoNumber className="w-5 h-5" />, // Icon representing Number Utilities
                },
            ],
        },
        {
            groupName: "Date",
            items: [
                {
                    page: "Date Utils",
                    path: "/doc/date-utils",
                    icon: <LuCalendar className="w-5 h-5" />, // Icon representing Date Utilities
                },
            ],
        },
    ];

    return (
        <aside className="flex flex-col w-64 sticky top-0 h-screen px-6 py-8 bg-white border-r border-gray-200 shadow-lg dark:bg-gray-900 dark:border-gray-700">
            <Link href="/">
                <h1 className="text-2xl font-bold text-primary">
                    <LuRocket size={15} /> Ts-CodeCraft
                </h1>
            </Link>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-4 mt-3">
                    {/* Sidebar groups */}
                    {sidebarItems.map((group) => (
                        <div key={group.groupName} className="group">
                            <label className="px-3 text-xs font-semibold text-gray-600 uppercase dark:text-gray-400">
                                {group.groupName}
                            </label>
                            {group.items.map((item) => (
                                <Link
                                    key={item.page}
                                    className="flex items-center px-3 py-2 rounded-lg transition-colors duration-200 text-gray-800 dark:text-gray-200 group-hover:bg-[#00bd6d] dark:group-hover:bg-[#00bd6d]/80 group-hover:text-white"
                                    href={item.path}
                                >
                                    {item.icon} {/* Dynamic icon rendering */}
                                    <span className="mx-2 text-sm font-medium">
                                        {item.page}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
};
