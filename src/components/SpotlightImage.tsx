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
    <div className="relative w-full max-w-[800px] aspect-[4/3] flex flex-col justify-end">
      <Image
        src={parkImage}
        alt={parkName}
        fill
        className="object-cover rounded-3xl"
        priority
      />

      {/* Overlay container to condense content */}
      <div className="absolute right-4 z-50  bg-opacity-90 rounded-xl p-4 flex flex-col gap-4">
        {/* Top Row */}
        <div className="flex flex-row justify-between items-end gap-4">
          <div className=" p-2 rounded">
            <Pill
              pillText="Most Popular"
              backgroundColor="#8f663d"
              textColor="#000000"
            />

            <div className="text-2xl md:text-3xl font-playfairDisplay font-bold mb-2">
              Yosemite
            </div>
            <div className="text-sm mb-2">
              <p>
                Giant sequoias, towering waterfalls, and the spectacular valley
                views make this California gem a must-visit destination.
              </p>
            </div>
          </div>

          <div className=" pb-0 [&>*]:mb-0 p-2 rounded">
            <Pill
              pillText="placeholder"
              textColor="#FFFFFF"
              backgroundColor="#2A6F4D"
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="px-2 py-2 items-center bg-amber-300 rounded text-center">
            <div>1890</div>
            <div>Year Established</div>
          </div>
          <div className="px-2 py-2 items-center bg-amber-600 rounded text-center">
            <div>1890</div>
            <div>Year Established</div>
          </div>
          <div className="px-2 py-2 items-center bg-amber-300 rounded text-center">
            <div>1890</div>
            <div>Year Established</div>
          </div>
        </div>
      </div>
    </div>
  );
};
