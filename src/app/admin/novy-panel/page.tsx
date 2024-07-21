import AdminFinalNotAuthorized from "@/app/Components/Admin/AdminFinalNotAuthorized";
import AdminNewPanel from "@/app/Components/Admin/AdminNewPanel";
import AdminNotAuthorized from "@/app/Components/Admin/AdminNotAuthorized";
import AdminProductSkeleton from "@/app/Components/Admin/AdminProductSkeleton";
import { getToken } from "@/app/lib/functions";
import jwt from "jsonwebtoken";
import { Suspense } from "react";

async function Validate() {
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
    return <AdminNewPanel />;
  } else {
    return <AdminFinalNotAuthorized />;
  }
}

const Page = () => {
  return (
    <Suspense fallback={<AdminProductSkeleton />}>
      <Validate />
    </Suspense>
  );
};

export default Page;
