"use client";
import React, { useState } from "react";
import IconArrow from "../Icons/IconArrow";
import IconArrowWhite from "../Icons/IconArrowWhite";

interface Props {
  text: string;
}

const ButtonElementBlack = ({ text }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-row border border-black rounded-lg items-center cursor-pointer w-fit bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex bg-black border-r-white border-r h-full items-center   min-w-[90px] ">
        <p className="p-3 mr-6 line-clamp-1 whitespace-nowrap overflow-hidden text-white">
          {text}
        </p>
      </div>

      <div className="p-4 flex justify-center">
        <IconArrowWhite isHovered={isHovered} />
      </div>
    </div>
  );
};

export default ButtonElementBlack;
