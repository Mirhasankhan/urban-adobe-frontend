"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import bgImag from "../../assets/property.avif";
import logo from "../../assets/logo5.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";

export type Inputs = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

const Register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const newUser = { ...data, role: "buyer" };
    try {
      const response = await axios.post(
        "https://urban-adobe-backend.vercel.app/api/v1/register",
        newUser
      );
      toast.success(response.data.message);
      router.push("/login");
      setIsLoading(false);
    } catch (err: any) {
      toast.error(err.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-6 w-full px-4 md:mx-auto md:w-1/3 2xl:w-1/4">
      <form className="rounded-md p-2" onSubmit={handleSubmit(onSubmit)}>
        <Link href={"/"}>
          <Image
            className="pb-6 rounded-xl"
            src={logo}
            height={70}
            width={70}
            alt="logo"
          ></Image>
        </Link>
        <h1 className="md:text-2xl font-medium py-3 md:py-5">
          Register Your Account
        </h1>
        <div>
          <label className="block pb-1" htmlFor="">
            Your Name
          </label>
          <input
            className="w-full p-2 border focus:outline-primary rounded-md"
            placeholder="your Name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="py-2 md:py-4">
          <label className="block pb-1" htmlFor="">
            Email Address
          </label>
          <input
            className="w-full p-2 border focus:outline-primary rounded-md"
            placeholder="name@gmail.com"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="block pb-1" htmlFor="">
            Password
          </label>
          <input
            className="w-full p-2 border focus:outline-primary rounded-md"
            placeholder="password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-primary py-2 mt-3 rounded-md text-white w-full cursor-pointer"
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters className="text-xl animate-spin mx-auto" />
          ) : (
            "Sign Up"
          )}
        </button>
        <h1 className="pt-2 text-center text-gray-600">
          Already have an account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Login
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Register;
