"use client";
import { useRouter } from "next/navigation";
import location1 from "../../assets/location-13.jpg";
import location2 from "../../assets/location2.png";
import location3 from "../../assets/location3.png";
import location4 from "../../assets/location4.png";

const Location = () => {
  const router = useRouter();
  return (
    <div className="px-4 md:px-14 md:pt-28 my-5">
      <div className="text-center py-6 md:py-12">
        <h1 className="font-semibold pb-3 text-2xl md:text-4xl">
          Explore The Neighborhoods
        </h1>
        <p>Find your dream apartment with our listing</p>
      </div>
      <div>
        <div className="grid md:grid-cols-5 gap-5">
          <div
            onClick={() => router.push(`/listings?address=dhaka`)}
            style={{
              backgroundImage: `url(${location1.src})`,
            }}
            className="col-span-2 rounded-lg bg-location hidden md:block"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col">
              <div className="mt-auto flex items-center justify-between px-6 pb-4">
                <h1 className="text-2xl font-medium py-2 text-white">Dhaka</h1>
                <p className=" hover:bg-primary p-2 rounded-md bg-black text-white bg-opacity-55 font-medium">
                  12 Properties
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push(`/listings?address=gazipur`)}
            style={{
              backgroundImage: `url(${location2.src})`,
            }}
            className="col-span-3 rounded-lg bg-location"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col">
              <div className="mt-auto flex items-center justify-between px-6 pb-4">
                <h1 className="text-2xl font-medium py-2 text-white">
                  Gazipur
                </h1>
                <p className=" hover:bg-primary p-2 rounded-md bg-black text-white bg-opacity-55 font-medium">
                  3 Properties
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-5 mt-6">
          <div
            onClick={() => router.push(`/listings?address=chittagong`)}
            style={{
              backgroundImage: `url(${location3.src})`,
            }}
            className="col-span-3 rounded-lg bg-location"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col">
              <div className="mt-auto flex items-center justify-between px-6 pb-4">
                <h1 className="text-2xl font-medium py-2 text-white">
                  Chittagong
                </h1>
                <p className=" hover:bg-primary p-2 rounded-md bg-black text-white bg-opacity-55 font-medium">
                  5 Properties
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push(`/listings?address=narayangonj`)}
            style={{
              backgroundImage: `url(${location4.src})`,
            }}
            className="col-span-2 rounded-lg bg-location hidden md:block"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col">
              <div className="mt-auto flex items-center justify-between px-6 pb-4">
                <h1 className="text-2xl font-medium py-2 text-white">
                  Narayangonj
                </h1>
                <p className=" hover:bg-primary p-2 rounded-md bg-black text-white bg-opacity-55 font-medium">
                  8 Properties
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
