import React from "react";
import Image from "next/image";
import { Pill } from "./Pill";

interface SpotlightImageProps {
  parkImage: string;
  parkName: string;
  parkDescription: string;
}

export const SpotlightImage = ({
  parkImage,
  parkName,
  parkDescription,
}: SpotlightImageProps) => {
  return (
    <div className="relative w-full max-w-[800px] aspect-[4/3] flex flex-col justify-end rounded-3xl overflow-hidden">
      <Image
        src={parkImage}
        alt={parkName}
        fill
        className="object-cover"
        priority
      />

      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"></div>

      {/* Overlay content */}
      <div className="absolute right-4 z-50 bg-opacity-90 p-8 flex flex-col">
        {/* Top Row */}
        <div className="flex flex-row justify-between items-end gap-4">
          <div className=" p-2 text-xs font-playfairDisplay uppercase">
            <Pill
              pillText="Most Popular"
              backgroundColor="#8f663d"
              textColor="#000000"
            />

            <div className="text-xl text-white md:text-3xl font-playfairDisplay font-bold mb-2">
              Yosemite
            </div>
            <div className="text-sm mb-2 text-white">
              <p>
                Giant sequoias, towering waterfalls, and the spectacular valley
                views make this California gem a must-visit destination.
              </p>
            </div>
          </div>

          <button className="h-16 w-16 rounded-full p-4 flex items-center justify-center bg-[#2A6F4D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white transition-transform duration-300 group-hover/btn:translate-x-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>{" "}
            </svg>
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-6 mt-8">
          <div>
            <div className="font-playfairDisplay text-[#8f663d] font-bold text-3xl font-oldstyle-nums">
              1890
            </div>
            <div className="text-sm text-white/60">Year Established</div>
          </div>
          <div>
            <div className="font-playfairDisplay text-[#8f663d] font-bold text-3xl oldstyle-nums">
              1,200+
            </div>
            <div className="text-sm text-white/60">Square Miles</div>
          </div>
          <div>
            <div className="font-playfairDisplay text-[#8f663d] font-bold text-3xl oldstyle-nums">
              4M+
            </div>
            <div className="text-sm text-white/60">Annual Visitors</div>
          </div>
        </div>
      </div>
    </div>
  );
};
