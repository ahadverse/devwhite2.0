"use client";
import React, { useState } from "react";
import Footer from "../footer/footer";
import TopHeader from "../topheader/topheader";
import { ToastContainer } from "react-toastify";
import WedevsHeader from "../header/header2";
import ScrollToTop from "../scrolltotop/scrolltotop";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      {/* <DrawersMenu setOpen={setOpen} open={open} /> */}
      <div className={`${open ? "contrast-50 blur-sm" : "contrast-100"}`}>
        <TopHeader />
        <WedevsHeader />
        {children}
        <ToastContainer />
        <Footer />
        <div className='bg-[#1a1a1a]'>
          <ScrollToTop />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
