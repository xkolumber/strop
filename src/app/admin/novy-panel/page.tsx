import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { Suspense } from "react";

import { ClipLoader } from "react-spinners";

import AdminNewPanel from "@/app/Components/Admin/AdminNewPanel";
import NotAuthorized from "@/app/Components/Admin/NotAuthorized";

async function GetToken() {
  const cookieStore = cookies();

  const authTokenCookie = cookieStore.get("FirebaseIdToken");

  if (authTokenCookie === undefined) {
    return <NotAuthorized />;
  }
  const authToken = authTokenCookie ? authTokenCookie.value : null;

  if (authToken) {
    const decodedToken: any = jwt.decode(authToken);
    if (!decodedToken || typeof decodedToken === "string") {
      return <NotAuthorized />;
    }
    const browser_uid = decodedToken.user_id;

    if (browser_uid === process.env.ADMIN_UID) {
      return <AdminNewPanel />;
    } else {
      return <NotAuthorized />;
    }
  }
}

export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="main_section additional_padding">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetToken />
      </Suspense>
    </>
  );
}
