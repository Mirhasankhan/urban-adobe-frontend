import Link from "next/link";
import imagse from '../../assets/property.avif'
import Image from "next/image";
import { LuBath } from "react-icons/lu";
import { IoIosBed } from "react-icons/io";
import { TListing } from "@/types/common";
import { FaRegSquare } from "react-icons/fa";

const Card = ({ listing }: { listing: TListing }) => {
    return (
        <Link href={`/listings/${listing._id}`} className="border relative rounded-lg overflow-hidden">
            <div
                style={{ height: "260px", width: "100%", position: "relative" }}
            >
                <Image
                    className="border hover:scale-110 transition-transform duration-600"
                    layout="fill"
                    src={listing?.image?.imageUrl || imagse}
                    alt=""
                />
            </div>
            <div className="p-2">
                <p className="font-medium text-xl">{listing.title}</p>
                <p className="text-sm">{listing.address}</p>
            
                <div className="flex justify-between items-center border-y py-4 my-4">
                    <div className="flex gap-1 items-center">
                        <FaRegSquare className="text-green-500"></FaRegSquare>
                        <p>{listing.size} sqf</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoIosBed className="text-green-500"></IoIosBed>
                        <p>{listing.bedroom}</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <LuBath className="text-green-500"></LuBath>
                        <p>{listing.bathroom}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center my-4">
                    <p className="bg-orange-500 text-white font-medium px-2 rounded-md">{listing.type}</p>
                    <p className="text-red-500 font-medium">${listing.price} {listing.for == "rent" ? "(monthly)" : ""}</p>
                </div>             
                <p className="absolute left-4 top-4 text-sm font-medium bg-white px-3 py-1 rounded-lg">For {listing.for}</p>              
            </div>
        </Link>
    );
};

export default Card;