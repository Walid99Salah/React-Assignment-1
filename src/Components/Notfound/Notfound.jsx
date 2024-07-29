import React from "react";

export default function Notfound() {
  return (
    <>
      <div className="flex flex-col h-screen  justify-center items-center">
        <h1 className="text-6xl">Not Found</h1>
        <p className="text-lg">This page doesn’t exist.</p>
        <p className="text-lg">
          If this is a mistake, let us know, and we will try to fix it!{" "}
        </p>
      </div>
    </>
  );
}
