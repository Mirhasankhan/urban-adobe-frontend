"use client";
import Card from "@/components/shared/Card";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";
import { useState } from "react";

const Listings = () => {
  const [sort, setSort] = useState("");
  const { data: listings } = useListingsQuery({
    email: null,
    type: sort,
  });
  const { data } = useListingsQuery({ type: "" });

  console.log(data, sort);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <div className="pt-16">
      <div>
        <select
          className="p-1 border-2 rounded-md"
          id="sort"
          onChange={handleSortChange}
        >
          <option value="family">Family</option>
          <option value="bachelor">Bachelor</option>
          <option value="shop">Shop</option>
          <option value="office">Office</option>
        </select>
      </div>
      <div className="px-4 md:px-14 my-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {listings?.map((listing: TListing) => (
            <Card key={listing._id} listing={listing}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
