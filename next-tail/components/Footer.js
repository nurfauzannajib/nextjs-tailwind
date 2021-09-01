import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import Heart from "../public/assets/heart 1.svg";

function Footer() {
  return (
    <div>
      <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700">
        <div class="container mx-auto px-6">
          <div class="sm:flex sm:mt-8">
            <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div class="flex flex-col mb-5">
                <div className="flex items-start h-8 w-36 cursor-pointer my-0">
                  <Image src={Logo} />
                </div>
              </div>
              <div class="flex flex-col">
                <span class="font-semibold font-mono text-lg text-grey-10">
                  Layanan
                </span>
                <span class="mt-3">
                  <a href="#" class="font-serif font-light text-grey-10">
                    Monitoring air
                  </a>
                </span>
                <span class="">
                  <a href="#" class="font-serif font-light text-grey-10">
                    Monitoring Udara
                  </a>
                </span>
                <span class="">
                  <a href="#" class="font-serif font-light text-grey-10">
                    Monitoring Emisi
                  </a>
                </span>
              </div>

              <div class="flex flex-col">
                <span class="font-semibold font-mono text-lg text-grey-10">
                  Support
                </span>
                <span class="mt-3">
                  <a href="#" class="font-serif font-light text-grey-10">
                    Bantuan
                  </a>
                </span>
                <span class="">
                  <a href="#" class="font-serif font-light text-grey-10">
                    Frequently Asked Questions (FAQ)
                  </a>
                </span>
              </div>

              <div class="flex flex-col">
                <span class="font-semibold font-mono text-lg text-grey-10">
                  Tentang Kami
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-xs font-thin font-mono text-grey-10">
                Copyright © 2021 by GreTech Team
                <div className="ml-2 inline-flex">
                  <Image src={Heart} />
                </div>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function FooterEnd() {
  return <div></div>;
}

export default Footer;
