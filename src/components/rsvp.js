import React from "react";
import Navbar from "./navbar";

function Rsvp() {
  return (
    <div className="bg-[#BE6C42]">
      <Navbar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="max-w-lg mb-6 font-semibold text-3xl text-center leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          RSVP
        </h2>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-transparent rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold text-white leading-5">
                  Leslie N.A. Addo Listowell
                </h6>
              </div>
              <p className="mb-2 text-sm text-white">0264622250</p>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-transparent rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold text-white leading-5">
                  Thelma Tagoe
                </h6>
              </div>
              <p className="mb-2 text-sm text-white">0244504547</p>
            </div>
          </div>
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 bg-transparent rounded-sm">
              <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                <h6 className="font-semibold text-white leading-5">
                  Winnifred A. Aggrey
                </h6>
              </div>
              <p className="mb-2 text-sm text-white">0556147323</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
