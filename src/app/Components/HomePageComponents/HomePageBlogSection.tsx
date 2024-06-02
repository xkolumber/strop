import React, { Suspense } from "react";
import OneBlogSection from "../OneBlogSection";
import ButtonElement from "../ButtonElement";
import { ClipLoader } from "react-spinners";
import { unstable_noStore } from "next/cache";
import { client } from "@/app/sanity-setting/sanity";
import HomePageThreeBlogs from "./HomePageThreeBlogs";
import Link from "next/link";

async function GetData() {
  try {
    unstable_noStore();
    const query = `*[_type == "blog"] | order(_createdAt desc) [0...50]`;
    const allData = await client.fetch(query);

    const shuffledData = allData.sort(() => 0.5 - Math.random());
    const data = shuffledData.slice(0, 3);

    return <HomePageThreeBlogs data={data} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

interface Props {
  colorGray: boolean;
}

const HomePageBlogSection = ({ colorGray }: Props) => {
  return (
    <div className={`main_section ${colorGray && "bg-primary"}`}>
      <p className="mb-4">[ Blog ]</p>
      <Suspense
        fallback={
          <div className="min-h-[600px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetData />
      </Suspense>

      <div className="mt-8 2xl:mt-16">
        <Link href={"/blog"}>
          <ButtonElement text="Všetky blogy" />
        </Link>
      </div>
    </div>
  );
};

export default HomePageBlogSection;
