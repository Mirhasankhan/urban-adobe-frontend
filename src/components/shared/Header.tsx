"use client"
import Image from 'next/image';
import logo from '../../assets/logo.png'
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { JWTDecode } from '@/utils/jwtDecode';

const Header = () => {
    const user = JWTDecode()
    console.log(user)
    const role = user?.role
    const email = user?.email

    return (
        <div className='fixed bg-black bg-opacity-40 top-0 left-0 right-0 px-4 md:px-24 flex justify-between h-16 items-center text-white' >
            <Link href="/" className='flex gap-1 items-center'>
                <Image src={logo} width={40} height={40} className='rounded-md' alt='logo'></Image>
                <h1>Urban Adobe</h1>
            </Link>
            <div className='flex gap-5 items-center font-medium'>
                <Link className='hover:text-green-500 hover:border-b border-green-500' href={"/"}>Home</Link>
                <Link className='hover:text-green-500 hover:border-b border-green-500' href={"/sell"}>Sell</Link>
                <Link className='hover:text-green-500 hover:border-b border-green-500' href={"/listings"}>Listings</Link>
                <Link className='hover:text-green-500 hover:border-b border-green-500' href={"/about"}>About</Link>
                {email ? <Link className='hover:text-green-500 hover:border-b border-green-500' href={`/dashboard/${role}`}>Dashboard</Link> : <div><Link href={"/login"}><button className='bg-green-500 rounded-md p-2'>Sign Up</button></Link></div>}


            </div>
        </div>
    );
};

export default Header;