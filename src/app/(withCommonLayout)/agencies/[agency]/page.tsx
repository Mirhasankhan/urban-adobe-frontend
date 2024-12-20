"use client";
import AgencyDetails from "@/components/agency/AgencyDetails";
import Properties from "@/components/agency/Properties";
import { useAllUsersQuery } from "@/redux/features/buyProperty/buy.property.api";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import React from "react";

const Agency = ({ params }: { params: { agency: string } }) => {
  const { data: user, isLoading } = useAllUsersQuery(params.agency);

  if (isLoading) {
    return "loadingsldkfjdslfkjlsdf";
  }
  return (
    <div className="bg-gray-100 px-4 md:px-12 py-6">
      <AgencyDetails userData={user[0]}></AgencyDetails>
      <div className="grid grid-cols-4 mt-4">
        <div className="col-span-3">
          <Properties email={params.agency}></Properties>
        </div>
      </div>
    </div>
  );
};

export default Agency;
