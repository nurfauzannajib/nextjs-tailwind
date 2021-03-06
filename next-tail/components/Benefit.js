import React from "react";
import Image from "next/image";
import Send from "../public/assets/Frame.svg";
import Database from "../public/assets/Database.svg";
import Monitor from "../public/assets/Monitor.svg";
function Benefit() {
  return (
    <div>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="text-6xl sm:text-6xl font-bold text-grey-10 font-mono">
              how it works?
            </h1>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mx-auto">
              <div className="flex rounded-lg h-24 overflow-hidden justify-center">
                <Image src={Send} />
              </div>
              <h2 className="flex justify-center text-2xl font-semibold font-mono text-grey-10 mt-5">
                Send Data
              </h2>
              <p className="text-center text-grey-10 font-serif font-light mt-2">
                Alat akan mengirim data-data melalui sensor yang ditempatkan di
                lapangan.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mx-auto">
              <div className="flex rounded-lg h-24 overflow-hidden justify-center">
                <Image src={Database} />
              </div>
              <h2 className="flex justify-center text-2xl font-semibold font-mono text-grey-10 mt-5">
                Save Data
              </h2>
              <p className="text-center text-grey-10 font-serif font-light mt-2">
                Data kemudian akan disimpan untuk digenerate menjadi file siap
                pakai.
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 mx-auto">
              <div className="flex rounded-lg h-24 overflow-hidden justify-center">
                <Image src={Monitor} />
              </div>
              <h2 className="flex justify-center text-2xl font-semibold font-mono text-grey-10 mt-5">
                Send Data
              </h2>
              <p className="text-center text-grey-10 font-serif font-light mt-2">
                Terakhir data akan ditampilkan dalam bentuk grafik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Benefit;
