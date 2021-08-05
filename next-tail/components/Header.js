import Image from "next/image";
import Logo from "../public/assets/logo.svg";

function Header() {
  return (
    <header>
      {/* Left Section */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Right Section */}
      <div></div>
    </header>
  );
}

export default Header;
