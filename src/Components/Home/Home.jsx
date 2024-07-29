import React from "react";
import pic from "../../assets/images/jarji5l9.png";

export default function Home() {
  return (
    <>
      <div className="h-screen text-gray-100 flex justify-center items-center flex-col bg-[#1abc9c]">
        <img className="w-64" src={pic} alt="homeImage" />
        <h1 className="text-5xl font-bold mt-6">start Framework</h1>
        <div className="flex">
          <div className="w-20 bg-white h-1 mt-6 me-5"></div>
          <i className="fa-solid fa-star mt-4"></i>
          <div className="w-20 bg-white h-1 mt-6 ms-5"></div>
        </div>
        <span className="mt-4">
          Graphic Artist - Web Designer - Illustrator
        </span>
      </div>
    </>
  );
}
