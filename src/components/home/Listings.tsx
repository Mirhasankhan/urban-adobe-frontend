"use client";
import Card from "../shared/Card";
import Link from "next/link";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";

const HomeListings = () => {
  const { data: listings } = useListingsQuery("");
  return (
    <div className="px-4 md:px-14">
      <div className="text-center py-12">
        <h1 className="font-medium pb-3 text-xl">Featured Properties</h1>
        <p className="text-gray-500">
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {listings?.slice(0, 3).map((listing: TListing) => (
            <Card key={listing._id} listing={listing}></Card>
          ))}
        </div>
        <Link className="flex justify-center" href="/listings">
          <button className="bg-orange-400 mt-5 font-medium p-2 text-white rounded-md">
            View All Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeListings;
