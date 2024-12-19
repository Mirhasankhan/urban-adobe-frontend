import { TListing } from "@/types/common";
import bed from "../../../assets/beds.png";
import car from "../../../assets/car.png";
import sqf from "../../../assets/sqf.png";
import Image from "next/image";
import { FaShower } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import gMap from "../../../assets/goMap.png";
import featrues from "../../../assets/fea.png";

const Overview = ({ property }: { property: TListing }) => {
  const { bathroom, bedroom, type, description, size } = property;

  return (
    <div className="p-4 md:pl-12">
      <div className=" border p-4 bg-white rounded-lg">
        <h1 className="text-xl pb-6">Overview</h1>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="uppercase ">{type}</h1>
                <p className="text-gray-500">Type</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Image src={bed} height={30} width={30} alt=""></Image>
                  <h1>{bedroom}</h1>
                </div>
                <p className="text-gray-500">Bedroom</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaShower className="text-xl"></FaShower>
                  <h1>{bathroom}</h1>
                </div>
                <p className="text-gray-500">Bathroom</p>
              </div>
            </div>
            <div className="flex pt-6 justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <Image src={car} height={40} width={40} alt=""></Image>
                  <h1>1</h1>
                </div>
                <p className="text-gray-500">Garage</p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Image src={sqf} height={20} width={20} alt=""></Image>
                  <h1>{size}</h1>
                </div>
                <p className="text-gray-500">Sq ft</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-xl"></FaCalendarAlt>
                  <h1>2023</h1>
                </div>
                <p className="text-gray-500">Year Built</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <Image src={gMap} height={50} width={300} alt=""></Image>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-4 rounded-md">
        <h1 className="text-xl pb-6">Descripton</h1>
        <h1>{description}</h1>
      </div>
      <Image
        className="rounded-lg pt-6"
        src={featrues}
        height={100}
        width={850}
        alt=""
      ></Image>
      <h1 className="font-semibold my-12 text-xl border-l-2 border-red-400 pl-3">
        Property Video:
      </h1>
      <div className="w-full">
        <video className="rounded-md" width="850" height="315" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Overview;
