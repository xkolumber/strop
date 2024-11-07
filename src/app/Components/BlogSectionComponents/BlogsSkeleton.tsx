import Link from "next/link";
import React from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogsSkeleton = () => {
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
        <Skeleton
          height={500}
          borderRadius={20}
          baseColor="#DEDEDE"
          width={"100%"}
        />
        <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
        <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
        <Skeleton
          height={500}
          borderRadius={20}
          baseColor="#DEDEDE"
          width={"100%"}
        />
        <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
        <Skeleton height={500} borderRadius={20} baseColor="#DEDEDE" />
      </div>
    </div>
  );
};

export default BlogsSkeleton;
