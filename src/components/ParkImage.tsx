import React from "react";
import Image from "next/image";
import { Pill } from "./Pill";

interface ParkImageProps {
  parkImage: string;
  parkName: string;
  parkDescription?: string;
  parkState?: string;
  explorePark?: boolean;
}

export const ParkImage = ({
  parkImage,
  parkName,
  parkDescription,
  parkState,
  explorePark,
}: ParkImageProps) => {
  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden">
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
      <div className="absolute bottom-0 w-full z-50 bg-opacity-90 p-8 flex flex-col">
        {/* Top Row */}
        <div className="flex justify-between items-center font-playfairDisplay text-white">
          <div className="font-bold text-xl">{parkName}</div>
          <div className="font-sm">{parkState}</div>
        </div>

        <p className="font-sm text-white/60 mb-6">{parkDescription}</p>

        <a className="font-md text-sm inline-flex uppercas text-white">
          Explore Park
        </a>
      </div>
    </div>
  );
};
