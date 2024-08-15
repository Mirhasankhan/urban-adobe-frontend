import bg from "../../assets/home.png";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-black w-full h-full pt-40 bg-opacity-40">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold pb-6">
            Find Your Perfect <br />& Wonderful Home
          </h1>
          <p className="text-gray-100">
            A great plateform to buy, sell and rent your properties without any{" "}
            <br /> agent or commisions.
          </p>
        </div>
        <div className="bg-white p-6 w-80 mx-auto flex justify-between mt-4 rounded-t-md">
          <button className="bg-green-500 text-white py-2 px-6 rounded-md">
            Buy
          </button>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-md">
            Rent
          </button>
        </div>
        <div className="mx-4 md:mx-24 bg-white py-6 px-14  rounded-lg">
          <form className="md:flex justify-center gap-4">
            <div className="w-full">
              <label className="block" htmlFor="">
                Select Categories:
              </label>
              {/* <input className='border p-2 rounded-md' type="text" name="" placeholder='Select...' id="" /> */}
              <select className="border w-full p-2 rounded-md" name="" id="">
                <option value="family">Family</option>
                <option value="bachelor">Bachelor</option>
                <option value="shop">Shop</option>
                <option value="office">Office</option>
              </select>
            </div>
            <div>
              <label className="block" htmlFor="">
                Min Price:
              </label>
              <input
                className="border p-2 rounded-md"
                type="text"
                name=""
                placeholder="Select..."
                id=""
              />
            </div>
            <div>
              <label className="block" htmlFor="">
                Max Price:
              </label>
              <input
                className="border p-2 rounded-md"
                type="text"
                name=""
                placeholder="Select..."
                id=""
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-16 rounded-md mt-4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
