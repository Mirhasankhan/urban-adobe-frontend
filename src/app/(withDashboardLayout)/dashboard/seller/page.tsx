"use client";
import PieChart from "@/components/dashboard/PieChart";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { JWTDecode } from "@/utils/jwtDecode";
import React from "react";

const SellerDashboard = () => {
  const user = JWTDecode();
  const email = user?.email;
  const { data: listings } = useListingsQuery(email);

  const forSell = listings?.filter(
    (listing: { for: string }) => listing.for !== "rent"
  );
  const forRent = listings?.filter(
    (listing: { for: string }) => listing.for == "rent"
  );

  return (
    <div>
      <h1 className="py-4 text-2xl font-medium pl-6">Manage Your Dashboard</h1>
      <div className="flex justify-between p-4">
        <div className=" py-2 px-6 rounded-md font-medium text-white bg-orange-400">
          <h1>Total Property</h1>
          <p className="text-center pt-2">{listings?.length} property</p>
        </div>
        <div className="bg-white p-2 rounded-md">Total Income</div>
        <div className="bg-purple-500 py-2 px-6 font-medium text-white rounded-md">
          <h1>Property For Rent</h1>
          <p className="text-center pt-2">{forRent?.length} property</p>
        </div>
        <div className="bg-cyan-400 text-white font-medium p-2 rounded-md">
          <h1>Property For Sell</h1>
          <p className="text-center pt-2"> {forSell?.length} property</p>
        </div>
      </div>
      <PieChart></PieChart>
    </div>
  );
};

export default SellerDashboard;
