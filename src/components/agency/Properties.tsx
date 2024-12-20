"use client";

import { TListing } from "@/types/common";
import { useState } from "react";
import Card from "../shared/Card";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import AddReview from "./AddReview";

const Properties = ({ email }: { email: string }) => {
  const { data: listings } = useListingsQuery({
    email: email,
    type: "",
    search: "",
  });
  const [current, setCurrent] = useState("lists");
  return (
    <div className="bg-white p-4">
      <div className="flex gap-8">
        <div className="flex gap-2 my-5">
          <button
            onClick={() => setCurrent("lists")}
            className={`flex px-24 py-4 text-xl rounded-md text-[#06a788] border border-[#06a788] ${
              current === "lists" ? "bg-[#06a788] text-white" : "bg-transparent"
            }`}
          >
            Listings
          </button>
          <button
            onClick={() => setCurrent("review")}
            className={`flex px-24 py-4 text-xl rounded-md text-[#06a788] border border-[#06a788] ${
              current !== "lists" ? "bg-[#06a788] text-white" : "bg-transparent"
            }`}
          >
            Reviews
          </button>
        </div>
      </div>
      {current == "lists" && (
        <div className="grid grid-cols-2 gap-5">
          {listings?.map((listing: TListing) => (
            <Card listing={listing} key={listing._id}></Card>
          ))}
        </div>
      )}
      {current !== "lists" && (
        <div>
          <h1 className="text-xl py-4 text-black">0 Reviews</h1>
          <AddReview></AddReview>
        </div>
      )}
    </div>
  );
};

export default Properties;
