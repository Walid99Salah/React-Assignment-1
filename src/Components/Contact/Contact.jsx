import React from "react";

export default function Contact() {
  return (
    <>
      <div className="bg-white h-screen container mx-auto px-16">
        <div className="flex flex-col text-[#2c3e50] items-center">
          <h1 className="text-4xl text-center uppercase font-bold md:mt-32 sm:mt-12">
            conatct section
          </h1>
          <div className="flex">
          <div className="w-20 bg-[#2c3e50] h-[3px] mt-6 me-4"></div>
            <i className="fa-solid fa-star mt-4"></i>
            <div className="w-20 bg-[#2c3e50] h-[3px] mt-6 ms-4"></div>
          </div>
          <div className="md:w-[55%] w-full">
            <div className="mt-20">
              <input type="text" className="bg-white px-2 border-b-2 w-full text-sm rounded-md placeholder:text-gray-500 py-2" placeholder="userName"/>
            </div>
            <div className="mt-3">
              <input type="number" className="bg-white px-2 border-b-2 w-full text-sm mt-5 rounded-md placeholder:text-gray-500 py-2" placeholder="userAge"/>
            </div>
            <div className="mt-3">
              <input type="email" className="bg-white px-2 border-b-2 w-full text-sm mt-5 rounded-md placeholder:text-gray-500 py-2" placeholder="userEmail"/>
            </div>
            <div className="mt-3">
              <input type="number" className="bg-white px-2 border-b-2 w-full text-sm mt-5 rounded-md placeholder:text-gray-500 py-2" placeholder="userPassword"/>
            </div>
            <button className="bg-[#1abc9c] text-white p-2 mt-5 rounded-md"> send Message </button>
          </div>
        </div>
      </div>
    </>
  );
}
