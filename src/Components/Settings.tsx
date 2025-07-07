import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "./Images/profile.png";

const Settings: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const sideBar = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sideBar.current) {
            if (isExpanded) {
                sideBar.current.style.width = "16rem";
            } else {
                sideBar.current.style.width = "5rem";
            }
        }
    }, [isExpanded]);

    return (
        <div
            className="h-[100vh] bg-slate-100 dark:bg-[#454849] float-left flex flex-col justify-between w-20 transition-all duration-300 ease-in-out shadow-lg border-r border-gray-300 dark:border-gray-600 z-20 relative"
            ref={sideBar}
        >
            {/* Top Section */}
            <div className="flex flex-col">
                {/* Menu Toggle */}
                <div className="p-4">
                    <button
                        className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-xl text-gray-700 dark:text-gray-200"
                        />
                    </button>
                </div>

                {/* Logo/Brand */}
                {isExpanded && (
                    <div className="px-4 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#6366f1] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">I</span>
                            </div>
                            <span className="font-bold text-xl text-gray-800 dark:text-white">Indigo</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-2 p-4">
                {/* Settings */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faGear}
                            className="text-gray-700 dark:text-gray-200"
                        />
                    </div>
                    {isExpanded && (
                        <span className="text-gray-800 dark:text-gray-200 font-medium">Settings</span>
                    )}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                    <img
                        src={logo}
                        className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-300 dark:ring-gray-500"
                        alt="Profile"
                    />
                    {isExpanded && (
                        <div className="flex-1">
                            <p className="text-gray-800 dark:text-gray-200 font-medium text-sm">Profile</p>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">View profile</p>
                        </div>
                    )}
                </div>

                {/* Logout */}
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200 cursor-pointer text-red-600 dark:text-red-400">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </div>
                    {isExpanded && (
                        <span className="font-medium">Logout</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;