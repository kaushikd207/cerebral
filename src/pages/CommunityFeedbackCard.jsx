import React, { useState, useEffect } from "react";
import axios from "axios";
const CommunityFeedbackCard = () => {
  const [feedData, setFeedData] = useState({});
  useEffect(() => {
    const data = getFeedData();
    setFeedData(data);
  }, []);
  const getFeedData = async () => {
    const username = "trial";
    const password = "assignment123";
    const base64Credentials = btoa(`${username}:${password}`); // base64 encode the username:password

    const data = await axios
      .get("http://3.111.196.92:8020/api/v1/sample_assignment_api_5/", {
        headers: {
          Authorization: `Basic ${base64Credentials}`, // Pass the encoded credentials here
          "Content-Type": "application/json",
        },
      })
      .then((res) => setFeedData(res.data));
  };

  const total = feedData.negative + feedData.neutral + feedData.positive;

  // Calculate the percentage for each feedback category
  const negativePercentage = (feedData.negative / total) * 100;
  const neutralPercentage = (feedData.neutral / total) * 100;
  const positivePercentage = (feedData.positive / total) * 100;

  return (
    <div className=" mx-auto p-6 text-gray-600 bg-white rounded-lg shadow-lg w-[100%] max-h-[244px]">
      {/* Card Header */}
      <div className="text-sm font-semibold mb-4">Community Feedback</div>

      {/* Progress Bar with Three Sections */}
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-lg font-bold inline-block py-1 px-2  rounded-full text-gray-600">
              {feedData?.positive >= 50 ? "Mostly positive" : "Mostly negative"}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex h-2 rounded-full overflow-hidden mb-4">
          <div
            className="bg-red-600 h-full"
            style={{ width: `${negativePercentage}%` }}
          ></div>
          <div
            className="bg-yellow-600 h-full"
            style={{ width: `${neutralPercentage}%` }}
          ></div>
          <div
            className="bg-green-600 h-full"
            style={{ width: `${positivePercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Values below the Progress Bar */}
      <div className="flex justify-between text-sm">
        <span>Negative: {feedData?.negative}</span>
        <span>Neutral: {feedData?.neutral}</span>
        <span>Positive: {feedData?.positive}</span>
      </div>
    </div>
  );
};

export default CommunityFeedbackCard;
