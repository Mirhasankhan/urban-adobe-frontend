"use client";
import PieChart from "@/components/dashboard/PieChart";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { JWTDecode } from "@/utils/jwtDecode";
import React from "react";

const SellerDashboard = () => {
  const user = JWTDecode();
  const email = user?.email;
  const { data: listings } = useListingsQuery({
    email: email,
    type: "",
    search: "",
  });

  const forSell = listings?.filter(
    (listing: { for: string }) => listing.for !== "rent"
  );

  const forRent = listings?.filter(
    (listing: { for: string }) => listing.for == "rent"
  );

  return (
    <div>
      <h1 className="py-4 text-2xl font-medium pl-6">Manage Your Dashboard</h1>
      <div className="md:flex gap-8 p-4">
        <div className=" py-2 px-6 text-center w-full rounded-md font-medium text-white bg-orange-400">
          <h1 className="font-medium text-xl">Total Property</h1>
          <p className=" pt-2">{listings?.length} property</p>
        </div>

        <div className="bg-purple-500 text-center my-2 md:my-0 w-full py-2 px-6 font-medium text-white rounded-md">
          <h1 className="font-medium text-xl">Property For Rent</h1>
          <p className="pt-2">{forRent?.length} property</p>
        </div>
        <div className="bg-cyan-400 text-white text-center w-full font-medium p-2 rounded-md">
          <h1 className="font-medium text-xl">Property For Sell</h1>
          <p className=" pt-2"> {forSell?.length} property</p>
        </div>
      </div>
      <PieChart></PieChart>
    </div>
  );
};

export default SellerDashboard;
