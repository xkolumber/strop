"use client";
import { PanelProduct } from "@/app/firebase/interface";
import { GetPanelyClient } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import CeilingPanelIntro from "./CeilingPanelIntro";
import CeilingPanelIntroSkeleton from "./CeilingPanelIntroSkeleton";

const CeilingPanelIntroData = () => {
  const { data, error, isLoading } = useQuery<PanelProduct[]>({
    queryKey: ["panels"],
    queryFn: async () => await GetPanelyClient(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && <CeilingPanelIntroSkeleton />}
      {error && <p>Chyba pri získavaní dát. {error.message}</p>}

      {data && <CeilingPanelIntro data={data} />}
    </>
  );
};

export default CeilingPanelIntroData;
