import { Blog } from "@/app/firebase/interface";
import React from "react";
import OneBlogSection from "../OneBlogSection";

interface Props {
  data: Blog[];
}

const HomePageThreeBlogs = ({ data }: Props) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-8 3xl:gap-12">
      {data.map((object, index) => (
        <OneBlogSection
          photo={object.photo}
          title={object.title}
          slug={object.slug.current}
          description={object.content[0].children[0].text}
          key={index}
        />
      ))}
    </div>
  );
};

export default HomePageThreeBlogs;
