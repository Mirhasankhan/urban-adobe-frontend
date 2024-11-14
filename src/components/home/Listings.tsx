"use client";
import Card from "../shared/Card";
import Link from "next/link";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";

const HomeListings = () => {
  const { data: listings, isLoading } = useListingsQuery({
    email: null,
    type: "",
    search: "",
  });

  return (
    <div className="px-4 md:px-14">
      <div className="py-6 md:py-8">
        <h1 className="font-semibold text-center pb-3 text-xl md:text-3xl">
          Our Latest Properties
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {listings?.slice(0, 4).map((listing: TListing) => (
            <Card key={listing._id} listing={listing}></Card>
          ))}
        </div>
        {!listings && (
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-4">
              <h1 className="h-80 bg-gradient-to-b from-gray-500 to-gray-900 rounded-md"></h1>
              <h1 className="h-80 bg-gradient-to-b from-gray-500 to-gray-900 rounded-md"></h1>
              <h1 className="h-80 bg-gradient-to-b from-gray-500 to-gray-900 rounded-md"></h1>
              <h1 className="h-80 bg-gradient-to-b from-gray-500 to-gray-900 rounded-md"></h1>
            </div>
          </div>
        )}
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
