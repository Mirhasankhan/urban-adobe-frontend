import { JWTDecode } from "@/utils/jwtDecode";
import Link from "next/link";

import { RxCross1 } from "react-icons/rx";
import prof2 from "../../assets/prof2.png";
import NavigationModal from "./NavigationModal";

const Navigate = () => {
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
        <NavigationModal></NavigationModal>
      </div>
    </div>
  );
};

export default Navigate;
