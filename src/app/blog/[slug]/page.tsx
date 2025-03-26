import BlogPageSlug from "@/app/Components/BlogSectionComponents/BlogPageSlug";
import { Blog, urlFor } from "@/app/firebase/interface";
import { GetBlogBySlug } from "@/app/lib/functionsServer";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data_blog = (await GetBlogBySlug(params.slug)) as Blog;
  if (data_blog !== null) {
    const thumbnail_photo = data_blog.photo_thumbnail || data_blog.photo;
    return {
      title: data_blog.title,
      description: data_blog.content[0].children[0].text,
      openGraph: {
        title: data_blog.title,
        description: data_blog.content[0].children[0].text,
        images: [
          {
            url: urlFor(thumbnail_photo).url(),
            alt: "Titulná fotka",
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }
  return {
    title: "Error",
    description: "An error occurred while fetching the blog data.",
    openGraph: {
      title: "Error",
      description: "An error occurred while fetching the blog data.",
      images: [
        {
          url: "error-image-url",
          alt: "Error image",
        },
      ],
    },
  };
}

const Page = ({ params }: Props) => {
  return (
    <>
      <BlogPageSlug slug={params.slug} />
    </>
  );
};

export default Page;
