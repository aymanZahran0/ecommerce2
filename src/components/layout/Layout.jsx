import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";




export default function Layout() {
  return (
    <>
      <Navbar/>

      <Outlet></Outlet>

      <Footer />
    </>
  );
}
