import Image from "next/image";
import agencyImg from "../../assets/seller.jpg";
import { TListing } from "@/types/common";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaGoogle, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const AgencyCard = ({ agency }: { agency: TListing }) => {
  const { email, name } = agency;

  return (
    <div className="bg-white grid grid-cols-3 mb-3 p-6 rounded-lg">
      <div className="col-span-1">
        <Image
          className="rounded-t-md"
          src={agencyImg}
          height={400}
          width={200}
          alt=""
        ></Image>
      </div>
      <div className="col-span-2">
        <h1 className="text-xl font-semibold">{name}</h1>
        <div className="flex items-center gap-1 py-2">
          <CiLocationOn className="text-xl"></CiLocationOn>
          <h1> 1611 Michigan Ave, Miami Beach, FL 33139</h1>
        </div>
        <div className="flex justify-between border-b py-1">
          <h1 className="font-semibold">Office</h1>
          <p>+8804562475</p>
        </div>
        <div className="flex justify-between border-b py-1">
          <h1 className="font-semibold">Phone</h1>
          <p>+0444562475</p>
        </div>
        <div className="flex justify-between border-b py-1">
          <h1 className="font-semibold">Email</h1>
          <p>{email}</p>
        </div>
        <div className="grid grid-cols-2 gap-5 pt-4">
          <div className="flex cursor-pointer items-center gap-4 text-xl">
            <FaFacebookF></FaFacebookF>
            <FaXTwitter></FaXTwitter>
            <FaGoogle></FaGoogle>
            <FaLinkedin></FaLinkedin>
            <FaYoutube></FaYoutube>
          </div>
          <Link href={`/agencies/${email}`}>
            <button className="text-[#06a788] hover:text-white hover:bg-[#06a788] border-[#06a788] border w-full bg-white px-4 py-2 rounded-md ">
              View Properties
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgencyCard;
