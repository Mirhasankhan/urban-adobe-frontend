"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { JWTDecode } from "@/utils/jwtDecode";
import { Inputs } from "@/types/common";
import { useCreateListingMutation } from "@/redux/features/listing/listing.api";

const AddProperty = () => {
  const user = JWTDecode();
  const [createListing] = useCreateListingMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    try {
      const imgbbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=77f11c1eb552ae7fdf1a0d6f34ce0a62`,
        formData
      );
      const imgUrl = imgbbResponse.data.data.url;

      const newListing = {
        ...data,
        image: {
          imageUrl: imgUrl,
        },
        sellerName: user?.name,
        sellerEmail: user?.email,
        for: "rent",
      };
      const response = await createListing(newListing);
      toast.success(response.data.message);
      reset();
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="p-6 h-screen">
      <h1 className="font-medium text-xl">Add New Property</h1>
      <p className="text-gray-500">We are glad to see you again!</p>
      <form
        className="bg-white rounded-md border p-4 mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="font-medium text-xl pb-4">Create Listing</h1>
            <div>
              <label className="block" htmlFor="">
                Property Name
              </label>
              <input
                className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                placeholder="property name"
                type="text"
                {...register("title", { required: true })}
              />
            </div>
            <div className="py-4">
              <label className="block" htmlFor="">
                Address
              </label>
              <input
                className="border  p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                placeholder="address"
                type="text"
                {...register("address", { required: true })}
              />
            </div>
            <div>
              <label className="block" htmlFor="">
                Description
              </label>
              <input
                className="border p-2 pb-16 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                placeholder="description"
                type="text"
                {...register("description", { required: true })}
              />
            </div>
          </div>
          <div>
            <h1 className="font-medium text-xl pb-4">Detailed Informations</h1>
            <div className="grid grid-cols-3 gap-3">
              <div className="w-full">
                <label className="block pb-2" htmlFor="type">
                  Type
                </label>
                <select
                  {...register("type", { required: true })}
                  className="border w-full p-2 rounded-md"
                  id="type"
                >
                  <option value="family">Family</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="shop">Shop</option>
                  <option value="office">Office</option>
                </select>
              </div>
              <div>
                <label className="block" htmlFor="">
                  Price
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="price"
                  type="number"
                  {...register("price", { required: true })}
                />
              </div>
              <div>
                <label className="block" htmlFor="">
                  Area Size
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="size in sqf"
                  type="number"
                  {...register("size", { required: true })}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 my-6">
              <div>
                <label className="block" htmlFor="">
                  Bedrooms
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="price"
                  type="number"
                  {...register("bedroom", { required: true })}
                />
              </div>
              <div>
                <label className="block" htmlFor="">
                  Bathrooms
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="size in sqf"
                  type="number"
                  {...register("bathroom", { required: true })}
                />
              </div>
              <div>
                <label className="block" htmlFor="">
                  Kitchen
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  placeholder="size in sqf"
                  type="number"
                  {...register("kitchen", { required: true })}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <label className="block" htmlFor="">
                  Year Built
                </label>
                <input
                  className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
                  type="date"
                  {...register("year", { required: true })}
                />
              </div>
              {/* <div>
                                <label className="block" htmlFor="">Video URL</label>
                                <input className="border p-2 w-full rounded-md mt-1 focus:outline-none focus:border-green-500" placeholder="size in sqf" type="url" {...register("video")} />
                            </div> */}
              <div className="col-span-2">
                <label className="block" htmlFor="">
                  Property Image
                </label>
                <input
                  className="mt-2 border p-2 rounded-md w-full"
                  type="file"
                  {...register("image")}
                />
              </div>
            </div>
          </div>
        </div>
        <input
          className="cursor-pointer bg-green-500 font-medium py-2 rounded-md mt-3 text-white w-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProperty;
