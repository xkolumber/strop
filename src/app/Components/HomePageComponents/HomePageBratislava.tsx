import { Suspense } from "react";

import { GetStavbyPopis } from "@/app/lib/functionsServer";
import HomePageBratislavaClient from "./HomePageBratislavaClient";
import HomePageBratislavaSkeleton from "./HomePageBratislavaSkeleton";

async function GetData() {
  try {
    const zakazky = await GetStavbyPopis();

    return <HomePageBratislavaClient zakazky={zakazky} />;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export default function HomePageBratislava() {
  return (
    <>
      <Suspense fallback={<HomePageBratislavaSkeleton />}>
        <GetData />
      </Suspense>
    </>
  );
}
