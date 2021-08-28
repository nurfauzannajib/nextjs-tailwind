import React from "react";
import Image from "next/image";
import Kampus from "../public/assets/kampusmerdeka.svg";
import Unm from "../public/assets/unmlogo.svg";
import Sulsel from "../public/assets/sulsellogo.svg";

function Support() {
  return (
    <div>
      <div className="flex justify-center gap-36 bg-blue-450 h-full py-14 mt-72">
        <Image src={Kampus} />
        <Image src={Unm} />
        <Image src={Sulsel} />
      </div>
    </div>
  );
}

export default Support;
