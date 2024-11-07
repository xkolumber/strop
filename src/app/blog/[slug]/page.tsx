import BlogPageSlug from "@/app/Components/BlogSectionComponents/BlogPageSlug";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  return (
    <>
      <BlogPageSlug slug={params.slug} />
    </>
  );
};

export default Page;
