import Image from "next/image";
import bed from "../../../assets/beds.png";
import sqf from "../../../assets/sqf.png";
import car from "../../../assets/car.png";
import { TListing } from "@/types/common";
import { GiCheckMark } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import { CgCalendarDates } from "react-icons/cg";
import { LuMessagesSquare } from "react-icons/lu";

const Descriptions = ({ property }: { property: TListing }) => {
  const { description, bedroom, bathroom, size } = property;
  return (
    <div className="md:pr-24">
      <div className="flex justify-between items-center mb-12">
        <div className="md:flex gap-6 items-center">
          <h1 className="bg-red-400 text-white rounded-md px-4 py-2 font-medium">
            For {property.for}
          </h1>
          <div className="flex items-center gap-1">
            <CgCalendarDates className="text-red-600 text-xl"></CgCalendarDates>
            <h1 className="py-1">Built 2 Years Ago</h1>
          </div>
          <div className="flex items-center gap-1">
            <LuMessagesSquare className="text-red-600 text-xl"></LuMessagesSquare>
            <h1>2 buyer requested</h1>
          </div>
        </div>
        <div className="flex gap-5 text-2xl cursor-pointer">
          <FaHeart className="text-red-600"></FaHeart>
          <CiShare2></CiShare2>
          <FiPlusCircle></FiPlusCircle>
        </div>
      </div>
      <h1 className="font-semibold mb-4 text-xl border-l-2 border-red-400 pl-3">
        Description:
      </h1>
      <p>{description}</p>
      <div className="flex justify-between items-center my-12">
        <div className="flex gap-2 items-center">
          <Image src={bed.src} height={60} width={60} alt=""></Image>
          <div>
            <h1 className="text-red-600 font-medium">{bedroom}</h1>
            <p className="hidden md:block">Bedrooms</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={car.src} height={60} width={60} alt=""></Image>
          <div>
            <h1 className="text-red-600 font-medium">{bathroom}</h1>
            <p className="hidden md:block">Car Parking</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={sqf.src} height={50} width={50} alt=""></Image>
          <div>
            <h1 className="text-red-600 font-medium">{size}</h1>
            <p className="hidden md:block">Square Feet</p>
          </div>
        </div>
      </div>
      <h1 className="font-semibold hidden md:block  mb-4 text-xl border-l-2 border-red-400 pl-3">
        Properties Amenities:
      </h1>
      <div className="md:flex gap-16 hidden  ">
        <div>
          <div className="flex gap-1 items-center">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Air Conditioning</p>
          </div>
          <div className="flex gap-1 items-center py-8">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Laundry</p>
          </div>
          <div className="flex gap-1 items-center">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Window Covering</p>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Central Heating</p>
          </div>
          <div className="flex gap-1 items-center py-8">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Swimming Pool</p>
          </div>
          <div className="flex gap-1 items-center">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Outdoor Shower</p>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Microwave</p>
          </div>
          <div className="flex gap-1 items-center py-8">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Wifi</p>
          </div>
          <div className="flex gap-1 items-center">
            <GiCheckMark className="text-red-500 text-xl"></GiCheckMark>
            <p>Washer</p>
          </div>
        </div>
      </div>
      <h1 className="font-semibold my-12 text-xl border-l-2 border-red-400 pl-3">
        Property Video:
      </h1>
      <div className="w-full">
        <video className="rounded-md" width="760" height="315" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Descriptions;
