import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/navbar.css";
import Logo from "../assets/monogram.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-transparent instaNav">
      <div className=" mx-auto px-4 flex justify-between items-center h-full navNEW">
        <div>
          <a href="/">
            <img src={Logo} alt="" style={{ width: "60px" }} />
          </a>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center">
            <li className="n-link">
              <a href="/#vas">VAS</a>
            </li>
            <li className="n-link">
              {" "}
              <a href="/#about">About</a>
            </li>
            <li className="n-link">
              {" "}
              <a href="/#connectWithUs">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-[#d3b580]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[#d3b580]" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-transparent text-white absolute top-[70px] left-0 flex justify-center text-center z-10"
              : "absolute left-[-100%] z-10"
          }
        >
          <ul>
            <li>
              {" "}
              <a className="text-xl" href="/#vas">
                VAS
              </a>
            </li>
            <li>
              {" "}
              <a className="text-xl" href="/#about">
                About
              </a>
            </li>
            <li>
              {" "}
              <a className="text-xl" href="/#connectWithUs">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
