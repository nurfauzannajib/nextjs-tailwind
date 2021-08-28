import React from "react";
import Image from "next/image";
import Air from "../public/assets/air.svg";
import Emisi from "../public/assets/emisi4.svg";
import Udara from "../public/assets/udara.svg";
import Energy from "../public/assets/energy.svg";
import Green from "../public/assets/green.svg";

function Service() {
  return (
    <div className="mt-20">
      <div className="container grid items-center mx-auto grid-cols-4 font-semibold font-mono">
        <h1 className="text-4xl text-grey-10">
          service yang <br /> kami sediakan
        </h1>
        <Image src={Air} />
        <Image src={Udara} />
        <Image src={Emisi} />
      </div>
      <div className="mt-4 container grid items-center mx-auto grid-cols-4 font-light gap-10 text-grey-10">
        <span>
          <p className="relative text-lg font-serif font-light text-grey-10">
            semua layanan dapat diakses <br />
            secara real-time 24 jam!
          </p>
          <div className="mt-6 flex items-center">
            <Image src={Energy} />
            <p className="text-xs ml-2 font-mono font-light text-grey-10">
              Ramah <br /> Lingkungan
            </p>
            <div className="flex items-center ml-3">
              <Image src={Green} />
              <p className="text-xs ml-2 font-mono font-light text-grey-10">
                Energy <br />
                Solar Cell
              </p>
            </div>
          </div>
        </span>
        <span className="ml-36">
          <p className=" font-medium text-xl font-mono text-grey-10">
            Monitoring Udara
          </p>
          <p className="mt-4 font-serif font-light text-grey-10 ">
            Monitoring parameter
            <br />
            fisik berbagai jenis <br />
            air dari air bersih <br />
            sampai limbah.
          </p>
        </span>
        <span className="ml-32">
          <p className=" font-medium text-xl font-mono text-grey-10">
            Monitoring Air
          </p>
          <p className="mt-4 font-serif font-light text-grey-10">
            Monitoring gas-gas
            <br />
            pencemar udara
            <br />
            ambien seperti <br />
            NO2, SO2, O3 dll.
          </p>
        </span>

        <span className="ml-32">
          <p className=" font-medium font-mono text-xl">Monitoring Emisi</p>
          <p className="mt-4 font-serif font-light text-grey-10">
            Monitoring emisi gas <br />
            buang yang berasal <br />
            dari genset, boiler, <br />
            kendaraan dll.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Service;
