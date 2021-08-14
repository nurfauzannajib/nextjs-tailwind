import Image from "next/image";
import Logo from "../public/assets/logo.svg";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-6 md:px-10">
      {/* Left Section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle Section */}
      <div>
        <ul className="flex items-center gap-10 justify-center p-3">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Services</button>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div></div>
    </header>
  );
}

export default Header;
