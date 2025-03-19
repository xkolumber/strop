"use client";
import {
  PhotoCityDescription,
  PhotoCityDescriptionBasic,
} from "@/app/firebase/interface";
import {
  GetFirstProject,
  GetStavbyPopis,
  GetStavyBasic,
} from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import HomePageBratislavaClient from "./HomePageBratislavaClient";
import HomePageBratislavaSkeleton from "./HomePageBratislavaSkeleton";

const HomePageBratislava = () => {
  const { data, error, isLoading } = useQuery<PhotoCityDescriptionBasic[]>({
    queryKey: ["projects"],
    queryFn: async () => await GetStavyBasic(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const {
    data: data2,
    error: error2,
    isLoading: IsLoading2,
  } = useQuery<PhotoCityDescription | null | undefined>({
    queryKey: ["project_first"],
    queryFn: async () => await GetFirstProject(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <HomePageBratislavaSkeleton />;
  }

  if (error) {
    return <p>Chyba pri získavaní dát. {error.message}</p>;
  }
  if (data) {
    return (
      data && <HomePageBratislavaClient data={data} first_project={data2} />
    );
  }
};

export default HomePageBratislava;
