"use client";
import Card from "@/components/shared/Card";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Listings = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const address = searchParams.get("address");

  const [search, setSearch] = useState(address);
  const [sort, setSort] = useState(category);
  const { data: listings } = useListingsQuery({
    email: null,
    type: sort,
    search: search,
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <div className="pt-16 px-4 md:px-14">
      <div className="flex justify-end gap-6 mt-6">
        <select
          className="p-1 border-2 rounded-md"
          id="sort"
          onChange={handleSortChange}
        >
          <option value="">All</option>
          <option value="family">Family</option>
          <option value="bachelor">Bachelor</option>
          <option value="shop">Shop</option>
          <option value="office">Office</option>
        </select>
        <input
          defaultValue={address as string}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search..."
          className="border rounded-md p-2"
        />
      </div>
      <div className=" my-12">
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
