"use client";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import React from "react";

const ListingsLoading = () => {
  const { data: listings } = useListingsQuery({
    email: null,
    type: "",
    search: "",
  });
  console.log(listings);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {listings?.map(() => {
        <div className="w-full h-64 bg-red-300 ">hello this is red box</div>;
      })}
    </div>
  );
};

export default ListingsLoading;
