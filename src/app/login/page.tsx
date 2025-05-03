"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import logo from "../../assets/logo5.jpeg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://urban-adobe-backend.vercel.app/api/v1/login",
        data
      );
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      router.push("/");
      setIsLoading(false);
    } catch (err: any) {
      toast.error(err.response.data.message);
      setIsLoading(false);
    }
    reset();
    setIsLoading(false);
  };
  return (
    <div className="mt-6 w-full px-4 md:mx-auto md:w-1/3 2xl:w-1/4">
      <form className="bg-white rounded-md " onSubmit={handleSubmit(onSubmit)}>
        <Link href={"/"}>
          <Image
            className="rounded-xl pb-6"
            src={logo}
            height={80}
            width={80}
            alt="logo"
          ></Image>
        </Link>
        <h1 className="hidden md:block text-2xl font-medium py-2 md:py-4">
          Log into Your Account
        </h1>
        <p className="text-sm">
          Buyer: email: apurbo2@gmail.com , Password: 123
        </p>
        <p className="text-sm">
          Seller: email: navana@gmail.com , Password: 123
        </p>
        <div className="py-2 md:py-4">
          <label className="block pb-1" htmlFor="">
            Email Address
          </label>
          <input
            className="w-full p-2 border rounded-md focus:outline-primary"
            placeholder="name@gmail.com"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
            "Login"
          )}
        </button>
        <h1 className="pt-2 text-center text-gray-600">
          Do not have an account?
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Login;
