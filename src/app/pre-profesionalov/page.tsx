import React, { Suspense } from "react";
import ProfesionalIntro from "../Components/ProfesionalComponents/ProfesionalIntro";
import ProfesionalPanel from "../Components/ProfesionalComponents/ProfesionalPanel";
import ProfesionalCuts from "../Components/ProfesionalComponents/ProfesionalCuts";
import ProfesionalDownload from "../Components/ProfesionalComponents/ProfesionalDownload";
import HomePageBlogSection from "../Components/HomePageComponents/HomePageBlogSection";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";
import { unstable_noStore } from "next/cache";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../firebase/config";
import { PanelProduct } from "../firebase/interface";
import { ClipLoader } from "react-spinners";

async function GetData() {
  unstable_noStore();
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "panely");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PanelProduct[] = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as PanelProduct),
    }));

    return <ProfesionalDownload data={panelyProducts} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

const page = () => {
  return (
    <div className="">
      <ProfesionalIntro />
      <ProfesionalPanel />
      <ProfesionalCuts />
      <Suspense
        fallback={
          <div className="main_section min-h-[600px]">
            <ClipLoader size={20} color={"#00000"} loading={true} />
          </div>
        }
      >
        <GetData />
      </Suspense>

      <HomePageBlogSection colorGray={false} />
      <HomePageInfo />
    </div>
  );
};

export default page;
