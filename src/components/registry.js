import React from "react";
import "../styles/registry.css";
import Badge from "../assets/monogram.png";

function Registry() {
  return (
    <div>
      <section className="py-12 bg-[#BE6C42] overflow-hidden md:py-20 lg:py-24 test">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img className="badge mx-auto w-20" src={Badge} alt="" />
            <blockquote className="mt-10">
              <div className="max-w-4xl mx-auto text-center text-2xl leading-9 font-medium text-[#F7E7CE]">
                <p className="testim">
                  Your presence is already such a big blessing for us and should
                  you decide to bring us a gift on our special day, please note
                  that cash gifts are encouraged. We appreciate your
                  understanding and we can’t wait to share this new marriage
                  with you
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0"></div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-light text-[#F7E7CE]">
                      Registry
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Registry;
