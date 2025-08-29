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
    <div className="relative w-full max-w-[800px] aspect-[4/3] flex flex-col justify-end ">
      <Image
        src={parkImage}
        alt={parkName}
        fill
        className="object-cover rounded-3xl"
        priority
      />

      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Overlay content */}
      <div className="absolute right-4 z-50 bg-opacity-90 rounded-xl p-4 flex flex-col gap-4">
        {/* Top Row */}
        <div className="flex flex-row justify-between items-end gap-4">
          <div className=" p-2 text-xs rounded font-playfairDisplay uppercase">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>{" "}
            </svg>
          </button>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="px-2 py-2 items-center bg-amber-300 rounded text-center">
            <div className="font-playfairDisplay text-[#8f663d] font-bold text-3xl font-oldstyle-nums">
              1890
            </div>
            <div className="text-sm">Year Established</div>
          </div>
          <div className="px-2 py-2 items-center bg-amber-600 rounded text-center">
            <div className="font-playfairDisplay text-[#8f663d] font-bold text-3xl oldstyle-nums">
              1,200+
            </div>
            <div className="text-sm">Square Miles</div>
          </div>
          <div className="px-2 py-2 items-center bg-amber-300 rounded text-center">
            <div className="font-playfairDisplay text-[#8f663d] font-bold text-3xl oldstyle-nums">
              4M+
            </div>
            <div className="text-sm">Annual Visitors</div>
          </div>
        </div>
      </div>
    </div>
  );
};
