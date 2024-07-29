import React from "react";

export default function About() {
  return (
    <>
      <div className="h-screen text-gray-100 flex justify-center items-center flex-col bg-[#1abc9c]">
        <h1 className="text-4xl uppercase font-bold mt-6">about component</h1>
        <div className="flex">
          <div className="w-20 bg-white h-[4px] mt-6 me-4"></div>
          <i className="fa-solid fa-star mt-4"></i>
          <div className="w-20 bg-white h-[4px] mt-6 ms-4"></div>
        </div>
        <div className="flex w-[65%] mt-4">
          <p className="text-sm">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="text-sm">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
