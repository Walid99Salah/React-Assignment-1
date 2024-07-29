import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50] md:fixed w-full z-10">
        <div className=" text-white md:py-8 py-4 sm:px-24 px-3 flex-col md:flex-row lg:px-44 flex justify-between items-center">
          <Link to="">
            <h1 className="font-bold text-lg md:text-3xl sm:me-5 md:m-0">START FRAMEWORK</h1>
          </Link>
          <ul className="uppercase text-sm flex-col md:flex-row md:text-lg font-medium flex md:space-x-6 sm:space-x-4">
            <NavLink to="about" className="rounded-md p-1">
              about
            </NavLink>
            <NavLink to="portfolio" className="rounded-md p-1">
              portfolio
            </NavLink>
            <NavLink to="contact" className="rounded-md p-1">
              contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
