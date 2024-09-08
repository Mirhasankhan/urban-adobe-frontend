import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
