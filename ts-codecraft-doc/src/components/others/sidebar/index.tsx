"use client";
import React from "react";
import { LuRocket } from "react-icons/lu"; // Importing an example icon from React Icons
import { LuFileText } from "react-icons/lu"; // Import additional icon for documentation
import Link from "next/link";

export const Sidebar = () => {
    // Sidebar groups and items with icons
    const sidebarItems = [
        {
            groupName: "Getting Started",
            items: [
                {
                    page: "Installation",
                    path: "/doc/installation",
                    icon: <LuFileText className="w-5 h-5 text-gray-600 dark:text-gray-200" />,
                }
            ],
        },
        {
            groupName: "String",
            items: [
                {
                    page: "String Utilities",
                    path: "/doc/string-utilities",
                    icon: <LuRocket className="w-5 h-5 text-gray-600 dark:text-gray-200" />,
                }
            ],
        },
        {
            groupName: "Number",
            items: [
                {
                    page: "Number Utilities",
                    path: "/doc/number-utilities",
                    icon: <LuRocket className="w-5 h-5 text-gray-600 dark:text-gray-200" />,
                }
            ],
        },
        {
            groupName: "Date",
            items: [
                {
                    page: "Date Utils",
                    path: "/doc/date-utils",
                    icon: <LuRocket className="w-5 h-5 text-gray-600 dark:text-gray-200" />,
                }
            ],
        },
    ];

    return (
        <aside className="flex flex-col w-64 sticky top-0 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <Link href="/">
                <img className="w-auto h-7" src="https://merakiui.com/images/logo.svg" alt="Logo" />
            </Link>

            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 mt-3">
                    {/* Analytics section */}
                    

                    {/* Sidebar groups */}
                    {sidebarItems.map((group) => (
                        <div key={group.groupName}>
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                                {group.groupName}
                            </label>
                            {group.items.map((item) => (
                                <Link
                                    key={item.page}
                                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                    href={item.path}
                                >
                                    {item.icon} {/* Dynamic icon rendering */}
                                    <span className="mx-2 text-sm font-medium">{item.page}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    );
};
