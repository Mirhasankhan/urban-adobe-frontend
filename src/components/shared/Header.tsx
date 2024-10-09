"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import Navigate from "./Navigate";

const Header = () => {
  return (
    <div className="fixed bg-black bg-opacity-40 top-0 left-0 right-0 px-4 md:px-14 flex justify-between h-16 items-center text-white">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          src={logo}
          width={40}
          height={40}
          className="rounded-md"
          alt="logo"
        ></Image>
        <h1 className="font-medium">Urban Adobe</h1>
      </Link>
      <Navigate></Navigate>
    </div>
  );
};

export default Header;
