
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)
    return (
        <div>
           <Header session={session}></Header>
            <div className="min-h-screen">
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;