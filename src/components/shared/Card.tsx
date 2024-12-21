import Link from "next/link";
import imagse from "../../assets/property.avif";
import Image from "next/image";
import { LuBath } from "react-icons/lu";
import { IoIosBed } from "react-icons/io";
import { TListing } from "@/types/common";
import { FaRegSquare } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Card = ({ listing }: { listing: TListing }) => {
  return (
    <Link
      href={`/listings/${listing._id}`}
      className="border relative rounded-lg overflow-hidden"
    >
      <div
        className="overflow-hidden"
        style={{ height: "260px", width: "100%", position: "relative" }}
      >
        <Image
          className="rounded-t-md hover:scale-110 transition-transform duration-1000 z-10"
          layout="fill"
          src={listing?.image?.imageUrl || imagse}
          alt=""
        />
      </div>
      <div className="p-2">
        <p className="font-medium text-xl py-2">
          {listing.title.length > 23
            ? listing.title.substring(0, 23) + "..."
            : listing.title}
        </p>

        <div className="flex items-center gap-1">
          <MdLocationPin className=""></MdLocationPin>
          <p className="text-sm">{listing.address}</p>
        </div>

        <div className="flex justify-between items-center border-y py-4 my-4">
          <div className="flex gap-1 items-center">
            <FaRegSquare className="text-[#06a788] text-xl"></FaRegSquare>
            <p>{listing.size} sqf</p>
          </div>
          <div className="flex gap-1 items-center">
            <IoIosBed className="text-[#06a788] text-xl"></IoIosBed>
            <p>{listing.bedroom}</p>
          </div>
          <div className="flex gap-1 items-center">
            <LuBath className="text-[#06a788] text-xl"></LuBath>
            <p>{listing.bathroom}</p>
          </div>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="bg-[#06a788] text-white font-medium px-2 rounded-md">
            {listing.type}
          </p>
          <p className="text-[#06a788] font-medium">
            ${listing.price} {listing.for == "rent" ? "(monthly)" : ""}
          </p>
        </div>

        <p className="absolute left-4 top-4  font-medium bg-[#06a788] text-white px-3 py-1 rounded-lg z-20">
          For {listing.for}
        </p>
      </div>
    </Link>
  );
};

export default Card;
