"use client";
import { IoCheckmarkOutline } from "react-icons/io5";
import pr1 from "../../assets/pr2.png";
import Image from "next/image";
import { toast } from "sonner";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-14 mt-12">
      <div>
        <h1>
          Browse our property listing and find your best With over 1 <br />{" "}
          million+ homes for sale available on the website you with a <br />{" "}
          house you will want to call home. and
        </h1>
        <div className="flex gap-1 items-center mt-2">
          <IoCheckmarkOutline className="text-red-500 font-extrabold text-xl"></IoCheckmarkOutline>
          <p className="font-medium">Living rooms are pre-wired for Surround</p>
        </div>
        <div className="flex gap-1 items-center py-1">
          <IoCheckmarkOutline className="text-red-500 font-extrabold text-xl"></IoCheckmarkOutline>
          <p className="font-medium">Luxurious interior design and amenities</p>
        </div>
        <div className="flex gap-1 items-center">
          <IoCheckmarkOutline className="text-red-500 font-extrabold text-xl"></IoCheckmarkOutline>
          <p className="font-medium">Nestled in the Buckhead</p>
        </div>
        <div>
          <Image src={pr1} height={500} width={600} alt=""></Image>
        </div>
      </div>

      <div className="bg-gray-200 p-6 rounded-md">
        <h1 className="font-medium text-2xl pb-3">Contact Us</h1>
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input
              required
              className="p-3 rounded-lg block w-full mt-1 outline-none focus:outline-none"
              type="text"
              placeholder="Enter your name"
              name=""
              id=""
            />
          </div>
          <div className="py-3">
            <label htmlFor="">Email</label>
            <input
              required
              className="p-3 rounded-lg block w-full mt-1 outline-none focus:outline-none"
              type="email"
              placeholder="Enter your email"
              name=""
              id=""
            />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea
              required
              placeholder="Enter your message"
              rows={7}
              className="p-3 rounded-lg block w-full mt-1 outline-none focus:outline-none"
              name=""
              id=""
            ></textarea>
          </div>
          <button
            onClick={() =>
              toast.success(
                "thank you for contacting us, we will back to you soon"
              )
            }
            className="bg-red-500 px-6 py-4 font-medium text-white rounded-lg mt-4"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
