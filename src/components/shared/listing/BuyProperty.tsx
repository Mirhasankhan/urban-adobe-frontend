"use client";
import Image from "next/image";
import profile from "../../../assets/pr.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Link from "next/link";
import {
  useAllBuysQuery,
  useBuyPropertyMutation,
} from "@/redux/features/buyProperty/buy.property.api";
import { toast } from "sonner";
import { TListing } from "@/types/common";
import { JWTDecode } from "@/utils/jwtDecode";

const BuyProperty = ({ property }: { property: TListing }) => {
  const [makeBuyProposal] = useBuyPropertyMutation();
  const { data: buys } = useAllBuysQuery("");
  const isBrought = buys?.find(
    (buy: { refId: string }) => buy.refId == property._id
  );
  const user = JWTDecode();
  const { sellerName, sellerEmail, price } = property;
  console.log(property);
  const handleMakeBuyProposal = async (data: TListing) => {
    const { _id, ...rest } = data;
    try {
      const propertyData = {
        ...rest,
        email: user?.email,
        name: user?.name,
        status: "pending",
        refId: data._id,
      };
      const res = await makeBuyProposal(propertyData);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="pb-2 font-medium text-xl">Property Owner</h1>
      <div className="border flex flex-col items-center py-8 rounded-md">
        <Image src={profile.src} height={100} width={100} alt=""></Image>
        <p className="font-medium py-2 text-xl">{sellerName}</p>
        <p>{sellerEmail}</p>
        <p className="text-sm">Real State Broker</p>
        <div className="flex gap-5 text-2xl mt-4">
          <FaFacebookF className="border p-1 rounded-md  hover:bg-red-500 hover:text-white cursor-pointer"></FaFacebookF>
          <FaXTwitter className="border p-1 rounded-md  hover:bg-red-500 hover:text-white cursor-pointer"></FaXTwitter>
          <FaInstagramSquare className="border p-1 rounded-md  hover:bg-red-500 hover:text-white cursor-pointer"></FaInstagramSquare>
          <FaPinterestP className="border p-1 rounded-md  hover:bg-red-500 hover:text-white cursor-pointer"></FaPinterestP>
        </div>
      </div>
      <div className="border p-2 rounded-md mt-6 bg-gray-50">
        <h1 className="font-medium pb-3 text-xl text-red-500">Book Property</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">${price}</p>
          <p className="bg-red-500 text-white p-1 rounded-md text-sm font-medium">
            For {property.for}
          </p>
        </div>
        <div className="flex justify-between items-center py-2">
          <p className="text-gray-500">Days On UrabanAdobe</p>
          <p>65 days</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Price per sqf</p>
          <p>$110</p>
        </div>
        {user?.role == "buyer" && (
          <button
            disabled={isBrought !== undefined}
            onClick={() => handleMakeBuyProposal(property)}
            className="bg-green-600 py-2 rounded-md text-white font-medium w-full mt-4 hover:bg-green-700"
          >
            {isBrought == undefined
              ? "Make Buy Proposal"
              : "Alreadry in process"}
          </button>
        )}
      </div>
      <div className="flex flex-col items-center mt-6">
        <h1 className="font-medium">Have a question? Get in touch!</h1>
        <Link href="/contactUs">
          <button className="text-green-600 py-2 px-6 rounded-md hover:text-white font-medium mt-4 hover:bg-green-600 hover:text-white border-green-600 border">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuyProperty;
