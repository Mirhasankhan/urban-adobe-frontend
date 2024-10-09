"use client";
import { useRouter } from "next/navigation";
import bg from "../../assets/home.png";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Banner = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-black w-full h-full md:pt-40 pt-24 bg-opacity-40">
        <div className="text-white text-center">
          <h1 className="text-2xl md:text-4xl font-bold pb-6">
            Find Your Perfect <br />& Wonderful Home
          </h1>
          <p className="text-gray-100">
            A great plateform to buy, sell and rent your properties without any
            <br /> agent or commisions.
          </p>
        </div>
        <div className="mx-2 md:mx-auto md:w-2/4 bg-white py-1 px-1 mt-8  rounded-xl">
          <form className="flex relative justify-between items-center gap-2">
            <div className="absolute left-0 text-xl font-bold">
              <CiSearch className="font-medium"></CiSearch>
            </div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className=" rounded-md focus:outline-none p-2 pl-6"
              type="text"
              placeholder="city,address,zip :"
            />
            <div
              onClick={() => router.push(`/listings?address=${city}`)}
              className="bg-green-500  text-white text-center cursor-pointer py-2 px-2 rounded-md"
            >
              Find Out
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
