import React from "react";
import Image from "next/image";
import Send from "../public/assets/Frame.svg";
import Database from "../public/assets/Database.svg";
import Monitor from "../public/assets/Monitor.svg";
function Benefit() {
  return (
    <div>
      <div className="m-20 flex justify-center text-6xl font-bold text-gray-500">
        <h1>How it Works?</h1>
      </div>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28 flex justify-between">
        <div>
          <Image src={Send} />
          <h2 className="-ml-14 flex justify-center text-2xl font-semibold">
            Send Data
          </h2>
          <p className="-ml-14 mt-4 text-center text-gray-400">
            Alat akan mengirim data-data
            <br /> melalui sensor yang ditempatkan <br />
            di lapangan.
          </p>
        </div>
        <div className="m-0">
          <Image src={Database} />
          <h2 className="ml-1.5 flex text-2xl font-semibold">Save Data</h2>
          <p className="-ml-12 mt-4 text-center text-gray-400">
            Data kemudian akan disimpan
            <br /> untuk digenerate menjadi file <br />
            siap pakai.
          </p>
        </div>
        <div>
          <Image src={Monitor} />
          <h2 className="-ml-1 flex text-2xl font-semibold">Display Data</h2>
          <p className="-ml-12 mt-4 text-center text-gray-400">
            Terakhir data akan ditampilkan
            <br /> dalam bentuk grafik.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
