"use client";
import Card from "@/components/shared/Card";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// export const metadata = {
//   title: "Properties",
//   description: "buy sell and rent property website",
// };

const ListingsContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const address = searchParams.get("address");

  const [search, setSearch] = useState(address || "");
  const [sort, setSort] = useState(category || "");
  const { data: listings, isLoading } = useListingsQuery({
    email: null,
    type: sort,
    search: search,
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center mt-12">
        <AiOutlineLoading3Quarters
          className="animate-spin text-center text-[#06a788]"
          size={70}
        />
      </div>
    );
  }

  return (
    <div className=" px-4 md:px-14">
      <div className="md:flex justify-between items-center mt-6">
        <div>
          <h1 className="text-2xl md:text-3xl text-center font-medium">
            All Listings
          </h1>
        </div>
        <div className="flex items-center md:gap-6 gap-1">
          <select
            className="p-1 border-2 rounded-md"
            id="sort"
            onChange={handleSortChange}
            value={sort}
          >
            <option value="">All</option>
            <option value="family">Family</option>
            <option value="bachelor">Bachelor</option>
            <option value="shop">Shop</option>
            <option value="office">Office</option>
          </select>
          <input
            defaultValue={address || ""}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search..."
            className="border bg-gray-100 focus:outline-none rounded-md p-1 md:p-2"
          />
        </div>
      </div>
      <div className="my-12">
        {listings?.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 2xl:grid-cols-5">
            {listings?.map((listing: TListing) => (
              <Card key={listing._id} listing={listing}></Card>
            ))}
          </div>
        ) : (
          <p className="text-center font-medium pt-24 text-red-600">
            There is no listings available for this search.try something else
          </p>
        )}
      </div>
    </div>
  );
};

const Listings = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ListingsContent />
    </Suspense>
  );
};

export default Listings;
