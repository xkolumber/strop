import { usePathname } from "next/navigation";
import React from "react";

const IconHamburger = () => {
  return (
    <svg
      width="31"
      height="25"
      viewBox="0 0 62 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L61 1.00001"
        stroke={`white  `}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 25L61 25"
        stroke={`white  `}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 13L61 13"
        stroke={`white  `}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconHamburger;
