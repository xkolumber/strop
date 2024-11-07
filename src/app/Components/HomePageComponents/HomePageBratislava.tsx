"use client";
import { PhotoCityDescription } from "@/app/firebase/interface";
import { GetStavbyPopis } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import HomePageBratislavaClient from "./HomePageBratislavaClient";
import HomePageBratislavaSkeleton from "./HomePageBratislavaSkeleton";

const HomePageBratislava = () => {
  const { data, error, status, isLoading } = useQuery<PhotoCityDescription[]>({
    queryKey: ["projects"],
    queryFn: async () => await GetStavbyPopis(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <HomePageBratislavaSkeleton />;
  }

  if (error) {
    return <p>Chyba pri získavaní dát. {error.message}</p>;
  }
  if (status === "success") {
    return data && <HomePageBratislavaClient data={data} />;
  }
};

export default HomePageBratislava;
