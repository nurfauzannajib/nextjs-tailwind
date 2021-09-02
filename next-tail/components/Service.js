import React from "react";
import Image from "next/image";
import Air from "../public/assets/air.svg";
import Emisi from "../public/assets/emisi4.svg";
import Udara from "../public/assets/udara.svg";
import Energy from "../public/assets/energy.svg";
import Green from "../public/assets/green.svg";

function Service() {
  return (
    <div className="mt-24">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="p-5 rounded-lg">
                <h2 className="text-4xl text-grey-10 font-semibold font-mono title-font mb-4">
                  service yang kami sediakan
                </h2>
                <p className="text-lg font-mono font-light text-grey-10">
                  semua layanan dapat diakses secara real-time 24 jam!
                </p>
                <div className="mt-4 flex items-center">
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
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image src={Air} />
                <h2 className="font-medium text-xl font-mono text-grey-10 pt-3">
                  Monitoring Udara
                </h2>
                <p className="font-serif font-light text-grey-10 pt-3">
                  Monitoring parameter fisik berbagai jenis air dari air bersih
                  sampai limbah
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <Image src={Udara} />
                <h2 className="font-medium text-xl font-mono text-grey-10 pt-3">
                  Monitoring Udara
                </h2>
                <p className="font-serif font-light text-grey-10 pt-3">
                  Monitoring parameter fisik berbagai jenis air dari air bersih
                  sampai limbah
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <Image src={Emisi} />
                <h2 className="font-medium text-xl font-mono text-grey-10 pt-3">
                  Monitoring Udara
                </h2>
                <p className="font-serif font-light text-grey-10 pt-3">
                  Monitoring parameter fisik berbagai jenis air dari air bersih
                  sampai limbah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
