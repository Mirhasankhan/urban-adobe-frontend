import Image from "next/image";
import logo from '../../assets/logo.png'
import Link from "next/link";


const Footer = () => {
    return (
        <div className="grid grid-cols-3 px-4 md:px-24 py-16 gap-6 bg-[#0F172A] text-white">
            <div>
                <div className='flex gap-1 items-center'>
                    <Image src={logo} width={40} height={40} className='rounded-md' alt='logo'></Image>
                    <h1>Urban Adobe</h1>
                </div>
                <p className="pt-4 text-sm">A great plateform to buy, sell and rent your <br /> properties without any agent or commisions.</p>
            </div>
            <div className="flex justify-evenly">
                <div>
                    <h1 className="pb-4">Company</h1>
                    <div className="flex flex-col gap-1">
                    <Link className="hover:text-gray-400" href="/">About Us</Link>
                    <Link className="hover:text-gray-400" href="/">Services</Link>
                    <Link className="hover:text-gray-400" href="/">Blogs</Link>
                    <Link className="hover:text-gray-400" href="/">Login</Link>
                    </div>
                </div>
                <div>
                    <h1 className="pb-4">Userful Links</h1>
                    <div className="flex flex-col gap-1">
                    <Link className="hover:text-gray-400" href="/">Terms Of Services</Link>
                    <Link className="hover:text-gray-400" href="/">Privacy Policy</Link>
                    <Link className="hover:text-gray-400" href="/">Listings</Link>
                    <Link className="hover:text-gray-400" href="/">Contact Us</Link>
                    </div>
                </div>
                
            </div>
            <div>contact details</div>
        </div>
    );
};

export default Footer;