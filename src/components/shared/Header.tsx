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
import { IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const user = JWTDecode();
  const email = user?.email;
  const name = user?.name;

  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <div className="relative px-4 shadow-md md:px-14 flex justify-between py-3 items-center text-black z-30">
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
            className="flex  cursor-pointer items-center gap-1 md:border p-1 rounded-md"
          >
            <div className="border rounded-xl p-2">
              <FaRegUser></FaRegUser>
            </div>
            <div className="hidden md:flex items-center">
              <h1>{name}</h1>
              <FaCaretDown></FaCaretDown>
            </div>
            {open && (
              <div className="absolute bg-white border px-4 py-2 top-20 rounded-md right-12">
                <Sidebar></Sidebar>
                <button
                  className="ml-4 flex items-center gap-1 hover:bg-primary hover:text-white p-3 rounded-lg pr-24"
                  onClick={() => handleLogout()}
                >
                  <IoLogOutOutline className="text-xl" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link href={"/login"}>
              <button className="bg-primary text-white rounded-md py-2 px-5">
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
