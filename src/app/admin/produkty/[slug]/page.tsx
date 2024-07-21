import jwt from "jsonwebtoken";
import { Suspense } from "react";

import AdminEditPanel from "@/app/Components/Admin/AdminEditPanel";
import AdminFinalNotAuthorized from "@/app/Components/Admin/AdminFinalNotAuthorized";
import AdminNotAuthorized from "@/app/Components/Admin/AdminNotAuthorized";
import AdminPageSkeleton from "@/app/Components/Admin/AdminPageSkeleton";
import { getToken } from "@/app/lib/functions";
import { GetCertainPanel } from "@/app/lib/functionsServer";
import AdminProductSkeleton from "@/app/Components/Admin/AdminProductSkeleton";

async function Validate(slug: string) {
  const authToken = await getToken();

  if (!authToken) {
    return <AdminNotAuthorized />;
  }

  const decodedToken: any = jwt.decode(authToken!);
  if (!decodedToken || typeof decodedToken === "string") {
    return <AdminNotAuthorized />;
  }
  const browser_uid = decodedToken.user_id;

  if (browser_uid === process.env.ADMIN_UID) {
    const data = await GetCertainPanel(slug);
    if (data) {
      return <AdminEditPanel data={data} />;
    }

    return <AdminEditPanel data={null} />;
  } else {
    return <AdminFinalNotAuthorized />;
  }
}

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  return (
    <>
      <Suspense fallback={<AdminProductSkeleton />}>
        {Validate(params.slug)}
      </Suspense>
    </>
  );
};

export default Page;
