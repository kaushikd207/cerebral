import Sidebar from "./Sidebar";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginContext } from "@/context/LoginContext";
import DashboardCard from "./DashboardCard";
import BarChart from "./BarChart";
import ProductTable from "./ProductTable";
import RadialChart from "./RadialChart";
import LineChart from "./LineChart";
import CommunityFeedbackCard from "./CommunityFeedbackCard";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { login } = useLoginContext();
  const navigate = useNavigate();
  if (!login) {
    navigate("/login");
  }
  return (
    login && (
      <div className="flex ">
        <div className="fixed">
          {" "}
          <Sidebar />
        </div>
        {/* Sidebar (left) */}

        {/* Main Content (center) */}
        <div>
          <div className="flex-1 p-8  ml-[280px]">
            <DashboardCard />
            <BarChart />
            <ProductTable />
          </div>
        </div>

        {/* Right Section (3 rows grid for cards) */}
        <div className=" p-4 space-y-4 max-h-screen-md">
          <div className="grid grid-rows-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <RadialChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <LineChart />
            </div>
            <CommunityFeedbackCard />
          </div>
        </div>
      </div>
    )
  );
};

// Sidebar Menu Item Component
const SidebarMenuItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4 p-2 cursor-pointer hover:bg-gray-700 rounded">
      <FontAwesomeIcon icon={icon} className="h-6 w-6" />
      <span>{text}</span>
    </div>
  );
};

export default React.memo(Dashboard);
