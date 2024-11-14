"use client";
import Image from "next/image";
import prof from "../../assets/prof.png";
import { JWTDecode } from "@/utils/jwtDecode";
import { Inputs } from "@/types/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

import { toast } from "sonner";
import { SlLocationPin } from "react-icons/sl";

const Profile = () => {
  const user = JWTDecode();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("image", data.image[0]);
    // try {
    //   const imgbbResponse = await axios.post(
    //     `https://api.imgbb.com/1/upload?key=77f11c1eb552ae7fdf1a0d6f34ce0a62`,
    //     formData
    //   );
    //   const imgUrl = imgbbResponse.data.data.url;

    //   const newListing = {
    //     ...data,
    //     image: {
    //       imageUrl: imgUrl,
    //     },
    //     sellerName: user?.name,
    //     sellerEmail: user?.email,
    //   };
    //   const response = await createListing(newListing);
    //   toast.success(response.data.message);
    //   reset();
    // } catch (err: any) {
    //   toast.error(err.response.data.message);
    // }
  };

  return (
    <div className="grid grid-cols-3 p-6 gap-6">
      <div className="col-span-1 bg-white rounded-md p-4 border">
        <Image
          className="rounded-xl"
          src={prof.src}
          alt=""
          height={300}
          width={300}
        ></Image>
        <h1 className="pt-3 pb-1 text-xl font-medium">{user?.name}</h1>
        <h1>
          <MdOutlineEmail className="inline mr-1 text-green-500 text-xl" />
          {user?.email}
        </h1>
        <p className="py-2">
          <MdOutlinePhone className="inline mr-1 text-green-500 text-xl" />
          Phone: +8525214445
        </p>
        <p>
          <SlLocationPin className="inline mr-1 text-green-500 text-xl" />
          44 Purana Paltan, Dhaka-1000
        </p>
      </div>
      <div className="col-span-2 bg-white border rounded-md p-4">
        <h1>Profile</h1>
        <form
          className="bg-white rounded-md border p-4 mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="">
            <div>
              <h1 className="font-medium text-xl pb-4">User Information</h1>
              <div>
                <label className="block" htmlFor="">
                  Name
                </label>
                <input
                  defaultValue={user?.name}
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="Name"
                  type="text"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="py-4">
                <label className="block" htmlFor="">
                  Email
                </label>
                <input
                  defaultValue={user?.email}
                  className="border  p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="Email"
                  type="text"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label className="block" htmlFor="">
                  Phone
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="phone"
                  type="number"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="pt-4">
                <label className="block" htmlFor="">
                  Location
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="current address"
                  type="text"
                  {...register("location", { required: true })}
                />
              </div>
            </div>
          </div>
          <input
            className="cursor-pointer bg-green-500 font-medium py-2 rounded-md mt-3 text-white w-full"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
