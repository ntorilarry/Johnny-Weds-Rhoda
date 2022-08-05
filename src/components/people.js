import React from "react";
import "../styles/people.css";

function People() {
  return (
    <div>
      <div className="py-0 xl:py-0 px-4 sm:px-6 lg:px-8 bg-[#d3b580] overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Transactions
              </h2>
            </div>
          </div>
          <div className="relative">
            <div className="relative md:bg-[#d3b580] md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-white lg:max-w-none">
                  <p>
                    Ultrices ultricies a in odio consequat egestas rutrum. Ut
                    vitae aliquam in ipsum. Duis nullam placerat cursus risus
                    ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut
                    rerum. Perspiciatis iusto mollitia iste minima soluta id.
                  </p>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-white lg:mt-0">
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
