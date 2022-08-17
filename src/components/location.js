import React from "react";
import "../styles/location.css";

function Location() {
  return (
    <div>
      <h2 className="max-w-lg mb-6 font-sans text-5xl text-center leading-none tracking-tight text-white sm:text-7xl md:mx-auto h-header">
        Location
      </h2>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:py-6">
        <div className="flex flex-col mx-auto items-center justify-between lg:flex-row">
          <div className="mb-10 mx-auto lg:max-w-lg lg:pr-5 lg:mb-0 locat ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7942.06433635109!2d-0.24231862654830313!3d5.562250483868634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf999d3705ea53%3A0x37e62ad364d48b56!2sICGC%20Upper%20Room%20Temple!5e0!3m2!1sen!2sgh!4v1660744733703!5m2!1sen!2sgh"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              className="mapp"
            ></iframe>
            <div className="flex flex-col items-center md:flex-row"></div>
          </div>
          <div className="relative lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4082403267907!2d-0.2836803852336264!3d5.6539368959015315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14410c91a95da933!2zNcKwMzknMTQuMiJOIDDCsDE2JzUzLjQiVw!5e0!3m2!1sen!2sgh!4v1660744370198!5m2!1sen!2sgh"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              className="mapp"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
