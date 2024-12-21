"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TListing } from "@/types/common";
import Details from "@/components/shared/listing/Details";
import Overview from "@/components/shared/listing/Overview";
import Proposal from "@/components/shared/listing/Proposal";
import Image from "next/image";

const SingleListing = ({ params }: { params: { listing: string } }) => {
  const [listings, setListings] = useState<TListing>({} as TListing);

  useEffect(() => {
    axios
      .get(
        `https://urban-adobe-backend.vercel.app/api/v1/listing/${params.listing}`
      )
      .then((response) => {
        setListings(response.data["0"]);
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
      });
  }, [params]);
  if (!listings.address) {
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
    <div className=" pt-8">
      <div className="px-4 md:px-12">
        <Details property={listings}></Details>
      </div>
      <div className="bg-gray-100 grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-4">
          <Overview property={listings}></Overview>
        </div>
        <div className="col-span-6 md:col-span-2">
          <Proposal property={listings}></Proposal>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
