"use client";
import { useAllBuysQuery } from "@/redux/features/buyProperty/buy.property.api";
import { JWTDecode } from "@/utils/jwtDecode";
import React from "react";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdOutlinePending } from "react-icons/md";

const BuyerDashboard = () => {
  const user = JWTDecode();
  const email = user?.email;
  const { data: buys } = useAllBuysQuery(email);
  const pending = buys?.filter(
    (buy: { status: string }) => buy.status == "pending"
  );
  const done = buys?.filter(
    (buy: { status: string }) => buy.status !== "pending"
  );

  return (
    <div className="md:flex gap-10 p-4">
      <div className="w-full  bg-white rounded-lg p-4 flex flex-col items-center">
        <MdOutlineSettingsApplications className="text-6xl" />
        <h1 className="text-xl font-semibold py-2">Applied</h1>
        <p>{buys?.length} total application.</p>
      </div>
      <div className="w-full  bg-white rounded-lg p-4 flex flex-col items-center">
        <MdOutlinePending className="text-6xl" />
        <h1 className="text-xl font-semibold py-2">Pending</h1>
        <p>{pending?.length} total pending application.</p>
      </div>
      <div className="w-full  bg-white rounded-lg p-4 flex flex-col items-center">
        <IoCheckmarkDoneSharp className="text-6xl" />
        <h1 className="text-xl font-semibold py-2">Done Deals</h1>
        <p>{done?.length} total done deals</p>
      </div>
    </div>
  );
};

export default BuyerDashboard;
