import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { Suspense } from "react";

import { ClipLoader } from "react-spinners";

import AdminNewPanel from "@/app/Components/Admin/AdminNewPanel";
import NotAuthorized from "@/app/Components/Admin/NotAuthorized";
import AdminEditPanel from "@/app/Components/Admin/AdminEditPanel";

async function GetToken({ params }: Props) {
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
      return <AdminEditPanel slug={params.slug} />;
    } else {
      return <NotAuthorized />;
    }
  }
}

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  return (
    <>
      <Suspense
        fallback={
          <div className="main_section additional_padding">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetToken
          params={{
            slug: params.slug,
          }}
        />
      </Suspense>
    </>
  );
};

export default Page;
