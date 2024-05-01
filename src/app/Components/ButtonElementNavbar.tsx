"use client";
import React, { useState } from "react";
import IconArrow from "./Icons/IconArrow";
import IconArrowNavbar from "./Icons/IconArrowNavbar";

interface Props {
  text: string;
}

const ButtonElementNavbar = ({ text }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-row border border-white rounded-lg items-center cursor-pointer w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex border-white border-r h-full items-center   min-w-[90px]">
        <p className="p-3 mr-6 line-clamp-1 whitespace-nowrap overflow-hidden">
          {text}
        </p>
      </div>

      <div className="p-4 flex justify-center">
        <IconArrowNavbar isHovered={isHovered} />
      </div>
    </div>
  );
};

export default ButtonElementNavbar;
