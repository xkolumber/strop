"use client";
import { PhotoCityDescription } from "@/app/firebase/interface";
import { GetStavbyPopisy } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ClipLoader } from "react-spinners";
import AdminPhotoDescriptionComponent from "./AdminPhotoDescriptionComponent";

const AdminPhotoDescription = () => {
  const { data, error, isLoading } = useQuery<PhotoCityDescription[]>({
    queryKey: ["admin_buildings"],
    queryFn: async () => await GetStavbyPopisy(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      {isLoading && <ClipLoader size={20} color={"#00000"} loading={true} />}
      {error && <p>Chyba pri získavaní dát. {error.message}</p>}
      {data && <AdminPhotoDescriptionComponent data={data} />}
    </div>
  );
};

export default AdminPhotoDescription;
