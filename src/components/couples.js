import React from "react";
import Couple from "../assets/couple.jpg";
import "../styles/couples.css";
import Navbar from "./navbar";

function Couples() {
  return (
    <div className="bg-[#BE6C42]">
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
            <div class="flex flex-col sm:flex-row mt-10 items-center">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center ">
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
                  "Time and time again, I have to pinch myself when I see you
                  next to me. You are my dream come true. Thank you for stealing
                  my eyes from the crowd and stealing my heart from me. The
                  chances of meeting you on this planet are like finding a
                  needle in haystack – a miracle happened. Life with you is
                  tranquil yet full of surprises and I am in it for the long
                  haul. I look at you and see the rest of my life in front of my
                  eyes. I hope you know that every time I tell you to get home
                  safe, stay warm, have a good day, or sleep well, what I am
                  really saying is that I love you. I love you so damn much that
                  it is starting to steal other words’ meanings."
                </p>
                <p class="leading-relaxed text-sm mb-4 text-white ">
                  ""Love you not only for what you are but for what I am when I
                  am with you.” – Roy Croft There isn’t one person in the world
                  that I want more than I want you. Please don’t doubt my love
                  for you; it’s the only thing I’m sure of. Sometimes I wonder
                  if love is worth fighting for, but then I remember your face
                  and I’m ready for war. There’s just something about you I’m
                  scared to lose because I know I won’t find it in anyone else.
                  Believing that you are mine forever is what makes me get up in
                  the mornings. This could go on and on. And the list is
                  endless. I love you abeiku and that’s what encompasses it."
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
