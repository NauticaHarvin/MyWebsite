import React from "react";

interface PillProps {
  pillText: string;
}

export const Pill = ({ pillText }: PillProps) => {
  return (
    <div className="rounded-full bg-[#36634d1a] text-[#36634d] w-[90px] mb-4 px-3 py-1 flex">
      {pillText}
    </div>
  );
};
