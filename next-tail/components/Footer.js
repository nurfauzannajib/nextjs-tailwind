import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import Heart from "../public/assets/heart 1.svg";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-5">
                <div className="flex items-start h-8 w-36 cursor-pointer my-0">
                  <Image src={Logo} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold font-mono text-lg text-grey-10">
                  Layanan
                </span>
                <span className="mt-2">
                  <a href="#" className="font-serif font-light text-grey-10">
                    Monitoring air
                  </a>
                </span>
                <span className="">
                  <a href="#" className="font-serif font-light text-grey-10">
                    Monitoring Udara
                  </a>
                </span>
                <span className="">
                  <a href="#" className="font-serif font-light text-grey-10">
                    Monitoring Emisi
                  </a>
                </span>
              </div>

              <div className="flex flex-col mt-3">
                <span className="font-semibold font-mono text-lg text-grey-10">
                  Support
                </span>
                <span className="mt-2">
                  <a href="#" className="font-serif font-light text-grey-10">
                    Bantuan
                  </a>
                </span>
                <span className="">
                  <a href="#" className="font-serif font-light text-grey-10">
                    Frequently Asked Questions (FAQ)
                  </a>
                </span>
              </div>

              <div className="flex flex-col mt-3">
                <span className="font-semibold font-mono text-lg text-grey-10">
                  Tentang Kami
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function FooterEnd() {
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-xs font-thin font-mono text-grey-10">
              Copyright © 2021 by GreTech Team
              <div className="ml-2 inline-flex">
                <Image src={Heart} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
