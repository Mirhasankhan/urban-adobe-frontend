import { CiLocationOn } from "react-icons/ci";
import sellerImage from "../../assets/seller.jpg";
import Image from "next/image";

const AgencyDetails = (userData: {
  userData: { name: string; email: string };
}) => {
  const { name, email } = userData.userData;
  return (
    <div className="grid grid-cols-2 gap-6 bg-white p-4 rounded-md">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <Image alt="" height={200} width={300} src={sellerImage}></Image>
        </div>
        <div>
          <h1>{name}</h1>
          <div className="flex items-center gap-1 py-2">
            <CiLocationOn className="text-xl"></CiLocationOn>
            <h1>1611 Michigan Ave, Miami Beach</h1>
          </div>
          <h1>Phone: +99501455</h1>
          <h1>Email: {email}</h1>
          <h1>Licence: BD-123-456-0987</h1>
          <div className="flex gap-2 mt-3">
            <button className="bg-[#06a788] w-full px-4 py-2 rounded-md text-white">
              Send Email
            </button>
            <button className="text-[#06a788] hover:text-white hover:bg-[#06a788] border-[#06a788] border w-full bg-white px-4 py-2 rounded-md ">
              Call
            </button>
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  );
};

export default AgencyDetails;
