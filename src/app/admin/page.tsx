import React, { Suspense } from "react";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { ClipLoader } from "react-spinners";
import AdminPage from "../Components/Admin/AdminPage";
import NotAuthorized from "../Components/Admin/NotAuthorized";
import { unstable_noStore } from "next/cache";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase/config";
import { PanelProduct, PanelProductSlugTitle } from "../firebase/interface";

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
      console.log("tu som");
      return <NotAuthorized />;
    }
    const browser_uid = decodedToken.user_id;

    if (browser_uid === process.env.ADMIN_UID) {
      unstable_noStore();
      const db = getFirestore(app);

      try {
        const panelyCollectionRef = collection(db, "panely");
        const querySnapshot = await getDocs(panelyCollectionRef);

        const panelyProducts: PanelProductSlugTitle[] = querySnapshot.docs.map(
          (doc) => ({
            slug: doc.data().slug,
            nazov: doc.data().nazov,
          })
        );

        return <AdminPage data={panelyProducts} />;
      } catch (error) {
        console.error("Error fetching photos:", error);
        return [];
      }
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
