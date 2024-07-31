import React from "react";

interface Props {
  isHovered: boolean;
  text: string;
  choosenCity: string;
}

const IconArrowProject = ({ isHovered, text, choosenCity }: Props) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`-ml-1 transform ${
        isHovered ? "rotate-90" : "-rotate-0"
      } cursor-pointer transition-transform ease-in duration-75 ${text === choosenCity && "rotate-90"}`}
    >
      <path
        d="M0.836087 10.1999L9.25745 1.77856L1.1638 1.77174L1.15904 0.840959H10.841V10.5229L9.91018 10.5181L9.91016 2.43128L1.4888 10.8526L0.836087 10.1999Z"
        fill="black"
      />
    </svg>
  );
};

export default IconArrowProject;
