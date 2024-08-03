"use client"
import Sidebar from '@/components/dashboard/Sidebar';
import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo.png'
import Link from 'next/link';
import { JWTDecode } from '@/utils/jwtDecode';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const user = JWTDecode()
    const router = useRouter()

    const handleLogout = () => {
        localStorage.clear()
        router.push("/")
    }

    return (
        <div>
            <div className='grid grid-cols-5 '>
                <div className="col-span-1  h-screen border-r"><Link href="/" className='flex gap-1 justify-center mt-5 items-center'>
                    <Image src={logo} width={45} height={45} className='rounded-md' alt='logo'></Image>
                    <h1 className='font-medium text-xl'>Urban Adobe</h1>
                </Link>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-span-4'>
                    <header className='p-3 flex justify-between items-center border-b shadow-lg'>
                        <h1>Welcome back, {user?.name}</h1>
                        <button className='bg-red-400 text-white px-4 py-2 font-medium rounded-md ' onClick={() => handleLogout()}>Logout</button>
                    </header>
                    <div className='bg-gray-100'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;