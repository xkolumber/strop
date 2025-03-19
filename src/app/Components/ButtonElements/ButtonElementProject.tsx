"use client";
import { useState } from "react";
import IconArrowProject from "../Icons/IconArrowProject";

interface Props {
  text: string;
  choosenCity: string | null | undefined;
}

const ButtonElementProject = ({ text, choosenCity }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-row border border-black rounded-lg items-center cursor-pointer w-fit duration-300 ${
        choosenCity === text ? "bg-secondary" : ""
      } ${isHovered && text !== choosenCity ? "hover:bg-secondary" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex border-black border-r h-full items-center min-w-[90px]">
        <p className="p-3 mr-6 line-clamp-1 whitespace-nowrap overflow-hidden">
          {text}
        </p>
      </div>

      <div className="p-4 flex justify-center">
        <IconArrowProject
          isHovered={isHovered}
          text={text}
          choosenCity={choosenCity}
        />
      </div>
    </div>
  );
};

export default ButtonElementProject;
