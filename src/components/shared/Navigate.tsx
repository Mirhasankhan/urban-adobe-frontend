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
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link className="hover:text-primary text-[18px] " href={"/"}>
            Home
          </Link>
          <Link className="hover:text-primary text-[18px] " href={"/sell"}>
            Sell
          </Link>
          <Link className="hover:text-primary text-[18px]" href={"/listings"}>
            Properties
          </Link>
          <Link className="hover:text-primary text-[18px]" href={"/agencies"}>
            Agencies
          </Link>
          <Link className="hover:text-primary text-[18px]" href={"/about"}>
            About
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <NavigationModal></NavigationModal>
      </div>
    </div>
  );
};

export default Navigate;
