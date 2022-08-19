import React from "react";
import "../styles/location.css";

function Location() {
  return (
    <div>
      <h2 className="max-w-lg mb-6 font-sans text-5xl text-center leading-none tracking-tight text-white sm:text-7xl md:mx-auto h-header">
        Location
      </h2>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
               Loation
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Christ Temple, International Central Gospel Church
                </h1>
                {/* <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p> */}
                <a href="https://goo.gl/maps/PKhcnHw3X9755Vxh7" class="text-indigo-500 inline-flex items-center">
                 View Loation
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Ennui Snackwave Thundercats
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Selvage Poke Waistcoat Godard
                </h1>
                <p class="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Location;
