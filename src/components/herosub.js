import React from "react";
import "../styles/hero.css";

const Herosub = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-10">
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <a href="/" aria-label="View item" title="View item">
          <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
            <div className="h-full p-5 rounded-r shadow-sm">
              <h6 className="mb-2  font-semibold text-white leading-5">
                Traditional marriage ceremony
              </h6>
              <p className="text-sm text-white font-light">
                <span className="font-semibold">Date:</span> 15th September,
                2022 <br />
                <span className="font-semibold">Time:</span> 10:00 AM <br />
                <span className="font-semibold">Venue:</span> Asofan -
                GW-0639-3546
              </p>
            </div>
          </div>
        </a>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              Wedding ceremony
            </h6>
            <p className="text-sm text-white font-light">
              <span className="font-semibold">Date:</span> 17th September, 2022{" "}
              <br />
              <span className="font-semibold">Time:</span> 1:30 PM <br />
              <span className="font-semibold">Venue:</span> ICGC Christ Temple
              West-Abossey Okai
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              Reception
            </h6>
            <p className="text-sm text-white font-light">
              <span className="font-semibold">Venue:</span> Accra Digital Center
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              Sunday Lunch
            </h6>
            <p className="text-sm text-white font-light">
              <span className="font-semibold">Date:</span> 18th September, 2022{" "}
              <br />
              <span className="font-semibold">Time:</span> 1:00 PM <br />
              <span className="font-semibold">Venue:</span> Asofan -
              GW-0639-3546
            </p>
          </div>
        </div>
        {/* <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              The Couple
            </h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">Gallery</h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              Wedding Party
            </h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              Registry
            </h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">
              Event Coordinators
            </h6>
          </div>
        </div>
        <div className="duration-300 transform bg-white  hover:-translate-y-2 glass">
          <div className="h-full p-5 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold text-white leading-5">RSVP</h6>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Herosub;
