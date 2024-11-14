"use client";
import { useRouter } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import location1 from "../../assets/locaton1.png";
import location2 from "../../assets/location2.png";
import location3 from "../../assets/location3.png";
import location4 from "../../assets/location4.png";

const Location = () => {
  const router = useRouter();
  return (
    <div className=" my-5">
      <div className="text-center py-6 md:py-12">
        <h1 className="font-semibold pb-3 text-2xl md:text-4xl">
          Find Home By Location
        </h1>
      </div>
      <div>
        <div className="grid md:grid-cols-5 gap-5">
          <div
            onClick={() => router.push(`/listings?address=dhaka`)}
            style={{
              backgroundImage: `url(${location1.src})`,
            }}
            className="col-span-2 bg-location hidden md:block"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-medium py-2 text-white">Dhaka</h1>
              <p className="text-gray-200 font-medium text-xl">12 Properties</p>
            </div>
          </div>
          <div
            onClick={() => router.push(`/listings?address=gazipur`)}
            style={{
              backgroundImage: `url(${location2.src})`,
            }}
            className="col-span-3 bg-location"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium py-2 text-white">Gazipur</h1>
              <p className="text-gray-200 text-xl font-medium">12 Properties</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-5 mt-6">
          <div
            onClick={() => router.push(`/listings?address=chittagong`)}
            style={{
              backgroundImage: `url(${location3.src})`,
            }}
            className="col-span-3 bg-location"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium py-2 text-white">
                Chittagong
              </h1>
              <p className="text-gray-200 text-xl font-medium">12 Properties</p>
            </div>
          </div>
          <div
            onClick={() => router.push(`/listings?address=narayangonj`)}
            style={{
              backgroundImage: `url(${location4.src})`,
            }}
            className="col-span-2 bg-location hidden md:block"
          >
            <div className="bg-black w-full h-full bg-opacity-30 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-medium py-2 text-white">
                Narayangonj
              </h1>
              <p className="text-gray-200 text-xl font-medium">12 Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
