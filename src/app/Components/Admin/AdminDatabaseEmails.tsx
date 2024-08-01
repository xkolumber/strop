import { Email } from "@/app/firebase/interface";
import Link from "next/link";
import React from "react";

interface Props {
  data: Email[];
}

const AdminDatabaseEmails = ({ data }: Props) => {
  return (
    <div className="main_section additional_padding min-h-[600px]">
      <Link href={"/admin"}>
        <p className="hover:underline ease-in">Späť</p>
      </Link>
      <h2 className="mb-8">Databáza kontaktov</h2>
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
    </div>
  );
};

export default AdminDatabaseEmails;
