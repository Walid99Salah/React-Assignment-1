import React from "react";
import house from "../../assets/images/poert1.png";
import cake from "../../assets/images/port2.png";
import flag from "../../assets/images/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="container mx-auto bg-white md:px-16 px-4">
        <div className="flex flex-col text-[#2c3e50] items-center">
          <h1 className="text-4xl text-center uppercase font-bold md:mt-32 sm:mt-12">
            portfolio component
          </h1>
          <div className="flex">
            <div className="w-20 bg-[#2c3e50] h-[3px] mt-6 me-4"></div>
            <i className="fa-solid fa-star mt-4"></i>
            <div className="w-20 bg-[#2c3e50] h-[3px] mt-6 ms-4"></div>
          </div>
        </div>
        <div className="flex flex-wrap mt-2 md:px-20">
          <div className="md:w-1/3 md:p-5 p-2">
            <div className="relative">
              <img src={house} alt="portPhoto" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition-all duration-500 bg-opacity-85 rounded-md flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:p-5 p-2">
            <div className="relative">
              <img src={cake} alt="portPhoto" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition-all duration-500 bg-opacity-85 rounded-md flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:p-5 p-2">
            <div className="relative">
              <img src={flag} alt="portPhoto" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition-all duration-500 bg-opacity-85 rounded-md flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:p-5 p-2">
            <div className="relative">
              <img src={house} alt="portPhoto" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition-all duration-500 bg-opacity-85 rounded-md flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:p-5 p-2">
            <div className="relative">
              <img src={cake} alt="portPhoto" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition-all duration-500 bg-opacity-85 rounded-md flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:p-5 p-2">
            <div className="relative">
              <img src={flag} alt="portPhoto" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#1abc9ce6] opacity-0 hover:opacity-100 transition-all duration-500 bg-opacity-85 rounded-md flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
