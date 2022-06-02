import React from "react";
import Herobg from "../assets/herobg.jpg";
import Wedpic from "../assets/abekurhoda.jpeg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Facts() {
  return (
    <div
      className="relative bg-gray-50 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Data to enrich your</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                online business
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start"></div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={Wedpic}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
export default Facts;
