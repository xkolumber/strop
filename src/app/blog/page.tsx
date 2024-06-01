import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import { client } from "../sanity-setting/sanity";
import BlogAll from "../Components/BlogAll";
import { unstable_noStore } from "next/cache";

async function GetData() {
  try {
    unstable_noStore();
    const query = `*[_type == "blog"] | order(_createdAt desc)`;
    const data = await client.fetch(query);

    return <BlogAll data={data} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="main_section additional_padding min-h-[1800px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetData />
      </Suspense>
    </>
  );
}
