import React from "react";
import Couple from "../assets/couple.jpg";
import "../styles/couples.css"

function Couples() {
  return (
    <div className="bgcoup">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-3xl font-semibold leading-none">
              The Couple
            </h5>
            <p className="mb-6 text-justify text-gray-900 text-sm">
              If we had it our way, all of us would be on a pontoon gambling
              boat this weekend with Dark and Stormy’s in hand, setting sail for
              80 degree weather. Since our parents have been patiently waiting
              for a ceremony though, we decided June nuptials on the edge of the
              world (Montauk feels like earth’s end, no?) would suffice. There
              are plenty of wish lanterns to be lit and bottles of champagne
              waiting to be popped – all we need are your lovely faces.
            </p>
            <hr className="mb-5 border-gray-300" />
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={Couple}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couples;
