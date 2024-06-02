import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { Suspense } from "react";

import { ClipLoader } from "react-spinners";

import AdminNewPanel from "@/app/Components/Admin/AdminNewPanel";
import NotAuthorized from "@/app/Components/Admin/NotAuthorized";
import AdminPhotoDescription from "@/app/Components/Admin/AdminPhotoDescription";
import { unstable_noStore } from "next/cache";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { PhotoCityDescription } from "@/app/firebase/interface";
import { app } from "@/app/firebase/config";

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
      try {
        const db = getFirestore(app);
        const panelyCollectionRef = collection(db, "stavby_popisy");
        const querySnapshot = await getDocs(panelyCollectionRef);

        const photoDescriptions: PhotoCityDescription[] =
          querySnapshot.docs.map((doc) => ({
            foto: doc.data().foto,
            mesto: doc.data().mesto,
            popis: doc.data().popis,
          }));

        return <AdminPhotoDescription data={photoDescriptions} />;
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
          <div className="main_section additional_padding min-h-[1000px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetToken />
      </Suspense>
    </>
  );
}
