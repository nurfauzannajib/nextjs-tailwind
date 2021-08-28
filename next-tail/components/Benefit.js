import React from "react";
import Image from "next/image";
import Send from "../public/assets/Frame.svg";
import Database from "../public/assets/Database.svg";
import Monitor from "../public/assets/Monitor.svg";

function Benefit() {
  return (
    <div>
      <div className="m-20 flex justify-center text-6xl text-gray-600">
        <h1>How it Works?</h1>
      </div>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28 flex justify-between">
        <div>
          <Image src={Send} />
          <p>Send Data</p>
        </div>
        <Image src={Database} />
        <Image src={Monitor} />
      </div>
    </div>
  );
}

export default Benefit;
