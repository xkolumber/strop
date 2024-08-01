import { collection, getDocs, getFirestore } from "firebase/firestore";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";
import CeilingPanelWholeSection from "../Components/CeilingPanel/CeilingPanelWholeSection";
import { app } from "../firebase/config";
import { PanelProduct } from "../firebase/interface";

async function GetData() {
  unstable_noStore();
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "panely");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PanelProduct[] = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as PanelProduct),
      id: doc.id,
    }));

    // const sortedPanelyProducts = panelyProducts.sort((a, b) => {
    //   const extractNumber = (nazov: string) => {
    //     const match = nazov.match(/^FF(\d+)$/);
    //     return match ? parseInt(match[1], 10) : 0;
    //   };

    //   return extractNumber(a.nazov) - extractNumber(b.nazov);
    // });

    const final_data = panelyProducts.sort((a, b) => {
      return Number(a.slug) - Number(b.slug);
    });

    return <CeilingPanelWholeSection data={final_data} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="main_section additional_padding min-h-[1800px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetData />
      </Suspense>
    </>
  );
}
