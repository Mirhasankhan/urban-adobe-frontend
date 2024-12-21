"use client";
import Card from "../shared/Card";
import Link from "next/link";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";
import LoadingCard from "../shared/LoadingCard";

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
          Explore Our Latest Properties
        </h1>
        <p className="text-gray-500 text-center">
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {listings?.slice(0, 3).map((listing: TListing) => (
            <Card key={listing._id} listing={listing}></Card>
          ))}
        </div>
        {!listings && (
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-4">
              <LoadingCard></LoadingCard>
              <LoadingCard></LoadingCard>
              <LoadingCard></LoadingCard>
            </div>
          </div>
        )}
        <Link className="flex justify-center" href="/listings">
          <button className="bg-[#06a788] mt-5 font-medium px-4 py-2 text-white rounded-md">
            View All Listings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeListings;
