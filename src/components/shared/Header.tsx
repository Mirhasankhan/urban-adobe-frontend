"use client";
import Image from "next/image";
import logo from "../../assets/logo5.jpeg";
import Link from "next/link";
import Navigate from "./Navigate";
import { JWTDecode } from "@/utils/jwtDecode";
import { FaRegUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Sidebar from "../dashboard/Sidebar";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = JWTDecode();
  const role = user?.role;
  const email = user?.email;
  const name = user?.name;
  return (
    <div className="relative px-4 shadow-md md:px-14 flex justify-between py-4 items-center text-black z-30">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src={logo}
          width={50}
          height={50}
          className="rounded-md"
          alt="logo"
        ></Image>
        <div>
          <h1 className="font-medium text-xl">UrbanAdobe</h1>
          <p className="text-xs text-gray-500">REAL ESTATE</p>
        </div>
      </Link>
      <Navigate></Navigate>
      <div>
        {email ? (
          // <Link
          //   className="hover:text-green-500 hover:border-b border-green-500"
          //   href={`/dashboard/${role}`}
          // >
          //   Dashboard
          // </Link>
          <div
            onClick={() => setOpen(!open)}
            className="flex  cursor-pointer items-center gap-1 border p-1 rounded-md"
          >
            <div className="border rounded-xl p-2">
              <FaRegUser></FaRegUser>
            </div>
            <div className="flex items-center">
              <h1>{name}</h1>
              <FaCaretDown></FaCaretDown>
            </div>
            {open && (
              <div className="absolute bg-white border px-4 py-2 top-20 rounded-md right-12">
                <Sidebar></Sidebar>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link href={"/login"}>
              <button className="bg-[#06a788] text-white rounded-md py-2 px-5">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
