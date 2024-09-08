"use client";
import Image from "next/image";
import prof from "../../assets/prof.png";
import { JWTDecode } from "@/utils/jwtDecode";

const Profile = () => {
  const user = JWTDecode();
  console.log(user?.email);
  return (
    <div>
      <div className="flex items-center justify-between px-12">
        <div>
          <h1 className="font-medium text-xl  pt-6">My Profile</h1>
          <p className="text-gray-500 pb-6">We are glad to see you again!</p>
        </div>
        <button className="bg-green-500 text-white rounded-md py-2 px-12 font-medium ">
          Update Profile
        </button>
      </div>
      <div className="px-12 grid grid-cols-5 bg-white py-4">
        <div
          style={{ height: "280px", width: "80%", position: "relative" }}
          className="col-span-2 rounded-md bg-white"
        >
          <Image layout="fill" src={prof} alt="" />
        </div>
        <div className="col-span-3 flex justify-between">
          <div className="mt-20">
            <h1 className="text-xl font-semibold">{user?.name}</h1>
            <p className="text-gray-500">
              Real State {user?.role == "seller" ? "Businessman" : "Buyer"}
            </p>
          </div>
          <div className="mt-12">
            <h1 className="text-xl font-semibold">EMAIL</h1>
            <p className="text-gray-500">{user?.email}</p>
            <h1 className="text-xl font-semibold">PHONE</h1>
            <p className="text-gray-500">+8801678506798</p>
          </div>
          <div className="mt-12">
            <h1 className="text-xl font-semibold">BIRTHDAY</h1>
            <p className="text-gray-500">14 July, 1999</p>
            <h1 className="text-xl font-semibold">LOCATION</h1>
            <p className="text-gray-500">Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
