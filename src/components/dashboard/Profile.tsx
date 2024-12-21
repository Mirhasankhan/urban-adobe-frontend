"use client";
import Image from "next/image";
import prof from "../../assets/prof.png";
import { JWTDecode } from "@/utils/jwtDecode";
import { Inputs } from "@/types/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import {
  useAllUsersQuery,
  useUpdateUserMutation,
} from "@/redux/features/buyProperty/buy.property.api";

const Profile = () => {
  const user = JWTDecode();
  const { data: users, isLoading } = useAllUsersQuery(user?.email);
  if (users) {
    console.log(users[0].email);
  }
  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (users) {
      updateUser({
        userId: users[0]._id,
        phone: data.phone,
        address: data.address,
      });
      reset();
    }
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

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1 className="text-2xl pt-6 pl-6">Manage Your Profile</h1>
      <div className="grid md:grid-cols-3 p-6 gap-6">
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
            {users[0].phone ? users[0].phone : "018665471"}
          </p>
          <p>
            <SlLocationPin className="inline mr-1 text-green-500 text-xl" />
            {users[0].address ? users[0].address : "Dhaka,"}
          </p>
        </div>
        <div className="col-span-2 bg-white border rounded-md p-4">
          <form
            className="bg-white rounded-md border p-4"
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
                    readOnly
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
                    readOnly
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
                    Address
                  </label>
                  <input
                    className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                    placeholder="current address"
                    type="text"
                    {...register("address", { required: true })}
                  />
                </div>
              </div>
            </div>
            <input
              className="cursor-pointer bg-[#06a788] font-medium py-2 rounded-md mt-3 text-white w-full"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
