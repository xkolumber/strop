import React from "react";
import { Blog } from "../firebase/interface";
import OneBlogSection from "./OneBlogSection";
import ButtonElement from "./ButtonElements/ButtonElement";
import Link from "next/link";

interface Props {
  data: Blog[];
}

const BlogAll = ({ data }: Props) => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="md:w-[60%]">Blog</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Prinášame nové trendy a praktické rady z odvetvia stavebníctva.
            Získajte cenné informácie a nápady pre svoje aktuálne aj nasledujúce
            projekty.
          </p>
          <Link href={"/kontakt"} className="mt-4">
            <ButtonElement text="Kontaktujte nás" />
          </Link>
        </div>
      </div>
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
    </div>
  );
};

export default BlogAll;
