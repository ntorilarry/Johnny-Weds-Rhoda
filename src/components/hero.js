import React from "react";
import Background from "../assets/bgggg.jpg";
import "../styles/hero.css";
import Navbar from "./navbar";

function Hero() {
  return (
    <div id="home">
      <div
        className="w-full h-[100vh] top-[90px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Navbar/>
        <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
          <div className="flex flex-col items-center max-w-2xl md:px-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-4xl leading-none tracking-tight text-gray-900 sm:text-7xl md:mx-auto h-header">
                Johnny & Rhoda
              </h2>
              <p className="text-sm text-gray-700 md:text-md">
                The wedding of Johnny and Rhoda humbly request your presence at
                their traditional marriage ceremony
              </p>
            </div>
            {/* <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p> */}
          </div>
          <img
            src="https://kitwind.io/assets/kometa/half-browser.png"
            className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
