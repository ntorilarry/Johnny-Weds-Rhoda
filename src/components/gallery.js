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
import Navbar from "./navbar";

function Gallery() {
  return (
    <div className="bg-[#713C25]">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="grid max-w-4xl mx-auto p-8">
          <h1 className="text-3xl p-6 text-white mx-auto">Gallery</h1>
          <img
            className="w-full block rounded-b"
            src={Gal1}
            alt="A photo of a fox"
          />
          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal2}
            alt="A photo of a woman"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal3}
            alt="A photo of some reeds"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal4}
            alt="A photo of a man"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal5}
            alt="A photo of a forest"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal6}
            alt="A photo of a bird"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal7}
            alt="A photo of a bird"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal8}
            alt="A photo of a bird"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal9}
            alt="A photo of a bird"
          />

          <div className="text-3xl p-6"></div>
          <img
            className="w-full block rounded-b"
            src={Gal10}
            alt="A photo of a bird"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
