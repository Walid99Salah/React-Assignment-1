import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2c3e50] text-white p-8">
        <div className="flex flex-wrap justify-center">

          <div className="md:w-1/3 p-3">
            <div className="flex justify-center px-20 py-10 items-center flex-col">
              <h3 className="text-2xl font-bold">LOCATION</h3>
              <p className="mt-2">2215 John Daniel Drive</p>
              <p className="mt-2">Clark, MO 65243</p>
            </div>
          </div>

          <div className="md:w-1/3 p-3">
            <div className="flex justify-center px-20 py-10 items-center flex-col">
              <h3 className="text-2xl font-bold">AROUND THE WEB</h3>
              <div className="flex mt-2">
                <div className="rounded-full m-1 text-lg p-3 flex justify-center items-center border border-white"><i className="fa-brands fa-facebook"></i></div>
                <div className="rounded-full m-1 text-lg p-3 flex justify-center items-center border border-white"><i className="fa-brands fa-twitter"></i></div>
                <div className="rounded-full m-1 text-lg p-3 flex justify-center items-center border border-white"><i className="fa-brands fa-linkedin-in"></i></div>
                <div className="rounded-full m-1 text-lg p-3 flex justify-center items-center border border-white"><i className="fa-solid fa-globe"></i></div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 p-3">
            <div className="flex justify-center px-20 py-10 items-center flex-col">
              <h3 className="text-2xl font-bold">ABOUT FREELANCER</h3>
              <p className="my-4 text-sm text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a252f] text-center text-white py-3">Copyright © Your Website 2021</div>

    </>
  );
}
