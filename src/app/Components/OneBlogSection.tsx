import Image from "next/image";
import React from "react";
import { urlFor } from "../firebase/interface";
import Link from "next/link";

interface Props {
  photo: string;
  title: string;
  slug: string;
  description: string;
}

const OneBlogSection = ({ photo, title, slug, description }: Props) => {
  return (
    <Link
      className="rounded-3xl border border-black cursor-pointer flex flex-col overflow-hidden "
      href={`/blog/${slug}`}
    >
      <div className=" h-3/5">
        <Image
          src={urlFor(photo).url()}
          alt="Blog section"
          width={500}
          height={500}
          className="w-full  rounded-t-3xl  hover:scale-[1.02] transition-transform duration-100 ease-in object-cover h-full "
          priority={true}
          quality={50}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ER9HZYAAAAASUVORK5CYII="
        />
      </div>

      <div className=" flex flex-col justify-between h-2/5 p-4 2xl:p-6">
        {" "}
        <h5>{title}</h5>
        <p className=" line-clamp-3">{description}</p>
        <p>2024</p>
      </div>
    </Link>
  );
};

export default OneBlogSection;
