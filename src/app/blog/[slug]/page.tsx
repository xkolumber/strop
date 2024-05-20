import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import { unstable_noStore } from "next/cache";
import { client } from "@/app/sanity-setting/sanity";
import BlogPage from "@/app/Components/BlogPage";

async function GetData({ params }: Props) {
  try {
    unstable_noStore();
    const query = `*[_type == "blog" && slug.current =="${params.slug}"][0]`;
    const data = await client.fetch(query);

    return <BlogPage data={data} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="main_section additional_padding min-h-[600px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetData
          params={{
            slug: params.slug,
          }}
        />
      </Suspense>
    </>
  );
};

export default Page;
