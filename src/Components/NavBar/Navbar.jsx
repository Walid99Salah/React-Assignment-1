import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50] md:fixed w-full z-10">
        <div className="h-10 text-white py-12 sm:px-24 lg:px-44 flex justify-between items-center">
          <Link to="">
            <h1 className="font-bold text-3xl sm:me-5 md:m-0">START FRAMEWORK</h1>
          </Link>
          <ul className="uppercase text-lg font-medium flex md:space-x-6 sm:space-x-4">
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
