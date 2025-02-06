"use client";
import { Email } from "@/app/firebase/interface";
import { GetEmails } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { ClipLoader } from "react-spinners";

const AdminDatabaseEmails = () => {
  const { data, error, isLoading } = useQuery<Email[]>({
    queryKey: ["admin_emails"],
    queryFn: async () => await GetEmails(),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="min-h-[600px]">
      <Link href={"/admin"}>
        <p className="hover:underline ease-in">Späť</p>
      </Link>
      <h2 className="mb-4">Databáza kontaktov</h2>

      <p className="mb-16">
        Tu sa nachádzajú emailové kontakty ľudí, ktorí žiadali o PDF dokument zo
        stránky.
      </p>

      {isLoading && <ClipLoader size={20} color={"#00000"} loading={true} />}
      {error && <p>Chyba pri získavaní dát. {error.message}</p>}

      {data && (
        <>
          <div className="grid grid-cols-3 border-black border-b-2 ">
            <p>Email</p>
            <p className="text-center">Dátum odoslania</p>
            <p className="text-right">Stiahnuté dokumenty</p>
          </div>
          {data.map((object, index) => (
            <div
              className="grid grid-cols-3 border-black border-b pt-8 pb-8"
              key={index}
            >
              <p>{object.email}</p>
              <p className="text-center">{object.datum}</p>
              <div>
                {object.linky.map((object2, index2) => (
                  <p className="text-right" key={index2}>
                    {object2.nazov}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AdminDatabaseEmails;
