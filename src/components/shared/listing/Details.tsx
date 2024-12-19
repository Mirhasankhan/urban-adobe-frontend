import { TListing } from "@/types/common";
import { CiLocationOn } from "react-icons/ci";
import pImage from "../../../assets/list3.jpg";
import BannerSlide from "../ImageSlide";

const Details = ({ property }: { property: TListing }) => {
  const { title, size, price, address, image } = property;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl pb-2">{title}</h1>
          <button className="bg-green-500  text-white rounded-sm px-2 py-1">
            FEATURED
          </button>
          <button className="bg-[#06a788] mx-4 uppercase text-white rounded-sm px-2 py-1">
            For {property.for}
          </button>
          <button className="bg-red-500 text-white rounded-sm px-2 py-1">
            HOT OFFER
          </button>

          <div className="flex items-center gap-1 pt-2">
            <CiLocationOn className="text-xl"></CiLocationOn>
            <h1>{address}</h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">${price}</h1>
          <h1>{size}/sq ft</h1>
        </div>
      </div>
      <div className="py-6 grid grid-cols-5 gap-4">
        <img
          className="w-full col-span-3 rounded-md h-[450px]"
          src={image?.imageUrl}
          alt=""
        ></img>
        <div className="col-span-2">
          <img className="rounded-md h-60 w-full" src={pImage.src} alt="" />
          <BannerSlide></BannerSlide>
        </div>
      </div>
    </div>
  );
};

export default Details;
