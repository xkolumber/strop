import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElements/ButtonElement";

interface Props {
  name: string;
  description: string;
  photo: string;
}

const AboutUsOneMember = ({ name, description, photo }: Props) => {
  return (
    <div className="flex flex-col">
      <Image
        src={photo}
        alt="panel"
        width={500}
        height={500}
        className="w-full  h-[300px] object-cover rounded-[8px]"
      />

      <h5>{name}</h5>
      <p>{description}</p>
      <div className="mt-8">
        <ButtonElement text="LinkedIn" />
      </div>
    </div>
  );
};

export default AboutUsOneMember;
