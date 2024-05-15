import React from "react";
interface Props {
  deliveryAdress: boolean;
}
const IconCheck = ({ deliveryAdress }: Props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {" "}
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{" "}
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>{" "}
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8"
          stroke="#323232"
          strokeWidth={` ${deliveryAdress ? "2" : "0"}`}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>{" "}
    </svg>
  );
};
export default IconCheck;
