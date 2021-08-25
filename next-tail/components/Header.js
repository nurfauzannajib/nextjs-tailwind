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
        <ul className="items-center gap-14 justify-center p-3 hidden md:flex">
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

      {/* Button End */}
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-2 border-2 p-1 rounded-md border-blue-500">
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
