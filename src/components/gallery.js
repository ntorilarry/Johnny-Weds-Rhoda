import React from "react";
import Gal1 from "../assets/IMG_3110.jpg";
import Gal2 from "../assets/IMG_3114.jpg";
import Gal3 from "../assets/IMG_3119.jpg";
import Gal4 from "../assets/IMG_3125-1.jpg";
import Gal5 from "../assets/IMG_3158_1.jpg";
import Gal6 from "../assets/IMG_3171.jpg";
import Gal7 from "../assets/IMG_3190.jpg";
import Gal8 from "../assets/IMG_3201.jpg";
import Gal9 from "../assets/IMG_3216.jpg";
import Gal10 from "../assets/IMG_3256.jpg";
import Gal11 from "../assets/3B9A9417-min.JPG";
import Gal12 from "../assets/3B9A9420-min.JPG";
import Gal13 from "../assets/3B9A9422 2-min.JPG";
import Gal14 from "../assets/3B9A9610-min.JPG";
import Gal15 from "../assets/3B9A9611-min.JPG";
import Gal16 from "../assets/3B9A9613-min.JPG";
import Gal17 from "../assets/3B9A9619-min.JPG";
import Navbar from "./navbar";
import "../styles/couples.css";

function Gallery() {
  return (
    <div className="bg-[#BE6C42] ">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="grid max-w-4xl mx-auto p-8">
          <h1 className="text-3xl p-6 text-white mx-auto">Gallery</h1>
          <img className="w-full block rounded-b" src={Gal1} alt="A" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal2} alt="B" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal3} alt="C" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal4} alt="D" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal5} alt="E" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal6} alt="F" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal7} alt="G" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal8} alt="H" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal9} alt="I" />

          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal10} alt="J" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal11} alt="K" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal12} alt="L" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal13} alt="M" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal14} alt="N" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal15} alt="O" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal16} alt="P" />
          <div className="text-3xl p-6"></div>
          <img className="w-full block rounded-b" src={Gal17} alt="Q" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
