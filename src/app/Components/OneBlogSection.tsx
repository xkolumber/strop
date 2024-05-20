import Image from "next/image";
import React from "react";
import { urlFor } from "../firebase/interface";

interface Props {
  photo: string;
  title: string;
  description: string;
}

const OneBlogSection = ({ photo, title, description }: Props) => {
  return (
    <div className="rounded-3xl border border-black">
      {photo === undefined ? (
        <Image
          src={"/bratislava1.jpg"}
          alt="Blog section"
          width={300}
          height={300}
          className="w-full rounded-t-3xl"
          priority={true}
          quality={100}
        />
      ) : (
        <Image
          src={urlFor(photo).url()}
          alt="Blog section"
          width={300}
          height={300}
          className="w-full rounded-t-3xl"
          priority={true}
          quality={100}
        />
      )}

      <div className="p-7">
        <h5>{title}</h5>
        <p className="mt-4 mb-4">{description}</p>
        <p>2024</p>
      </div>
    </div>
  );
};

export default OneBlogSection;
