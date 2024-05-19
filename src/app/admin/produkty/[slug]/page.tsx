import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { Suspense } from "react";

import { ClipLoader } from "react-spinners";

import AdminNewPanel from "@/app/Components/Admin/AdminNewPanel";
import NotAuthorized from "@/app/Components/Admin/NotAuthorized";
import AdminEditPanel from "@/app/Components/Admin/AdminEditPanel";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/app/firebase/config";
import { PanelProduct } from "@/app/firebase/interface";
import { unstable_noStore } from "next/cache";

async function GetData({ params }: Props) {
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
      unstable_noStore();
      const db = getFirestore(app);
      const q = query(
        collection(db, "panely"),
        where("slug", "==", params.slug)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.error("No product found with the specified slug.");
        return;
      }
      const doc = querySnapshot.docs[0];
      const productData = doc.data() as PanelProduct;

      return <AdminEditPanel data={productData} />;
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
          <div className="main_section additional_padding min-h-[600px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetData
          params={{
            slug: params.slug,
          }}
        />
      </Suspense>
    </>
  );
};

export default Page;
