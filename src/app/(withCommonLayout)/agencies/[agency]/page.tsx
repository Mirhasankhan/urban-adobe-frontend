"use client";
import AgencyDetails from "@/components/agency/AgencyDetails";
import Properties from "@/components/agency/Properties";
import { useAllUsersQuery } from "@/redux/features/buyProperty/buy.property.api";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import Image from "next/image";
import React from "react";

const Agency = ({ params }: { params: { agency: string } }) => {
  const { data: user, isLoading } = useAllUsersQuery(params.agency);

  if (isLoading) {
    return (
      <div className="mx-auto">
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          width={500}
          height={500}
          alt="loading"
          className="w-96 mx-auto"
        />
      </div>
    );
  }
  return (
    <div className="bg-gray-100 px-4 md:px-12 py-6">
      <AgencyDetails userData={user[0]}></AgencyDetails>
      <div className="grid grid-cols-4 mt-4">
        <div className="col-span-4 md:col-span-3">
          <Properties email={params.agency}></Properties>
        </div>
      </div>
    </div>
  );
};

export default Agency;
