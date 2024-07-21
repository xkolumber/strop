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
      className="rounded-3xl border border-black cursor-pointer flex flex-col "
      href={`/blog/${slug}`}
    >
      <div className="p-4 h-3/5">
        <Image
          src={urlFor(photo).url()}
          alt="Blog section"
          width={500}
          height={500}
          className="w-full rounded-3xl hover:scale-[1.02] transition-transform duration-100 ease-in object-cover h-full "
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg4NK0z2wPL+/k17BmYFBxnjhrZlFRuqSqKQMDu8ab//8fvftU1jUbANs+DosgoxQqAAAAAElFTkSuQmCC"
        />
      </div>

      <div className=" flex flex-col justify-between h-2/5 p-4">
        {" "}
        <h5>{title}</h5>
        <p className=" line-clamp-3">{description}</p>
        <p>2024</p>
      </div>
    </Link>
  );
};

export default OneBlogSection;
