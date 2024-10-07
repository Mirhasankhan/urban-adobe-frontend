import bg from "../../assets/home.png";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-black w-full h-full md:pt-40 pt-12 bg-opacity-40">
        <div className="text-white text-center">
          <h1 className="text-2xl md:text-4xl font-bold pb-6">
            Find Your Perfect <br />& Wonderful Home
          </h1>
          <p className="text-gray-100">
            A great plateform to buy, sell and rent your properties without any
            <br /> agent or commisions.
          </p>
        </div>
        <div className="mx-4 md:mx-60 bg-white py-2 px-6 mt-4  rounded-full">
          <form className="md:flex relative justify-center items-center gap-2">
            <div className="absolute left-0 text-xl font-bold">
              <CiSearch className="font-medium"></CiSearch>
            </div>
            <input
              className="w-4/6 rounded-md focus:outline-none p-2 pl-6"
              type="text"
              placeholder="city,address,zip :"
            />
            <button
              type="submit"
              className="bg-green-500 w-2/6 text-white py-2 px-12 rounded-md"
            >
              Find Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
