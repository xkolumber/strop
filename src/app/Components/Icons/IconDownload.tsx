import React from "react";

interface Props {
  isHovered: boolean;
}

const IconDownload = ({ isHovered }: Props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer transition-transform ease-in duration-75 ${
        isHovered ? "translate-y-1" : ""
      }`}
    >
      <circle
        cx="18"
        cy="18"
        r="17.5"
        stroke="black"
        fill={isHovered ? "black" : "none"}
      />
      <path
        d="M17.5 23.0788L17.5 11L18.5 11L18.5 23.0788L24.2923 17.2865L25 18L18 25L11 18L11.7077 17.2865L17.5 23.0788Z"
        fill={isHovered ? "white" : "black"}
      />
    </svg>
  );
};

export default IconDownload;
