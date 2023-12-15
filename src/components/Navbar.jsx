import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className="bg-[#6B3CC9] border-gray-200 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <img
            src="../../images/Logo.png"
            className="w-[238.89px] h-[40px]"
            alt="AT Digital logo"
          />

          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#6B3CC9] focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#services"
                  className="uppercase block text-sm py-2 px-3 text-white font-medium font-inter rounded hover:bg-violet-800 md:hover:bg-transparent md:border-0  md:p-0 "
                  aria-current="page"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="uppercase block text-sm py-2 px-3 text-white font-medium font-inter rounded hover:bg-violet-800 md:hover:bg-transparent md:border-0  md:p-0 "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="uppercase block text-sm py-2 px-3 text-white font-medium font-inter rounded hover:bg-violet-800 md:hover:bg-transparent md:border-0  md:p-0  "
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="uppercase block text-sm py-2 px-3 text-white font-medium font-inter rounded hover:bg-violet-800 md:hover:bg-transparent md:border-0  md:p-0  "
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
