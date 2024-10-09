import { JWTDecode } from "@/utils/jwtDecode";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

const Navigate = () => {
  const [open, setOpen] = useState(false);
  const user = JWTDecode();
  const role = user?.role;
  const email = user?.email;
  return (
    <div className="relative">
      <div>
        <div className="hidden md:flex gap-5 items-center font-medium">
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/sell"}
          >
            Sell
          </Link>
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/listings"}
          >
            Listings
          </Link>
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/about"}
          >
            About
          </Link>
          {email ? (
            <Link
              className="hover:text-green-500 hover:border-b border-green-500"
              href={`/dashboard/${role}`}
            >
              Dashboard
            </Link>
          ) : (
            <div>
              <Link href={"/login"}>
                <button className="bg-green-500 rounded-md py-2 px-5">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="md:hidden">
        {!open && (
          <LuMenu onClick={() => setOpen(!open)} className="text-2xl"></LuMenu>
        )}
        {open && (
          <RxCross1
            onClick={() => setOpen(!open)}
            className="text-2xl"
          ></RxCross1>
        )}
      </div>
      {open && (
        <div className="md:hidden flex flex-col absolute top-10 -right-4 bg-white text-black p-6 gap-5 items-center font-medium">
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/sell"}
          >
            Sell
          </Link>
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/listings"}
          >
            Listings
          </Link>
          <Link
            className="hover:text-green-500 hover:border-b border-green-500"
            href={"/about"}
          >
            About
          </Link>
          {email ? (
            <Link
              className="hover:text-green-500 hover:border-b border-green-500"
              href={`/dashboard/${role}`}
            >
              Dashboard
            </Link>
          ) : (
            <div>
              <Link href={"/login"}>
                <button className="bg-green-500 rounded-md py-2 px-5">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navigate;
