"use client";
import { PanelProduct } from "@/app/firebase/interface";
import { GetPanelyClient } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import CeilingPanelIntro from "./CeilingPanelIntro";

const CeilingPanelIntroData = () => {
  const { data, error, status, isLoading } = useQuery<PanelProduct[]>({
    queryKey: ["panels"],
    queryFn: async () => await GetPanelyClient(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Chyba pri získavaní dát. {error.message}</p>;
  }
  if (status === "success" && data) {
    return <CeilingPanelIntro data={data} />;
  }
};

export default CeilingPanelIntroData;
