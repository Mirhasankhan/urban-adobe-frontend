import Image from "next/image";
import logo from "../../assets/logo5.jpeg";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#004274] text-white">
      <div className="grid md:grid-cols-3 grid-cols-1 px-4 md:px-14 py-8 md:py-16 gap-6 ">
        <div>
          <div className="flex gap-1 items-center">
            <Image
              src={logo}
              width={40}
              height={40}
              className="rounded-full"
              alt="logo"
            ></Image>
            <h1 className="font-medium">Urban Adobe</h1>
          </div>
          <p className="pt-4 text-sm">
            Welcome to Urban Adobe your go-to platform for buying, selling, and
            renting properties with zero agents and no commissions. Connect
            directly with property owners and tenants for a seamless,
            transparent experience. Explore extensive listings and enjoy secure,
            hassle-free transactions, all in one place. Your next property
            journey starts here!
          </p>
        </div>
        <div className="flex justify-between md:justify-evenly">
          <div>
            <h1 className="pb-4 font-medium">Company</h1>
            <div className="flex flex-col gap-1">
              <Link className="hover:text-gray-400" href="/">
                About Us
              </Link>
              <Link className="hover:text-gray-400" href="/">
                Services
              </Link>
              <Link className="hover:text-gray-400" href="/">
                Blogs
              </Link>
              <Link className="hover:text-gray-400" href="/">
                Login
              </Link>
            </div>
          </div>
          <div>
            <h1 className=" pb-4 font-medium">Useful Links</h1>
            <div className="flex flex-col gap-1">
              <Link className="hover:text-gray-400" href="/">
                Terms Of Services
              </Link>
              <Link className="hover:text-gray-400" href="/">
                Privacy Policy
              </Link>
              <Link className="hover:text-gray-400" href="/">
                Listings
              </Link>
              <Link className="hover:text-gray-400" href="/">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="pb-4 font-medium">Contact details</h1>
          <div className="flex gap-1 items-center">
            <CiLocationOn className="text-2xl text-green-500"></CiLocationOn>
            <h1>44 Purana Paltan, Dhaka-1000</h1>
          </div>
          <div className="flex gap-1 items-center py-3">
            <CiMail className="text-2xl text-green-500"></CiMail>
            <h1>mirhasan000034@gmail.com</h1>
          </div>
          <div className="flex gap-1 items-center">
            <FiPhone className="text-2xl text-green-500"></FiPhone>
            <h1>+88-01678506798</h1>
          </div>
        </div>
      </div>
      <h1 className="text-center pb-2">
        © 2024 Urban Adobe. Design & Develop with by Mir Hasan.
      </h1>
    </div>
  );
};

export default Footer;
