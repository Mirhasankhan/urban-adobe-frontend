"use client";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";
import { JWTDecode } from "@/utils/jwtDecode";
import moment from "moment";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import pr from "../../../../../assets/list1.jpg";
import { useAllBuysQuery } from "@/redux/features/buyProperty/buy.property.api";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Link from "next/link";
import { Button } from "antd";

const ManageProperty = () => {
  const user = JWTDecode();
  const email = user?.email;
  const { data: listings } = useListingsQuery({
    email: email,
    type: "",
    search: "",
  });
  const { data: buys } = useAllBuysQuery("");
  return (
    <div className="p-2 md:p-6 min-h-screen">
      <h1 className="font-medium text-xl">Manage Your Properties</h1>
      <p className="text-gray-500 pb-6">We are glad to see you again!</p>
      {listings?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-black text-white">
              <tr>
                <th>Property</th>
                <th>Publish Date</th>
                <th>Property Type</th>
                <th>Status</th>
                <th>For</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings?.map((listing: TListing) => (
                <tr key={listing._id} className="bg-white">
                  <td>
                    <div className="flex gap-1 items-center">
                      <Image
                        className="rounded-lg"
                        src={listing?.image?.imageUrl || pr}
                        height={60}
                        width={60}
                        alt=""
                      ></Image>
                      <div>
                        <h1 className="font-semibold">{listing.title}</h1>
                        <h1>{listing.address}</h1>
                        <h1>${listing.price}</h1>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1>{moment(listing.year).format("MMMM Do YYYY")}</h1>
                  </td>
                  <td className="text-green-500">
                    <h1>{listing.type}</h1>
                  </td>
                  <td className="text-red-500">
                    {buys?.some(
                      (buy: { refId: string }) => buy.refId == listing._id
                    )
                      ? "pending"
                      : "unsold"}
                  </td>
                  <td>{listing.for}</td>
                  <td>
                    <HiDotsVertical className="hover:text-blue-500 cursor-pointer"></HiDotsVertical>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white p-4 mt-4 border-t-4 border-blue-600 md:flex justify-between">
          <div className="flex items-center gap-2">
            <MdCheckBoxOutlineBlank className="text-blue-300 text-xl"></MdCheckBoxOutlineBlank>
            <h1>You haven&apos;t listed any properties yet</h1>
          </div>
          <Link href={"create-listing"}>
            <Button className="bg-green-400 text-white font-medium mt-2">
              Create Listing
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ManageProperty;
