import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";

function Footer() {
  return (
    <div>
      <div className="container grid items-center mx-auto grid-cols-4 font-semibold font-mono">
        <div className="relative flex items-center h-8 cursor-pointer my-auto">
          {/* <Image
            src={Logo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
