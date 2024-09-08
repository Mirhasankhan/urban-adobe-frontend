"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { JWTDecode } from "@/utils/jwtDecode";
import ManageAccount from "@/components/dashboard/ManageAccount";
import profImage from "../../assets/prof.png";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = JWTDecode();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-5 ">
        <div className="col-span-1  h-screen border-r">
          <Link
            href="/"
            className="flex gap-1 justify-center mt-5 items-center"
          >
            <Image
              src={logo}
              width={45}
              height={45}
              className="rounded-md"
              alt="logo"
            ></Image>
            <h1 className="font-medium text-xl">Urban Adobe</h1>
          </Link>
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-4">
          <header className="p-3 px-12 flex justify-between items-center border-b shadow-lg">
            <h1>Welcome back, {user?.email}</h1>
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex gap-1 items-center"
            >
              <Image
                height={30}
                width={30}
                src={profImage}
                alt=""
                className="rounded-full"
              ></Image>
              <p className="font-medium">{user?.name}</p>
            </div>
          </header>
          <div className="bg-gray-100  relative">
            {open && (
              <div className="absolute top-0 right-0">
                <ManageAccount></ManageAccount>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
