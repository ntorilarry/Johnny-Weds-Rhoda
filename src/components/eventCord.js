import React from "react";
import Navbar from "./navbar";
import Aba from "../assets/Aba Takyiwaa Osam.png";
import Tagoe from "../assets/thelma tagoe.png";

function EventCord() {
  return (
    <div className="bg-[#BE6C42]">
      <Navbar />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={Aba}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-white">
                Aba Takyiwaa Osam-Tewiah
              </p>
              <p className="mb-5 text-xs text-white">Event Coordinator 1</p>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded"
                src={Tagoe}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-white">Thelma Tagoe</p>
              <p className="mb-5 text-xs text-white">Event Coordinator 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCord;
