import React from "react";
import Couple from "../assets/couple.jpg";
import "../styles/couples.css";
import Navbar from "./navbar";

function Couples() {
  return (
    <div className="bg-[#713C25] bgcoup">
      <div className="text-black">
        <Navbar />
      </div>
      <section class="text-white body-font">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={Couple}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-white text-3xl">
                    Johnny Otabil Aggrey and Rhoda Naa Adorkor Addo
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  {/* <p class="text-sm">
                    Johnny Otabil Aggrey and Rhoda Naa Adorkor Addo
                  </p> */}
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-white sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-sm mb-4 text-white ">
                  If we had it our way, all of us would be on a pontoon gambling
                  boat this weekend with Dark and Stormy’s in hand, setting sail
                  for 80 degree weather. Since our parents have been patiently
                  waiting for a ceremony though, we decided June nuptials on the
                  edge of the world (Montauk feels like earth’s end, no?) would
                  suffice. There are plenty of wish lanterns to be lit and
                  bottles of champagne waiting to be popped – all we need are
                  your lovely faces..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Couples;
