"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "../../../assets/logo5.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

export type Inputs = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

const SellerRegister = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newUser = { ...data, role: "seller" };
    try {
      const response = await axios.post(
        "https://urban-adobe-backend.vercel.app/api/v1/register",
        newUser
      );
      toast.success(response.data.message);
      router.push("/login");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div
      className="mt-6 w-full px-4 md:mx-auto md:w-1/3 2xl:w-1/4"
    
    >
      <form
        className="bg-white shadow-[0px_4px_15px_rgba(255,69,58,0.15)] rounded-md p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href={"/"}>
          <Image
            className="mx-auto rounded-full"
            src={logo}
            height={40}
            width={40}
            alt="logo"
          ></Image>
        </Link>
        <h1 className="md:text-2xl font-medium py-3">Register Your Agency</h1>
        <div>
          <label className="block pb-1" htmlFor="">
            Agency Name
          </label>
          <input
           className="w-full p-3 border focus:outline-primary rounded-md"
            placeholder="agency name"
            type="text"
            {...register("name", { required: true })}
          />
        </div>
        <div className="py-4">
          <label className="block pb-1" htmlFor="">
            Email Address
          </label>
          <input
            className="w-full p-3 border focus:outline-primary rounded-md"
            placeholder="agency@gmail.com"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label className="block pb-1" htmlFor="">
            Password
          </label>
          <input
           className="w-full p-3 border focus:outline-primary rounded-md"
            placeholder="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
       
        <button
          className="bg-primary py-3 rounded-md mt-4 font-medium text-white w-full"
          type="submit"
        >
          Create Account
        </button>
        <h1 className="pt-2 text-center text-gray-600">
          Already have an account?
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default SellerRegister;
