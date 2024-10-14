import { MdOutlineArrowOutward } from "react-icons/md";

const Location = () => {
  return (
    <div className="px-4 md:px-14 my-5">
      <div className="text-center py-12">
        <h1 className="font-medium pb-3 text-xl md:text-3xl">
          Find Home By Location
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-between items-center border p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-medium py-2">Mymensingh</h1>
            <p className="text-red-500">12 Properties</p>
          </div>
          <MdOutlineArrowOutward className="text-3xl text-red-500"></MdOutlineArrowOutward>
        </div>
        <div className="flex justify-between items-center border p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-medium py-2">Narayangonj</h1>
            <p className="text-red-500">12 Properties</p>
          </div>
          <MdOutlineArrowOutward className="text-3xl text-red-500"></MdOutlineArrowOutward>
        </div>
        <div className="flex justify-between items-center border p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-medium py-2">Dhaka</h1>
            <p className="text-red-500">12 Properties</p>
          </div>
          <MdOutlineArrowOutward className="text-3xl text-red-500"></MdOutlineArrowOutward>
        </div>
        <div className="flex justify-between items-center border p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-medium py-2">Chittagong</h1>
            <p className="text-red-500">22 Properties</p>
          </div>
          <MdOutlineArrowOutward className="text-3xl text-red-500"></MdOutlineArrowOutward>
        </div>
        <div className="flex justify-between items-center border p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-medium py-2">Sylhet</h1>
            <p className="text-red-500">21 Properties</p>
          </div>
          <MdOutlineArrowOutward className="text-3xl text-red-500"></MdOutlineArrowOutward>
        </div>
        <div className="flex justify-between items-center border p-6 rounded-lg">
          <div>
            <h1 className="text-2xl font-medium py-2">Rajshahi</h1>
            <p className="text-red-500">10 Properties</p>
          </div>
          <MdOutlineArrowOutward className="text-3xl text-red-500"></MdOutlineArrowOutward>
        </div>
      </div>
    </div>
  );
};

export default Location;
