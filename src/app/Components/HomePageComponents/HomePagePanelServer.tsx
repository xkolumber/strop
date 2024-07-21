import { app } from "@/app/firebase/config";
import { PanelProductHomePage } from "@/app/firebase/interface";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import HomePagePanel from "./HomePagePanel";

async function GetData() {
  unstable_noStore();
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "panely");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PanelProductHomePage[] = querySnapshot.docs.map(
      (doc) => ({
        foto: doc.data().foto,
        nazov: doc.data().nazov,
        popis1: doc.data().popis1,
        popis2: doc.data().popis2,
        slug: doc.data().slug,
        id: doc.id,
      })
    );

    return <HomePagePanel panels={panelyProducts} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return <HomePagePanel panels={[]} />;
  }
}

const HomePagePanelServer = () => {
  return (
    <Suspense
      fallback={
        <div className="main_section min-h-[500px]">
          <ClipLoader size={20} color={"#00000"} loading={true} />
        </div>
      }
    >
      <GetData />
    </Suspense>
  );
};

export default HomePagePanelServer;
