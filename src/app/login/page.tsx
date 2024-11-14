"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import bgImag from "../../assets/property.avif";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
// import { FaGithub, FaGoogle } from "react-icons/fa";
// import { signIn } from "next-auth/react";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(
        "https://urban-adobe-backend.vercel.app/api/v1/login",
        data
      );
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
    reset();
  };
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImag.src})` }}
    >
      <form
        className="bg-white rounded-md p-4 w-5/6 md:w-1/3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href={"/"}>
          <Image
            className="mx-auto rounded-xl"
            src={logo}
            height={60}
            width={60}
            alt="logo"
          ></Image>
        </Link>
        <h1 className="md:text-2xl font-medium py-2 md:py-4">
          Login Your Account
        </h1>
        <div className="py-2 md:py-4">
          <label className="block" htmlFor="">
            Email Address
          </label>
          <input
            className="border p-1 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
            placeholder="name@gmail.com"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label className="block" htmlFor="">
            Password
          </label>
          <input
            className="border p-1 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
            placeholder="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-1 mt-2">
            <input type="checkbox" />
            <h1>Remember Me</h1>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <h1 className="text-blue-500">Forgot Password?</h1>
          </div>
        </div>
        <input
          className="bg-green-500 py-2 rounded-md mt-3 text-white w-full cursor-pointer"
          type="submit"
        />
        <h1 className="pt-2 text-center text-gray-600">
          Do not have an account{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </h1>
        {/* <h1 className="border-t pt-4">Or</h1> */}
        {/* <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          <FaGithub></FaGithub>
        </button>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          <FaGoogle></FaGoogle>
        </button> */}
      </form>
    </div>
  );
};

export default Login;
