import React from "react";
import { Blog } from "../firebase/interface";
import OneBlogSection from "./OneBlogSection";

interface Props {
  data: Blog[];
}

const BlogAll = ({ data }: Props) => {
  return (
    <div className="main_section additional_padding">
      <h4>Blog section</h4>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
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
    </div>
  );
};

export default BlogAll;
