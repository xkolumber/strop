"use client";
import { PanelProductSlugTitle } from "@/app/firebase/interface";
import { GetPanely } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import ButtonElement from "../ButtonElements/ButtonElement";

const AdminPage = () => {
  const { data, error, isLoading } = useQuery<PanelProductSlugTitle[]>({
    queryKey: ["admin_panels"],
    queryFn: async () => await GetPanely(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <div className=" ">
      <h2>Panely</h2>
      <div className="mt-4 mb-4">
        <Link
          href={"/admin/novy-panel"}
          className="text-black mb-8 underline font-normal "
        >
          Pridať nový panel
        </Link>
      </div>

      {isLoading && <ClipLoader size={20} color={"#00000"} loading={true} />}
      {error && <p>Chyba pri získavaní dát. {error.message}</p>}

      {data && (
        <div className="flex flex-row gap-4">
          {data.map((product, index) => (
            <Link
              className=""
              href={`/admin/produkty/${product.slug}`}
              key={index}
            >
              <ButtonElement text={`${product.nazov}`} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
