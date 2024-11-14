import { Button, Modal } from "antd";
import Link from "next/link";
import { JWTDecode } from "@/utils/jwtDecode";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { FaSellcast } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const NavigationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = JWTDecode();
  const role = user?.role;
  const email = user?.email;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>
        <RiMenu3Fill />
      </Button>
      <Modal
        className="md:hidden"
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          onClick={handleOk}
          className="flex flex-col text-black p-6 gap-5 font-medium"
        >
          <Link className="border-dotted border-b-2 pb-4" href={"/"}>
            <div className="flex items-center gap-1">
              <CiHome className="text-2xl" />
              <h1>Home</h1>
            </div>
          </Link>
          <Link className="border-dotted border-b-2 pb-4" href={"/sell"}>
            <div className="flex items-center gap-1">
              <FaSellcast className="text-2xl" />
              <h1>Sell</h1>
            </div>
          </Link>
          <Link className="border-dotted border-b-2 pb-4" href={"/listings"}>
            <div className="flex items-center gap-1">
              <FaRegListAlt className="text-2xl" />
              <h1>Listings</h1>
            </div>
          </Link>
          <Link className="border-dotted border-b-2 pb-4" href={"/about"}>
            <div className="flex items-center gap-1">
              <FcAbout className="text-2xl" />
              <h1>About</h1>
            </div>
          </Link>
          {email ? (
            <Link
              className="bg-green-500 text-white rounded-md py-2 px-5 text-center"
              href={`/dashboard/${role}`}
            >
              Dashboard
            </Link>
          ) : (
            <div>
              <Link href={"/login"}>
                <button className="bg-green-500 w-full text-center text-white rounded-md py-2 px-5">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default NavigationModal;
