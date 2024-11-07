"use client";
import { Blog } from "@/app/firebase/interface";
import { GetAllBlogs } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ButtonElement from "../ButtonElements/ButtonElement";
import OneBlogSection from "../OneBlogSection";
import BlogsSkeleton from "./BlogsSkeleton";

const BlogsPage = () => {
  const { data, error, status, isLoading } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: async () => await GetAllBlogs(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <BlogsSkeleton />;
  }

  if (error) {
    return <p>Chyba pri získavaní dát. {error.message}</p>;
  }
  if (status === "success") {
    return (
      data && (
        <div className="main_section additional_padding">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <h2 className="md:w-[60%]">Blog</h2>

            <div className="flex flex-col md:w-[40%]">
              <p className="">
                Prinášame nové trendy a praktické rady z odvetvia stavebníctva.
                Získajte cenné informácie a nápady pre svoje aktuálne aj
                nasledujúce projekty.
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
      )
    );
  }
};

export default BlogsPage;
