"use client";
import { Blog } from "@/app/firebase/interface";
import { GetThreeBlogs } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ButtonElement from "../ButtonElements/ButtonElement";
import HomePageThreeBlogs from "./HomePageThreeBlogs";
import HomePageBlogSkeleton from "./HomePageBlogSkeleton";

interface Props {
  colorGray: boolean;
}

const HomePageBlogSection = ({ colorGray }: Props) => {
  const { data, error, status, isLoading } = useQuery<Blog[]>({
    queryKey: ["homepage_blogs"],
    queryFn: async () => await GetThreeBlogs(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <HomePageBlogSkeleton />;
  }

  if (error) {
    return <p>Chyba pri získavaní dát. {error.message}</p>;
  }
  if (data) {
    return (
      data && (
        <div>
          <div className={`${colorGray && "bg-primary"}`}>
            <div className={`main_section `}>
              <p className="mb-4">[ Blog ]</p>
              <HomePageThreeBlogs data={data} />
              <div className="mt-8 2xl:mt-16">
                <Link href={"/blog"}>
                  <ButtonElement text="Všetky blogy" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
};

export default HomePageBlogSection;
