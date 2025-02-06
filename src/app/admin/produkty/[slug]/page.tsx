import AdminEditPanel from "@/app/Components/Admin/AdminEditPanel";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  return (
    <>
      <AdminEditPanel slug={params.slug} />
    </>
  );
};

export default Page;
