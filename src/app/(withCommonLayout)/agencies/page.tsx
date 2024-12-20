"use client";
import AgencyCard from "@/components/shared/AgencyCard";
import FeaturedCard from "@/components/shared/FeaturedCard";
import { useAllUsersQuery } from "@/redux/features/buyProperty/buy.property.api";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { TListing } from "@/types/common";
import Image from "next/image";

const Agencies = () => {
  const { data: users, isLoading } = useAllUsersQuery("");
  const { data: listings } = useListingsQuery({
    email: null,
    type: "",
    search: "",
  });
  const sellers = users?.filter(
    (user: { role: string }) => user.role == "seller"
  );

  if (isLoading) {
    return (
      <div className="mx-auto">
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          width={500}
          height={500}
          alt="loading"
          className="w-96 mx-auto"
        />
      </div>
    );
  }
  return (
    <div className="px-4 bg-gray-100 md:px-12 pt-6">
      <h1 className="pb-4 text-2xl font-medium">All Agencies</h1>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-4 gap-6">
          {sellers?.map((seller: TListing) => (
            <AgencyCard key={seller._id} agency={seller}></AgencyCard>
          ))}
        </div>
        <div className="col-span-2  p-2 rounded-lg ">
          <h1 className=" text-xl font-semibold pb-4">Featured Properties</h1>
          <div>
            {listings?.slice(5, 9).map((listing: TListing) => (
              <FeaturedCard key={listing._id} listing={listing}></FeaturedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agencies;
