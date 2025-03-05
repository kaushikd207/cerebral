import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // States for dropdown selection (Time range)
  const [selectedTime, setSelectedTime] = useState("6 months");

  // Handle Dropdown Change
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Chart Data (This includes the months, Last Year, and This Year)
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Labels (Months)
    datasets: [
      {
        label: "Last Year", // Label for the first dataset
        data: [5000, 10000, 20000, 32000, 12000, 13000], // Data for Last Year
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "This Year", // Label for the second dataset
        data: [6000, 2000, 40000, 21000, 9200, 8700], // Data for This Year
        backgroundColor: "blue",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Sales Comparison (${selectedTime})`, // Dynamic chart title
      },
    },
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        {/* Left side: Heading */}
        <h2 className="text-2xl font-semibold">Comparison</h2>

        {/* Right side: Dropdown for time selection */}
        <select
          value={selectedTime}
          onChange={handleTimeChange}
          className="border px-4 py-2 rounded-md"
        >
          <option value="6 months">6 months</option>
          <option value="1 year">1 year</option>
          <option value="2 years">2 years</option>
        </select>
      </div>

      {/* Bar Chart */}
      <div className="w-full bg-white p-6 rounded-t-lg shadow-lg">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
