import { useRouter } from "next/navigation";
import { IoLogOutOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

const ManageAccount = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };
  return (
    <div className=" border w-48 rounded-md  mr-8 p-3 bg-white shadow-md text-gray-500">
      <Link
        href="manage-profile"
        className="flex items-center gap-1 mb-2 hover:bg-gray-200 p-3 rounded-lg"
      >
        <CiUser className="text-xl"></CiUser>
        <p>Edit Profile</p>
      </Link>
      <button
        className=" flex items-center gap-1 hover:bg-gray-200 p-3 rounded-lg w-full"
        onClick={() => handleLogout()}
      >
        <IoLogOutOutline className="text-xl" />
        Logout
      </button>
    </div>
  );
};

export default ManageAccount;
