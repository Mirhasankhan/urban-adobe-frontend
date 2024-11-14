"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { JWTDecode } from "@/utils/jwtDecode";
import ManageAccount from "@/components/dashboard/ManageAccount";
import profImage from "../../assets/prof.png";
import { MdOutlineDashboard } from "react-icons/md";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = JWTDecode();
  const [open, setOpen] = useState(false);
  const [dashboardOpen, setdashboardOpen] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-5 ">
        {dashboardOpen && (
          <div
            className={`${
              dashboardOpen ? "col-span-3" : "col-span-1"
            } bg-blue-600  min-h-screen border-r`}
          >
            <Link
              href="/"
              className="flex gap-1 justify-left mt-5 ml-2 items-center"
            >
              <Image
                src={logo}
                width={35}
                height={35}
                className="rounded-md"
                alt="logo"
              ></Image>
              <h1 className="font-semibold  text-white">Urban Adobe</h1>
            </Link>
            <Sidebar></Sidebar>
          </div>
        )}

        <div className="bg-blue-600  min-h-screen border-r hidden md:block">
          <Link
            href="/"
            className="flex gap-1 justify-left mt-5 ml-2 items-center"
          >
            <Image
              src={logo}
              width={35}
              height={35}
              className="rounded-md"
              alt="logo"
            ></Image>
            <h1 className="font-semibold  text-white">Urban Adobe</h1>
          </Link>
          <Sidebar></Sidebar>
        </div>

        <div
          className={`${
            dashboardOpen ? "col-span-2" : "col-span-5 md:col-span-4"
          }`}
        >
          <header className="p-3 px-4 md:px-8 flex justify-between items-center border-b shadow-lg">
            <MdOutlineDashboard
              className="text-4xl p-2 bg-black text-white md:hidden  top-4 left-4 rounded-full"
              onClick={() => setdashboardOpen(!dashboardOpen)}
            />
            <h1 className="hidden md:block">Welcome back, {user?.name}</h1>
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              <Image
                height={40}
                width={40}
                src={profImage}
                alt=""
                className="rounded-full"
              ></Image>
            </div>
          </header>
          <div className="bg-gray-100   relative">
            {open && (
              <div className="absolute -top-0.5 right-0">
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
