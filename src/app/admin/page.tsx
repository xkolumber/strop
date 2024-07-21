import { Suspense } from "react";
import jwt from "jsonwebtoken";
import { getToken } from "../lib/functions";
import AdminNotAuthorized from "../Components/Admin/AdminNotAuthorized";
import AdminPage from "../Components/Admin/AdminPage";
import AdminFinalNotAuthorized from "../Components/Admin/AdminFinalNotAuthorized";
import AdminPageSkeleton from "../Components/Admin/AdminPageSkeleton";
import { GetPanely } from "../lib/functionsServer";

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
    const panely = await GetPanely();
    return <AdminPage data={panely} />;
  } else {
    return <AdminFinalNotAuthorized />;
  }
}

const page = () => {
  return (
    <Suspense fallback={<AdminPageSkeleton />}>
      <Validate />
    </Suspense>
  );
};

export default page;
