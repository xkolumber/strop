"use client";
import { useState } from "react";
import IconArrowNavbar from "../Icons/IconArrowNavbar";
import { ClipLoader } from "react-spinners";

interface Props {
  text: string;
  isLoading?: boolean;
}

const ButtonElementNavbar = ({ text, isLoading }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {!isLoading ? (
        <div
          className="flex flex-row border border-white rounded-lg items-center cursor-pointer w-fit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex border-white border-r h-full items-center   min-w-[90px]">
            <p className="p-3 mr-6 line-clamp-1 whitespace-nowrap overflow-hidden text-white">
              {text}
            </p>
          </div>

          <div className="p-4 flex justify-center">
            <IconArrowNavbar isHovered={isHovered} />
          </div>
        </div>
      ) : (
        <div className="flex flex-row border border-white rounded-lg items-center  min-w-[120px] h-[40px] cursor-default justify-center">
          <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
        </div>
      )}
    </>
  );
};

export default ButtonElementNavbar;
