import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";

const blogs = [
  {
    title: "Stropn panel FF265",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové uloženie.",
    link: "",
    photo_link: "/bratislava1.jpg",
    date: "2024",
  },
  {
    title: "Stropn panel FF265",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové uloženie.",
    link: "",
    photo_link: "/bratislava1.jpg",
    date: "2024",
  },
  {
    title: "Stropn panel FF265",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové uloženie.",
    link: "",
    photo_link: "/bratislava1.jpg",
    date: "2024",
  },
  {
    title: "Stropn panel FF265",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové uloženie.",
    link: "",
    photo_link: "/bratislava1.jpg",
    date: "2024",
  },
  {
    title: "Stropn panel FF265",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové uloženie.",
    link: "",
    photo_link: "/bratislava1.jpg",
    date: "2024",
  },
  {
    title: "Stropn panel FF265",
    description:
      "Panely FF sú určené predovšetkým pre stropné a strešné konštrukcie, uložené ako obyčajný nosník, je ich možne uložiť aj pre konzolové uloženie.",
    link: "",
    photo_link: "/bratislava1.jpg",
    date: "2024",
  },
];

const BlogSectionTitle = () => {
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
          <div className="flex flex-row gap-4 mt-4">
            <ButtonElement text="Kontaktujte nás" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
        {blogs.map((blog, index) => (
          <div className="p-8 border border-black rounded-[8px] " key={index}>
            <Image
              src={blog.photo_link}
              alt="Photo blog"
              width={500}
              height={500}
              quality={100}
              className="w-full h-[150px] rounded-[8px] object-cover"
            />
            <h6 className="mt-8">{blog.title}</h6>
            <p className="mt-4">{blog.description}</p>
            <p className="mt-8">{blog.date}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center mt-16">
        <ButtonElement text="Ďalšie blogy" />
      </div>
    </div>
  );
};

export default BlogSectionTitle;
