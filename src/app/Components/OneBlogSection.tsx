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
      className="rounded-3xl border border-black cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in"
      href={`/blog/${slug}`}
    >
      <Image
        src={urlFor(photo).url()}
        alt="Blog section"
        width={500}
        height={500}
        className="w-full rounded-t-3xl"
        priority={true}
        quality={100}
      />

      <div className="p-7">
        <h5>{title}</h5>
        <p className="mt-4 mb-4 line-clamp-2">{description}</p>
        <p>2024</p>
      </div>
    </Link>
  );
};

export default OneBlogSection;
