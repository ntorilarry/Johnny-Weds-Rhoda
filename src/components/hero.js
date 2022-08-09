import React from "react";
import Background from "../assets/backg.jpg";
import "../styles/hero.css";
import Herosub from "./herosub";
import Navbar from "./navbar";

function Hero() {
  return (
    <div id="home">
      <div
        className="bg-deep-purple-accent-700 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="relative bg-gray-900 bg-opacity-80">
          <Navbar />
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <a href="/" className="mb-6 sm:mx-auto">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400"></div>
                </a>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-5xl  leading-none tracking-tight text-white sm:text-7xl md:mx-auto h-header">
                    Johnny & Rhoda
                  </h2>
                  <p className="text-sm text-indigo-100 md:text-sm">
                    The wedding of Johnny Otabil Aggrey and Rhoda Naa Adorkor
                    Addo humbly request your presence at their traditional
                    marriage and wedding ceremony
                  </p>
                </div>
                <Herosub />
                <div>
                  <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
