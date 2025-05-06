"use client";
import Image from "next/image";
import list1 from "../../assets/list1.jpg";
import list2 from "../../assets/list2.jpg";
import list3 from "../../assets/list3.jpg";
import list4 from "../../assets/list4.jpg";
import { useRouter } from "next/navigation";
import { useListingsQuery } from "@/redux/features/listing/listing.api";
import { MdOutlinePlayArrow } from "react-icons/md";

const Categories = () => {
  const router = useRouter();

  const { data: listings } = useListingsQuery({
    email: null,
    type: "",
    search: "",
  });
  const totalShop = listings?.filter(
    (listing: { type: string }) => listing.type == "shop"
  );
  const totalFamily = listings?.filter(
    (listing: { type: string }) => listing.type == "family"
  );
  const totalBachelor = listings?.filter(
    (listing: { type: string }) => listing.type == "bachelor"
  );
  const totalOffice = listings?.filter(
    (listing: { type: string }) => listing.type == "office"
  );

  const family = `/listings?category=family`;
  const bachelor = `/listings?category=bachelor`;
  const shop = `/listings?category=shop`;
  const office = `/listings?category=office`;

  return (
    <div className="px-4 md:px-24 2xl:px-60">
      <div className="text-center py-12">
        <h1 className="font-semibold md:text-3xl pb-3 text-xl">
          Explore Our Properties
        </h1>
        <p className="text-gray-500">
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
        <div
          onClick={() => router.push(family)}
          className="h-[230px] md:h-[380px] cursor-pointer bg-cover bg-center rounded-md text-white"
          style={{ backgroundImage: `url(${list1.src})` }}
        >
          <div className="bg-black rounded-md hover:bg-transparent w-full h-full flex flex-col bg-opacity-20">
            <div className="p-5">
              <p>{totalFamily?.length} Properties</p>
              <h1 className="text-xl font-medium">Family</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 mt-auto">
              <h1>MORE DETAILS</h1>
              <MdOutlinePlayArrow className="text-2xl"></MdOutlinePlayArrow>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push(office)}
          className="h-[230px] md:h-[380px] cursor-pointer bg-cover bg-center rounded-md text-white"
          style={{ backgroundImage: `url(${list2.src})` }}
        >
          <div className="bg-black rounded-md hover:bg-transparent w-full h-full flex flex-col bg-opacity-20">
            <div className="p-5">
              <p>{totalOffice?.length} Properties</p>
              <h1 className="text-xl font-medium">Office</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 mt-auto">
              <h1>MORE DETAILS</h1>
              <MdOutlinePlayArrow className="text-2xl"></MdOutlinePlayArrow>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push(bachelor)}
          className="h-[230px] md:h-[380px] cursor-pointer bg-cover bg-center rounded-md text-white"
          style={{ backgroundImage: `url(${list3.src})` }}
        >
          <div className="bg-black rounded-md hover:bg-transparent w-full h-full flex flex-col bg-opacity-20">
            <div className="p-5">
              <p>{totalBachelor?.length} Properties</p>
              <h1 className="text-xl font-medium">Bachelor</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 mt-auto">
              <h1>MORE DETAILS</h1>
              <MdOutlinePlayArrow className="text-2xl"></MdOutlinePlayArrow>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push(shop)}
          className="h-[230px] md:h-[380px] cursor-pointer bg-cover bg-center rounded-md text-white"
          style={{ backgroundImage: `url(${list4.src})` }}
        >
          <div className="bg-black rounded-md hover:bg-transparent w-full h-full flex flex-col bg-opacity-20">
            <div className="p-5">
              <p>{totalShop?.length} Properties</p>
              <h1 className="text-xl font-medium">Shop</h1>
            </div>
            <div className="flex items-center justify-between px-5 py-5 mt-auto">
              <h1>MORE DETAILS</h1>
              <MdOutlinePlayArrow className="text-2xl"></MdOutlinePlayArrow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
