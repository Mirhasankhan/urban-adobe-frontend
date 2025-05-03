import { CiLocationOn } from "react-icons/ci";
import sellerImage from "../../assets/seller.jpg";
import Image from "next/image";
import SendEmailButton from "../shared/SendEmail";

const AgencyDetails = (userData: {
  userData: { name: string; email: string; phone: string; address: string };
}) => {
  const { name, email, phone, address } = userData.userData;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-4 rounded-md">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <Image alt="" height={200} width={300} src={sellerImage}></Image>
        </div>
        <div>
          <h1 className="font-semibold">{name}</h1>
          <div className="flex items-center gap-1 py-2">
            <CiLocationOn className="text-xl"></CiLocationOn>
            <h1>
              {address ? address : "1611 Michigan Ave, Miami Beach, FL 33139"}{" "}
            </h1>
          </div>
          <h1>Phone: {phone ? phone : "018665471"}</h1>
          <h1>Email: {email}</h1>
          <h1>Licence: BD-123-456-0987</h1>
          <div className="flex gap-2 mt-3">
            <SendEmailButton emails={email}></SendEmailButton>
            <button
              onClick={() =>
                (window.location.href = `tel:${phone ? phone : "018665471"}`)
              }
              className="text-primary hover:text-white hover:bg-primary border-primary border w-full bg-white px-4 py-2 rounded-md "
            >
              Call
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">hello</div>
    </div>
  );
};

export default AgencyDetails;
