import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2c3e50] md:fixed w-full z-10">
        <div className=" text-white md:py-8 py-4 sm:px-24 px-3 lg:px-44 flex justify-between items-center">
          <Link to="">
            <h1 className="font-bold text-2xl md:text-3xl sm:me-5 md:m-0">
              START FRAMEWORK
            </h1>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <div id="navbar-default" className="hidden w-full md:block md:w-auto">
            <ul className="uppercase text-sm md:text-lg font-medium flex flex-col md:flex-row md:space-x-6 space-x-4">
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
        </div>
      </nav>
    </>
  );
}
