import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = () => {
  const [radialData, setRadialData] = useState({});

  useEffect(() => {
    const data = getRadialData();
    setRadialData(data);
  }, []);
  const getRadialData = async () => {
    const username = "trial";
    const password = "assignment123";
    const base64Credentials = btoa(`${username}:${password}`); // base64 encode the username:password

    const data = await axios
      .get("http://3.111.196.92:8020/api/v1/sample_assignment_api_3/", {
        headers: {
          Authorization: `Basic ${base64Credentials}`, // Pass the encoded credentials here
          "Content-Type": "application/json",
        },
      })
      .then((res) => setRadialData(res.data));
  };
  // Chart Data
  const { score, title, message } = radialData || "";
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [radialData?.score, 100 - score], // 78 completed, 22 remaining
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(200, 200, 200, 0.3)"], // Blue for completed, grey for remaining
        hoverBackgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(200, 200, 200, 0.5)",
        ],
        borderWidth: 1,
        borderColor: "white", // Optional: Adds a border between segments
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    cutout: "70%", // Creates a doughnut chart
    plugins: {
      tooltip: {
        enabled: true, // Show tooltip when hovering
      },
    },
  };

  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="w-64 h-64 bg-white p-4 rounded-full shadow-lg flex justify-center items-center">
        <Doughnut data={data} options={options} />
        <h1 className="font-bold absolute ">{score}</h1>
        <p className="absolute top-[177px] text-xs w-[4.5rem]">of 100 points</p>
      </div>
      <div className="flex flex-wrap flex-col">
        <h2 className="font-bold">{title}</h2>
        <p className="font-light">{message}</p>
      </div>
    </div>
  );
};

export default RadialChart;
