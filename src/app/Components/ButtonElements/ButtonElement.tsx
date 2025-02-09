"use client";
import React, { useState } from "react";
import IconArrow from "../Icons/IconArrow";
import { ClipLoader } from "react-spinners";

interface Props {
  text: string;
  isLoading?: boolean;
}

const ButtonElement = ({ text, isLoading }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {!isLoading ? (
        <div
          className="flex flex-row border border-black rounded-lg items-center cursor-pointer w-fit hover:bg-secondary duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex border-black border-r h-full items-center   min-w-[90px]">
            <p className="p-3 mr-6 line-clamp-1 whitespace-nowrap overflow-hidden">
              {text}
            </p>
          </div>

          <div className="p-4 flex justify-center">
            <IconArrow isHovered={isHovered} />
          </div>
        </div>
      ) : (
        <div className="flex flex-row border border-black rounded-lg items-center  w-fit hover:bg-secondary duration-300 min-w-[120px] h-[40px] cursor-default justify-center">
          <ClipLoader size={20} color={"#000000"} loading={isLoading} />
        </div>
      )}
    </>
  );
};

export default ButtonElement;
