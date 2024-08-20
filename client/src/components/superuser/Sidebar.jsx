'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LuHome,
  LuMail,
  LuFolderClosed,
  LuStickyNote,
  LuBell,
  LuChevronRight,
  LuChevronLeft,
} from "react-icons/lu";
import clsx from "clsx";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { id: "dashboard", title: "Dashboard", icon: LuHome, path: "/superuser/home" },
  { id: "vendor", title: "Vendors", icon: LuMail, path: "/superuser/vendor" },
  { id: "user", title: "Users", icon: LuFolderClosed, path: "/superuser/user" },
  { id: "admin", title: "Admins", icon: LuStickyNote, path: "/superuser/admin" },
  { id: "grievance", title: "Grievances", icon: LuBell, path: "/superuser/grievance" },
];

const SidebarItem = ({ item, activeTab, setActiveTab, isSidebarCollapsed }) => {
  const IconComponent = item.icon;

  return (
    <Link to={item.path} className="w-full">
      <motion.div
        layout
        className={clsx(
          "sidebar-item flex items-center gap-2 p-2 cursor-pointer font-medium text-gray-800 hover:bg-white rounded-md transition-all duration-300 relative",
          {
            "sidebar-item__active bg-white shadow-md": activeTab === item.id,
          }
        )}
        onFocus={() => setActiveTab(item.id)}
        onMouseOver={() => setActiveTab(item.id)}
        onMouseLeave={() => setActiveTab("")}
      >
        {activeTab === item.id && (
          <motion.div
            layoutId="sidebar-item-indicator"
            className="sidebar-item__active-bg absolute inset-0 rounded-md bg-white"
          />
        )}
        <span className="relative z-10">
          <IconComponent />
        </span>
        <motion.span
          className="relative z-10"
          animate={{
            clipPath: isSidebarCollapsed
              ? "inset(0% 100% 0% 0%)"
              : "inset(0% 0% 0% 0%)",
            opacity: isSidebarCollapsed ? 0 : 1,
          }}
        >
          {item.title}
        </motion.span>
      </motion.div>
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(SIDEBAR_ITEMS[0].id);

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col p-4 relative"
      animate={{ width: isCollapsed ? 80 : 280 }}
      layout
    >
      <button
        className="absolute -right-3 top-24 w-6 h-6 flex justify-center items-center rounded-full bg-gray-100 border border-gray-400 cursor-pointer z-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <LuChevronRight /> : <LuChevronLeft />}
      </button>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarCollapsed={isCollapsed}
        />
      ))}
    </motion.div>
  );
};

export default Sidebar;
