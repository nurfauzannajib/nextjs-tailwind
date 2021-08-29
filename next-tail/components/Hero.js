import Image from "next/image";
import Banner from "../public/assets/hero1.svg";

function Hero() {
  return (
    <div className="container">
      <div className="mt-20 lg:absolute lg:inset-y-0 lg:right-0 hidden md:block sm:block">
        <Image src={Banner} />
      </div>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-28 ">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-grey-10 sm:text-5xl md:text-6xl font-mono">
            <span className="block xl:inline">
              ukur kualitas udara
              <br /> dan air dengan mudah
            </span>
          </h1>
          <p className="mt-10 text-base text-grey-10 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:mt-10 font-serif font-light">
            solusi pengukuran kualitas udara dan air menggunakan teknologi
            Internet of Things (IoT) teritegrasi dan real-time dengan sensor
            yang akurasinya mencapai 92%
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start lg:mt-10">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-grey-10 bg-blue-420 hover:bg-blue-800 md:py-4 md:text-lg md:px-10 font-serif"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-grey-10 bg-blue-450 hover:bg-indigo-300 md:py-4 md:text-lg md:px-10 font-serif"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
