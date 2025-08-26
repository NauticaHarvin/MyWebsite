import LandingPage from "@/app/page";
import Image from "next/image";
import React, { JSX } from "react";

interface StatImageProps {
  statImage: string;
  alt: string;
  yearsExplored: number | string;
  parksExplored: number;
}

export const StatImage = ({
  statImage,
  alt,
  yearsExplored,
  parksExplored,
}: StatImageProps) => {
  return (
    <div className="relative">
      <div className="relative mx-2 aspect-[3/4]">
        <Image src={statImage} alt={alt} fill className="rounded-lg" />
        <div className="bg-[#FFFFFF] absolute min-w-[144px] min-h-[84px] -top-4 -left-4 flex flex-col justify-center px-4 rounded-lg">
          <div className="text-[#37634d] text-2xl font-bold">
            {parksExplored}
          </div>
          <div className="font-librebaskerville text-sm text-[#344256b3]">
            Parks Explored
          </div>
        </div>
        <div className="bg-[#3973AC] text-[#FFFFFF] absolute min-w-[96px] min-h-[96px] -bottom-4 -right-4 flex flex-col justify-center items-center px-4 rounded-lg">
          <div className="text-2xl font-bold">{yearsExplored}</div>
          <div className="text-sm font-montserrat">Years</div>
        </div>
      </div>
    </div>
  );
};
