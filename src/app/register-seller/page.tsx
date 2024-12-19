"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import bgImag from "../../assets/room1.webp";
import logo from "../../assets/logo5.jpeg";
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
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImag.src})` }}
    >
      <form
        className="bg-white rounded-md p-2 md:p-4 w-5/6 md:w-1/3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href={"/"}>
          <Image
            className="mx-auto rounded-full"
            src={logo}
            height={60}
            width={60}
            alt="logo"
          ></Image>
        </Link>
        <h1 className="md:text-2xl font-medium py-5">Register Your Agency</h1>
        <div>
          <label className="block" htmlFor="">
            Agency Name
          </label>
          <input
            className="border p-1 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
            placeholder="agency name"
            type="text"
            {...register("name", { required: true })}
          />
        </div>
        <div className="py-4">
          <label className="block" htmlFor="">
            Email Address
          </label>
          <input
            className="border p-1 w-full rounded-md mt-1 focus:outline-none focus:border-green-500"
            placeholder="agency@gmail.com"
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
        <div className="flex items-center gap-1 mt-2">
          <input type="checkbox" />
          <h1>
            I Accept <span className="text-green-500">Terms And Condition</span>
          </h1>
        </div>
        <button
          className="bg-[#06a788] py-2 rounded-md mt-3 text-white w-full"
          type="submit"
        >
          Create Account
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

export default SellerRegister;
