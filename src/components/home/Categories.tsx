"use client";
import Image from "next/image";
import list1 from "../../assets/list1.jpg";
import list2 from "../../assets/list2.jpg";
import list3 from "../../assets/list3.jpg";
import list4 from "../../assets/list4.jpg";
import { useRouter } from "next/navigation";
import { useListingsQuery } from "@/redux/features/listing/listing.api";

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
    <div className="px-4 md:px-14">
      <div className="text-center py-12">
        <h1 className="font-semibold md:text-3xl pb-3 text-xl">
          Listing Categories
        </h1>
        <p className="text-gray-500">
          A great plateform to buy, sell and rent your properties without any
          agent or <br /> commisions.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          onClick={() => router.push(family)}
          className="border hover:shadow-xl hover:cursor-pointer rounded-lg"
        >
          <Image
            className="rounded-t-lg"
            src={list1}
            width={400}
            height={300}
            alt=""
          ></Image>
          <div className="p-3">
            <h1 className="text-xl font-medium">Family</h1>
            <p className="text-gray-500">{totalFamily?.length} listings</p>
          </div>
        </div>
        <div
          onClick={() => router.push(shop)}
          className="border hover:shadow-xl hover:cursor-pointer rounded-lg"
        >
          <Image
            className="rounded-t-lg"
            src={list2}
            width={400}
            height={300}
            alt=""
          ></Image>
          <div className="p-3">
            <h1 className="text-xl font-medium">Shop</h1>
            <p className="text-gray-500">{totalShop?.length} listings</p>
          </div>
        </div>
        <div
          onClick={() => router.push(bachelor)}
          className="border hover:shadow-xl hover:cursor-pointer rounded-lg"
        >
          <Image
            className="rounded-t-lg"
            src={list3}
            width={400}
            height={300}
            alt=""
          ></Image>
          <div className="p-3">
            <h1 className="text-xl font-medium">Bachelor</h1>
            <p className="text-gray-500">{totalBachelor?.length} listings</p>
          </div>
        </div>
        <div
          onClick={() => router.push(office)}
          className="border hover:shadow-xl hover:cursor-pointer rounded-lg"
        >
          <Image
            className="rounded-t-lg"
            src={list4}
            width={400}
            height={300}
            alt=""
          ></Image>
          <div className="p-3">
            <h1 className="text-xl font-medium">Office</h1>
            <p className="text-gray-500">{totalOffice?.length} listings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
