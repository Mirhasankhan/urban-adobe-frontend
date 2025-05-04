"use client";
import Image from "next/image";
import logo from "../../assets/logo5.jpeg";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import Navigate from "./Navigate";

const Footer = () => {
  return (
    <div className="bg-[#eb309a] bg-opacity-30">
      <div className="flex flex-col items-center justify-center py-6">
        <div className="flex gap-6 items-center justify-center">
          <h1 className="w-24 border-gray-600 border"></h1>
          <div className="flex items-center gap-1">
            <Image
              className="rounded-full"
              alt=""
              src={logo}
              width={40}
              height={40}
            ></Image>
            <h1 className="font-semibold text-2xl text-primary">Urban Adobe</h1>
          </div>
          <h1 className="w-24 border-gray-600 border"></h1>
        </div>
        <h2 className="py-3 font-medium">urbanAdobe@gmail.com</h2>
        <h2 className="font-medium">+228148548548</h2>
        <div className="flex items-center gap-4 cursor-pointer text-xl my-3">
          <div className="p-3 rounded-md text-primary bg-white hover:bg-primary hover:text-white">
            <FaFacebookF></FaFacebookF>
          </div>
          <div className="p-3 rounded-md text-primary bg-white hover:bg-primary hover:text-white">
            <FaPinterestP></FaPinterestP>
          </div>
          <div className="p-3 rounded-md text-primary bg-white hover:bg-primary hover:text-white">
            <FaInstagram></FaInstagram>
          </div>
          <div className="p-3 rounded-md text-primary bg-white hover:bg-primary hover:text-white">
            <FaYoutube></FaYoutube>
          </div>
        </div>
        <div className="text-gray-600">
          {" "}
          <Navigate></Navigate>
        </div>
      </div>
      <h1 className="text-sm text-center py-3 border-gray-400 border-t border-dotted">
        © 2024 Urban Adobe. Design by Mir Hasan.
      </h1>
    </div>
  );
};

export default Footer;
