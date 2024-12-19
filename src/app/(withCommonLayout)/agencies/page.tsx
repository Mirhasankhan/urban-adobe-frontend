"use client";
import AgencyCard from "@/components/shared/AgencyCard";
import { useAllUsersQuery } from "@/redux/features/buyProperty/buy.property.api";
import { TListing } from "@/types/common";

const Agencies = () => {
  const { data: users } = useAllUsersQuery("");
  const sellers = users?.filter(
    (user: { role: string }) => user.role == "seller"
  );
  console.log(sellers);
  return (
    <div className="px-4 bg-gray-100 md:px-12 pt-6">
      <h1 className="pb-4 text-2xl font-medium">All Agencies</h1>
      <div className="grid grid-cols-6">
        <div className="col-span-4 gap-6">
          {sellers?.map((seller: TListing) => (
            <AgencyCard key={seller._id} agency={seller}></AgencyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agencies;
