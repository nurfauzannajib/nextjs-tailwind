import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Ava1 from "../public/assets/avatar/Avatar.svg";
import Ava2 from "../public/assets/avatar/Avatar (1).svg";
import Ava3 from "../public/assets/avatar/Avatar (2).svg";
import Ava4 from "../public/assets/avatar/Avatar (3).svg";
import Ava5 from "../public/assets/avatar/Avatar (5).svg";
import Ava6 from "../public/assets/avatar/Avatar (4).svg";

function OurTeam() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Coba1 />
        </div>
        <div>
          <Coba2 />
        </div>
      </Carousel>
    </div>
  );
}

export function Coba1() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-blue-450">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className=" px-10 h-full flex flex-col items-center text-center">
                <div className="h-40 w-40">
                  <Image src={Ava1} />
                </div>
                <div className="w-full">
                  <h2 className="font-bold text-3xl font-mono text-grey-10 pt-5">
                    Muh. Ayat Hidayat
                  </h2>
                  <h3 className="font-serif font-light text-lg text-grey-10 pt-3">
                    Project Lead
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <div className=" px-10 h-full flex flex-col items-center text-center">
                    <div className="h-40 w-40">
                      <Image src={Ava2} />
                    </div>
                    <div className="w-full">
                      <h2 className="font-bold text-3xl font-mono text-grey-10 pt-5">
                        Salahuddin Sheva
                      </h2>
                      <h3 className="font-serif font-light text-lg text-grey-10 pt-3">
                        Embedded System
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <div className=" px-10 h-full flex flex-col items-center text-center">
                    <div className="h-40 w-40">
                      <Image src={Ava3} />
                    </div>
                    <div className="w-full">
                      <h2 className="font-bold text-3xl font-mono text-grey-10 pt-5">
                        Nur Fauzan Najib
                      </h2>
                      <h3 className="font-serif font-light text-lg text-grey-10 pt-3">
                        Front End Developer
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Coba2() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-blue-450">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className=" px-10 h-full flex flex-col items-center text-center">
                <div className="h-40 w-40">
                  <Image src={Ava5} />
                </div>
                <div className="w-full">
                  <h2 className="font-bold text-3xl font-mono text-grey-10 pt-5">
                    Zulhijaya
                  </h2>
                  <h3 className="font-serif font-light text-lg text-grey-10 pt-3">
                    Back-End Developer
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <div className=" px-10 h-full flex flex-col items-center text-center">
                    <div className="h-40 w-40">
                      <Image src={Ava4} />
                    </div>
                    <div className="w-full">
                      <h2 className="font-bold text-3xl font-mono text-grey-10 pt-5">
                        Haslina
                      </h2>
                      <h3 className="font-serif font-light text-lg text-grey-10 pt-3">
                        Researcher
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <div className="w-full">
                  <div className=" px-10 h-full flex flex-col items-center text-center">
                    <div className="h-40 w-40">
                      <Image src={Ava6} />
                    </div>
                    <div className="w-full">
                      <h2 className="font-bold text-3xl font-mono text-grey-10 pt-5">
                        Atikah Salsabila
                      </h2>
                      <h3 className="font-serif font-light text-lg text-grey-10 pt-3">
                        Researcher
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default OurTeam;
