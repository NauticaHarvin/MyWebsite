import React from "react";

interface PillProps {
  pillText: string;
  textColor?: string;
  backgroundColor?: string;
}

export const Pill = ({
  pillText,
  textColor = "#36634d",
  backgroundColor = "",
}: PillProps) => {
  return (
    <div
      className="rounded-full w-fit mb-4 px-3 py-1 flex "
      style={{ color: textColor, backgroundColor }}
    >
      {pillText}
    </div>
  );
};
