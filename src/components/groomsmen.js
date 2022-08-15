import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Airtime from "../assets/Airtime.png";
import Andy from "../assets/andy.png";
import Dennis from "../assets/dennis.png";
import Emmanuel from "../assets/emmanuel.png";
import Kwesi from "../assets/Kwesi Nana.png";
import Michael from "../assets/michael.png";
import Nick from "../assets/Nick.png";
import Osei from "../assets/Osei Yaw.png";
import Ray from "../assets/Ray.png";

import "../styles/groomsmen.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
class Groomsmen extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Airtime",
        imageUrl: Airtime,
      },
      { id: 2, title: "Andy", imageUrl: Andy },
      { id: 3, title: "Dennis", imageUrl: Dennis },
      { id: 4, title: "Emmanuel", imageUrl: Emmanuel },
      { id: 5, title: "Kwesi Nana", imageUrl: Kwesi },
      {
        id: 6,
        title: "Michael",
        imageUrl: Michael,
      },
      {
        id: 7,
        title: "Ray",
        imageUrl: Ray,
      },
      {
        id: 8,
        title: "Nick",
        imageUrl: Nick,
      },
      {
        id: 9,
        title: "Osei",
        imageUrl: Osei,
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className="bg-[#E6D9BF]">
        <div
          className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8"
          id="groomsmen"
        >
          <h2 className="max-w-lg mb-6 text-gray-900  text-3xl text-center leading-none tracking-tight sm:text-4xl md:mx-auto">
            Groomsmen
          </h2>
          <Carousel breakPoints={breakPoints} itemPadding={[0, 20]}>
            {items.map((item) => (
              <div key={item.id}>
                <img
                  className="object-cover shadow-lg rounded-lg food"
                  src={item.imageUrl}
                  alt=""
                />
                <p className="text-center text-[#713C25]"> {item.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Groomsmen;
