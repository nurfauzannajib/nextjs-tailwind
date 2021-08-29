import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";

function Footer() {
  return (
    <div className="mt-20 mb-40">
      <div className="container grid items-center mx-auto grid-cols-4 font-semibold font-mono">
        <div className="relative items-center h-8 cursor-pointer my-auto">
          <Image
            src={Logo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div>
          <h1 className="font-semibold font-mono text-lg text-grey-10">
            Layanan
          </h1>
          <span className="absolute mt-3 font-serif font-light text-grey-10">
            <p>Monitoring Air</p>
            <p>Monitoring Udara</p>
            <p>Monitoring Emisi</p>
          </span>
        </div>
        <div>
          <h1>Support</h1>
          <span className="absolute mt-3 font-serif font-light text-grey-10">
            <p>Bantuan</p>
            <p>Frequently Asked Questions (FAQ)</p>
          </span>
        </div>
        <div>
          <h1>Tentang Kami</h1>
          <span className="absolute mt-3 font-serif font-light text-grey-10"></span>
        </div>
      </div>
    </div>
  );
}

export function FooterEnd() {
  return (
    <div className="flex items-center justify-center">
      <h1>Makassar</h1>
    </div>
  );
}

export default Footer;
