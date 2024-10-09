"use client";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import React, { useEffect, useState } from "react";
import imagse from "../../../../assets/property.avif";
import ImageSlide from "@/components/shared/ImageSlide";
import Descriptions from "@/components/shared/listing/Descriptions";
import BuyProperty from "@/components/shared/listing/BuyProperty";
import { TListing } from "@/types/common";

const SingleListing = ({ params }: { params: { listing: string } }) => {
  const [listings, setListings] = useState<TListing>({} as TListing);
  console.log(listings);

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

  return (
    <div className="pt-16">
      <div
        className="h-[540px] bg-cover bg-center grid grid-cols-1 md:grid-cols-2 items-center md:gap-24"
        style={{
          backgroundImage: `url(${listings?.image?.imageUrl || imagse.src})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-12 text-white md:ml-12 mx-2 rounded-lg">
          <div className="flex justify-between items-center gap-24">
            <h1 className="font-medium text-xl">{listings.title}</h1>
            <h1 className="text-red-500 text-xl font-medium">
              ${listings.price}
            </h1>
          </div>
          <div className="flex items-center pt-6">
            <MdLocationPin className="text-red-400 text-xl"></MdLocationPin>
            <p>{listings.address}</p>
          </div>
        </div>
        <div className="px-6">
          <ImageSlide></ImageSlide>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 md:px-12 my-12">
        <div className="col-span-4 md:col-span-3">
          <Descriptions property={listings}></Descriptions>
        </div>
        <div className="col-span-4 md:col-span-1">
          <BuyProperty property={listings}></BuyProperty>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
