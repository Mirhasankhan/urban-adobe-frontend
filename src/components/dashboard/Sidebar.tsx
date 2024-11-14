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
          <div
            className={`${
              pathName === `/dashboard${item.path}`
                ? "bg-white text-black border-r-4 border-green-600"
                : ""
            } bg-gray-200 my-4 p-2 mx-2 rounded-md flex items-center`}
          >
            {item.icon && <p className="mr-2 text-xl">{<item.icon />}</p>}
            <h1>{item.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
