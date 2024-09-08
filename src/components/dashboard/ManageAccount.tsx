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
    <div className=" border w-48  mr-8 p-3 bg-white shadow-md text-gray-500">
      <Link href="manage-profile" className="flex items-center gap-1 mb-2">
        <CiUser className="text-xl"></CiUser>
        <p>My Profile</p>
      </Link>
      {/* <div className="flex items-center gap-1 py-2">
        <MdForwardToInbox className="text-xl"></MdForwardToInbox>
        <p>Inbox</p>
      </div> */}
      {/* <div className="flex items-center gap-1 pb-2">
        <IoMdSettings className="text-xl" />
        <p>Account Settings</p>
      </div> */}
      <button
        className=" flex items-center gap-1"
        onClick={() => handleLogout()}
      >
        <IoLogOutOutline className="text-xl" />
        Logout
      </button>
    </div>
  );
};

export default ManageAccount;
