import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faUsers,
  faTachometerAlt,
  faBullhorn,
  faStream,
  faPlug,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar initially open
  const [activeItem, setActiveItem] = useState("dashboard"); // Track active menu item

  // Toggle Sidebar open/close state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle Menu Item Click (update active item)
  const handleMenuClick = (item) => {
    setActiveItem(item); // Set the active item based on the clicked menu
  };

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white transition-all duration-300 ease-in-out p-4 h-screen`}
      >
        <div className="flex items-center justify-between mb-8">
          {/* Logo */}
          <span
            className={`text-2xl font-semibold transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Salesway
          </span>
          {/* Toggle Button */}
          {/* <button className="text-white p-2" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 ${isOpen ? "rotate-180" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button> */}
        </div>

        <div className="space-y-4">
          {/* Menu Items */}
          <div className="space-y-2">
            <MenuItem
              icon={<FontAwesomeIcon icon={faCog} className="h-6 w-6" />}
              text="Settings"
              item="settings"
              isOpen={isOpen}
              isActive={activeItem === "settings"}
              onClick={() => handleMenuClick("settings")}
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faUsers} className="h-6 w-6" />}
              text="Team"
              item="team"
              isOpen={isOpen}
              isActive={activeItem === "team"}
              onClick={() => handleMenuClick("team")}
            />
          </div>
          <h2>Menu</h2>
          <div className="space-y-2 mt-8">
            <MenuItem
              icon={
                <FontAwesomeIcon icon={faTachometerAlt} className="h-6 w-6" />
              }
              text="Dashboard"
              item="dashboard"
              isOpen={isOpen}
              isActive={activeItem === "dashboard"}
              onClick={() => handleMenuClick("dashboard")}
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faBullhorn} className="h-6 w-6" />}
              text="Campaigns"
              item="campaigns"
              isOpen={isOpen}
              isActive={activeItem === "campaigns"}
              onClick={() => handleMenuClick("campaigns")}
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faStream} className="h-6 w-6" />}
              text="Flows"
              item="flows"
              isOpen={isOpen}
              isActive={activeItem === "flows"}
              onClick={() => handleMenuClick("flows")}
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faPlug} className="h-6 w-6" />}
              text="Integrations"
              item="integrations"
              isOpen={isOpen}
              isActive={activeItem === "integrations"}
              onClick={() => handleMenuClick("integrations")}
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faUser} className="h-6 w-6" />}
              text="Customer"
              item="customer"
              isOpen={isOpen}
              isActive={activeItem === "customer"}
              onClick={() => handleMenuClick("customer")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const MenuItem = ({ icon, text, item, isOpen, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-4 cursor-pointer p-2 rounded-lg transition-all duration-300 
        ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-400 hover:bg-gray-700"
        }`}
    >
      <div className="text-white">{icon}</div>
      <span
        className={`transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default Sidebar;
