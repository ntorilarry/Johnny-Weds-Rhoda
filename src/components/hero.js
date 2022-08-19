import React from "react";
import "../styles/hero.css";
import Herosub from "./herosub";
import Navbar from "./navbar";

function Hero() {
  return (
    <div id="home">
      <div className="bg-deep-purple-accent-700 bgr">
        <div className="relative bg-gray-900 bg-opacity-80">
          <Navbar />
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-5xl sm:mx-auto lg:max-w-6xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-5xl text-center leading-none tracking-tight text-white sm:text-7xl md:mx-auto h-header">
                    Johnny & Rhoda
                  </h2>
                  <p className="text-sm text-center font-light text-indigo-100 md:text-sm">
                    we humbly request your presence at our traditional marriage
                    and wedding ceremony
                  </p>
                </div>
                <Herosub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
