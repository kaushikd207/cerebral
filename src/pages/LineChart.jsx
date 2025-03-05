import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the chart
  const chartData = {
    labels: ["January", "February", "March"], // X-Axis Labels (Months)
    datasets: [
      {
        label: "Web", // First data series (Web)
        data: [0, 4000, 8000], // Data points (in 1000s for easy readability)
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        borderWidth: 2,
        tension: 0.3, // Smoothness of the line curve
      },
      {
        label: "Offline", // Second data series (Offline)
        data: [0, 2000, 6000], // Data points for Offline
        borderColor: "rgba(153, 102, 255, 1)", // Line color for Offline
        backgroundColor: "rgba(153, 102, 255, 0.2)", // Fill color under the line
        borderWidth: 2,
        tension: 0.3, // Smoothness of the line curve
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Customers by Device", // Title for the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensure the Y-axis starts at 0
        ticks: {
          callback: function (value) {
            return value / 1000 + "k"; // Format Y-axis labels as '0k', '4k', etc.
          },
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Line Chart Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
