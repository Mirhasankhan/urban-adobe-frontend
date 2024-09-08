"use client";
import { TListing } from "@/types/common";
import { JWTDecode } from "@/utils/jwtDecode";
import Image from "next/image";
import pr from "../../../../../assets/list1.jpg";
import {
  useAllSalesQuery,
  useDeleteSaleMutation,
  useUpdateBuyStatusMutation,
} from "@/redux/features/buyProperty/buy.property.api";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Link from "next/link";
import { Button } from "antd";

const ManageSales = () => {
  const user = JWTDecode();
  const email = user?.email;
  const { data: buys } = useAllSalesQuery(email);
  const [deleteSale] = useDeleteSaleMutation();
  const [updateBuyStatus] = useUpdateBuyStatusMutation();
  const handleDecline = async (id: string) => {
    const res = await deleteSale(id);
    console.log(res);
    console.log(id);
  };

  const handleUpdateStatus = async (id: string) => {
    const res = await updateBuyStatus(id);
    console.log(res);
    console.log(id);
  };

  return (
    <div className="p-6 h-screen">
      <h1 className="font-medium text-xl">Manage Your Sales Proposals</h1>
      <p className="text-gray-500 pb-6">We are glad to see you again!</p>
      {buys?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-black text-white">
              <tr>
                <th>Property Details</th>
                <th>Buyer Details</th>
                <th>For</th>
                <th>Property Type</th>
                <th>Current Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {buys?.map((listing: TListing) => (
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
                    <h1>{listing.name}</h1>
                    <h1>{listing.email}</h1>
                  </td>
                  <td>{listing.for}</td>
                  <td>{listing.type}</td>
                  <td className="text-red-500">{listing.status}</td>
                  <td>
                    <button
                      disabled={listing.status !== "pending"}
                      onClick={() => handleUpdateStatus(listing._id)}
                      className="bg-green-500 px-2 text-white py-1 rounded-md mr-3 font-medium "
                    >
                      Accept
                    </button>
                    <button
                      disabled={listing.status !== "pending"}
                      onClick={() => handleDecline(listing._id)}
                      className="bg-red-500 px-2 text-white py-1 rounded-md mr-3 font-medium "
                    >
                      Decline
                    </button>
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
            <h1>You have no sales to manage</h1>
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

export default ManageSales;
