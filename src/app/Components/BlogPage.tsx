import React from "react";
import { Blog, urlFor } from "../firebase/interface";
import Image from "next/image";
import ReusablePortableText from "./ReusablePortableText";
import StepBack from "./StepBack";

interface Props {
  data: Blog;
}

const BlogPage = ({ data }: Props) => {
  return (
    <div className="main_section additional_padding">
      <StepBack />
      <h2 className="mb-4 md:mb-8">{data.title}</h2>
      <Image
        src={urlFor(data.photo).url()}
        alt="Blog section"
        width={1000}
        height={1000}
        className="w-full rounded-3xl max-h-[800px]"
        priority={true}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg4NK0z2wPL+/k17BmYFBxnjhrZlFRuqSqKQMDu8ab//8fvftU1jUbANs+DosgoxQqAAAAAElFTkSuQmCC"
      />
      <div className="flex flex-col w-full items-center mt-4 md:mt-12">
        <div className="md:max-w-[70%]">
          {data.content && (
            <div className="text-fifthtiary  mb-8">
              <ReusablePortableText content={data.content} />
            </div>
          )}
          {data.photo2 && (
            <Image
              src={urlFor(data.photo2).url()}
              alt="Blog section"
              width={1000}
              height={1000}
              className="w-full rounded-3xl mb-4 md:mb-12"
              priority={true}
              quality={100}
            />
          )}
          {data.photo3 && (
            <Image
              src={urlFor(data.photo3).url()}
              alt="Blog section"
              width={1000}
              height={1000}
              className="w-full rounded-3xl mb-4 md:mb-12"
              priority={true}
              quality={100}
            />
          )}
          {data.content2 && (
            <div className="text-fifthtiary  mb-8">
              <ReusablePortableText content={data.content2} />
            </div>
          )}
          {data.photo4 && (
            <Image
              src={urlFor(data.photo4).url()}
              alt="Blog section"
              width={1000}
              height={1000}
              className="w-full rounded-3xl mb-4 md:mb-12 object-contain"
              priority={true}
              quality={100}
            />
          )}
          {data.content3 && (
            <div className="text-fifthtiary  mb-8">
              <ReusablePortableText content={data.content3} />
            </div>
          )}
          {data.photo5 && (
            <Image
              src={urlFor(data.photo5).url()}
              alt="Blog section"
              width={1000}
              height={1000}
              className="w-full rounded-3xl mb-4 md:mb-12 object-contain"
              priority={true}
              quality={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
