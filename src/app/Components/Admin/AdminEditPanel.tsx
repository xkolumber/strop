"use client";
import { PanelProduct } from "@/app/firebase/interface";
import { GetCertainPanel } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdminEditPanelComponent from "./AdminEditPanelComponent";
import { ClipLoader } from "react-spinners";
import StepBack from "../StepBack";

interface Props {
  slug: string;
}

const AdminEditPanel = ({ slug }: Props) => {
  const { data, isLoading, error } = useQuery<PanelProduct | null>({
    queryKey: ["admin_panels", slug],
    queryFn: () => GetCertainPanel(slug),
  });

  return (
    <div>
      <StepBack />
      <h5 className="mb-4 !important">Úprava produktu</h5>
      {data && <AdminEditPanelComponent data={data} />}
      {isLoading && <ClipLoader size={20} color={"#00000"} loading={true} />}
      {error && <p>Chyba pri získavaní dát. {error.message}</p>}
    </div>
  );
};

export default AdminEditPanel;
