import { TListing } from "@/types/common";
import profile from "../../../assets/seller.jpg";
import Image from "next/image";
import ProposalForm from "./ProposalForm";

const Proposal = ({ property }: { property: TListing }) => {
  const { sellerName } = property;

  return (
    <div className="bg-white rounded-md mt-4 px-8 py-4 mr-12">
      <div className="flex items-center pb-6 gap-4">
        <Image
          className="rounded-lg"
          src={profile}
          height={50}
          width={50}
          alt=""
        ></Image>
        <h1>{sellerName}</h1>
      </div>
      <ProposalForm property={property}></ProposalForm>
      <div>
        <h1 className="text-center py-6">------OR-----</h1>
        <div className="flex gap-2">
          <button className="bg-[#06a788] w-full px-4 py-2 rounded-md text-white">
            Send Message
          </button>
          <button className="text-[#06a788] hover:text-white hover:bg-[#06a788] border-[#06a788] border w-full bg-white px-4 py-2 rounded-md ">
            Call
          </button>
        </div>
        <button className="text-[#06a788] hover:text-white hover:bg-[#06a788] border-[#06a788] mt-3 border w-full bg-white px-4 py-2 rounded-md ">
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Proposal;
