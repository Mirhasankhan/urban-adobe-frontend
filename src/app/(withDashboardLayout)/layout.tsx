"use client";
import Sidebar from "@/components/dashboard/Sidebar";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Header></Header>
            <div className="grid min-h-screen grid-cols-5 ">
              <div className="col-span-1">
                <Sidebar></Sidebar>
              </div>
              <div className="col-span-4 bg-gray-100">{children}</div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
