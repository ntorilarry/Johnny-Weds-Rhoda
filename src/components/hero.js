import React from "react";
import Background from "../assets/backg.jpg";
import "../styles/hero.css";

function Hero() {
  return (
    <div id="home">
      <div className="w-full h-[90vh] top-[90px]">
        <div
          className="w-full h-[90vh] bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="w-full h-[100%] flex flex-col justify-center items-center text-white px-4 text-center">
            <h1 className="bride_name_heading">
              Johnny <br />{" "}
              <span className="bride_name_sub">Otabil Aggrey</span>{" "}
            </h1>
            <p className="bride_name_and">&</p>
            <h1 className="groom_name_heading">
              Rhoda <br />{" "}
              <span className="groom_name_sub">Naa Adorkor Addo</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
