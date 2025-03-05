import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function DashboardCard() {
  const [data, setData] = useState({});

  useEffect(() => {
    const data = getCardData();
    setData(data);
  }, []);
  const getCardData = async () => {
    const username = "trial";
    const password = "assignment123";
    const base64Credentials = btoa(`${username}:${password}`); // base64 encode the username:password

    const data = await axios
      .get("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/", {
        headers: {
          Authorization: `Basic ${base64Credentials}`, // Pass the encoded credentials here
          "Content-Type": "application/json",
        },
      })
      .then((res) => setData(res.data));
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-3xl ml-[22px]">Dashboard</h1>
        <div className="flex">
          <p className="mr-2 min-w-24">Compare to</p>
          <Select>
            <SelectTrigger className="min-w-3">
              <SelectValue placeholder="Last" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Last year">Last year</SelectItem>
              <SelectItem value="Six month">Six month</SelectItem>
              <SelectItem value="One month">One month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* card container */}
      <div
        className="flex
      mx-4 justify-around"
      >
        <div className="border-s-white border h-20 rounded-md w-[100%] mr-3">
          <p
            className="text-gray-400 font-bold
          ml-6 mt-2"
          >
            Purchases
          </p>
          <h2 className="font-bold ml-6">{data?.purchases}</h2>
        </div>
        <div className="border-s-white border h-20  rounded-md w-[100%] mr-3">
          <p
            className="text-gray-400 font-bold
          ml-6 mt-2"
          >
            Revenue
          </p>
          <h2 className="font-bold ml-6">${data?.revenue}</h2>
        </div>
        <div className="border-s-white border h-20  rounded-md w-[100%]">
          <p
            className="text-gray-400 font-bold
          ml-6 mt-2"
          >
            Refunds
          </p>
          <h2 className="font-bold ml-6">${data?.refunds}</h2>
        </div>
      </div>
    </>
  );
}

export default React.memo(DashboardCard);
