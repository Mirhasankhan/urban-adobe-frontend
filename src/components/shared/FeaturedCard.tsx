import { TListing } from "@/types/common";
import Image from "next/image";
import imagse from "../../assets/property.avif";
import Link from "next/link";
import React from "react";

const FeaturedCard = ({ listing }: { listing: TListing }) => {
  return (
    <Link
      href={`/listings/${listing._id}`}
      className=" bg-white grid mb-3 rounded-lg grid-cols-3 gap-2 p-2 pb-3 items-center overflow-hidden"
    >
      <div
        className="overflow-hidden col-span-1"
        style={{ height: "110px", width: "100%", position: "relative" }}
      >
        <Image
          className="rounded-md hover:scale-110 transition-transform duration-1000 z-10"
          layout="fill"
          src={listing?.image?.imageUrl || imagse}
          alt=""
        />
      </div>
      <div className="p-2 col-span-2">
        <p className="font-medium text-xl">
          {listing.title.length > 23
            ? listing.title.substring(0, 23) + "..."
            : listing.title}
        </p>

        <div className="flex justify-between items-center my-1">
          <p>{listing.size} sqf</p>

          <p>{listing.bedroom} Bed</p>

          <p>{listing.bathroom} Bath</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#06a788] font-medium">
            ${listing.price} {listing.for == "rent" ? "(monthly)" : ""}
          </p>
          <p className="bg-[#06a788] text-white font-medium px-2 rounded-md">
            {listing.type}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
