"use client";
import { TRoles } from "@/types/common";
import { sidebarItems } from "@/utils/generateSidebarItems";
import { JWTDecode } from "@/utils/jwtDecode";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const user = JWTDecode();
  const role = user?.role;

  return (
    <div>
      {sidebarItems(role as TRoles).map((item, index) => (
        <Link key={index} href={`/dashboard/${item.path}`}>
          <h1
            className={`${
              pathName === `/dashboard${item.path}`
                ? "bg-green-500 bg-opacity-10 text-green-500"
                : ""
            } bg-gray-200 my-4 p-2 mx-2 rounded-md`}
          >
            {item.title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
