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
                ? "bg-primary  text-white border-r-4 border-orange-600"
                : ""
            } hover:bg-primary hover:text-white my-4 p-3 mx-3 rounded-md flex items-center`}
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
