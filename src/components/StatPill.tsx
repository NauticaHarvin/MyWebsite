import React from "react";

interface StatPillProps {
  stat: string;
  description: string;
}

export const StatPill = ({ stat, description }: StatPillProps) => {
  return (
    <div className="bg-white shadow-sm border border-neutral min-w-[196px] min-h-[86px] rounded-lg px-4 flex flex-col justify-center">
      <div className="text-[#37634d] font-bold text-2xl">{stat}</div>
      <div className="text-sm text-[#344256b3]">{description}</div>
    </div>
  );
};
