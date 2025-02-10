import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
