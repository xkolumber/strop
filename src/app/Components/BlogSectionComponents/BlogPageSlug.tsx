"use client";

import { Blog, urlFor } from "@/app/firebase/interface";
import { GetBlogBySlug } from "@/app/lib/functionsServer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import ReusablePortableText from "../ReusablePortableText";
import StepBack from "../StepBack";
import BlogSlugSkeleton from "./BlogSlugSkeleton";
import { blur_url } from "@/app/lib/functionsClient";

interface Props {
  slug: string;
}

const BlogPageSlug = ({ slug }: Props) => {
  const queryClient = useQueryClient();

  const cachedElements = queryClient.getQueryData<Blog[]>(["blogs"]) || [];
  const cachedElement = cachedElements.find(
    (blog) => blog.slug.current === slug
  );
  const directCachedElement = queryClient.getQueryData<Blog>(["blogs", slug]);

  const initialElementData = directCachedElement || cachedElement;

  console.log(cachedElement);

  const {
    data = initialElementData,
    error,
    isLoading,
  } = useQuery<Blog>({
    queryKey: ["blogs", slug],
    queryFn: async () => await GetBlogBySlug(slug),
    staleTime: 1000 * 60 * 10,
    enabled: !initialElementData,
  });

  if (isLoading) {
    return <BlogSlugSkeleton />;
  }

  if (error) {
    return <p>Chyba pri získavaní dát. {error.message}</p>;
  }

  if (data) {
    return (
      <div className="main_section additional_padding">
        <StepBack />
        <h2 className="mb-4 md:mb-8 text-center">{data.title}</h2>
        <Image
          src={urlFor(data.photo).url()}
          alt="Blog section"
          width={1600}
          height={800}
          className="w-full rounded-3xl max-h-[800px] object-cover"
          priority={true}
          quality={100}
          placeholder="blur"
          blurDataURL={blur_url}
        />
        <div className="flex flex-col w-full items-center mt-4 md:mt-12">
          <div className="md:max-w-[70%]">
            {data.content && (
              <div className="text-fifthtiary  mb-8">
                <ReusablePortableText content={data.content} />
              </div>
            )}
            {data.photo2 && (
              <Image
                src={urlFor(data.photo2).url()}
                alt="Blog section"
                width={1920}
                height={1080}
                className="w-full rounded-3xl mb-4 md:mb-12"
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL={blur_url}
              />
            )}
            {data.photo3 && (
              <Image
                src={urlFor(data.photo3).url()}
                alt="Blog section"
                width={1920}
                height={1080}
                className="w-full rounded-3xl mb-4 md:mb-12"
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL={blur_url}
              />
            )}
            {data.content2 && (
              <div className="text-fifthtiary  mb-8">
                <ReusablePortableText content={data.content2} />
              </div>
            )}
            {data.photo4 && (
              <Image
                src={urlFor(data.photo4).url()}
                alt="Blog section"
                width={1920}
                height={1080}
                className="w-full rounded-3xl mb-4 md:mb-12 object-contain"
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL={blur_url}
              />
            )}
            {data.content3 && (
              <div className="text-fifthtiary  mb-8">
                <ReusablePortableText content={data.content3} />
              </div>
            )}
            {data.photo5 && (
              <Image
                src={urlFor(data.photo5).url()}
                alt="Blog section"
                width={1920}
                height={1080}
                className="w-full rounded-3xl mb-4 md:mb-12 object-contain"
                priority={true}
                quality={100}
                placeholder="blur"
                blurDataURL={blur_url}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default BlogPageSlug;
