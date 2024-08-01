import jwt from "jsonwebtoken";
import { Suspense } from "react";

import AdminDatabaseEmails from "@/app/Components/Admin/AdminDatabaseEmails";
import AdminFinalNotAuthorized from "@/app/Components/Admin/AdminFinalNotAuthorized";
import AdminNotAuthorized from "@/app/Components/Admin/AdminNotAuthorized";
import AdminProductSkeleton from "@/app/Components/Admin/AdminProductSkeleton";
import { getToken } from "@/app/lib/functions";
import { GetEmails } from "@/app/lib/functionsServer";

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
    const data = await GetEmails();
    if (data) {
      return <AdminDatabaseEmails data={data} />;
    }

    return <AdminDatabaseEmails data={[]} />;
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
