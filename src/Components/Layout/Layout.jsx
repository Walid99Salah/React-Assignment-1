import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet></Outlet>

      <Footer />
    </>
  );
}
