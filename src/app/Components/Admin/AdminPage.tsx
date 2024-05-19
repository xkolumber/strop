"use client";
import { PanelProduct, PanelProductSlugTitle } from "@/app/firebase/interface";
import React from "react";
import ButtonElement from "../ButtonElement";
import Link from "next/link";
import { useAuth } from "@/app/auth/Provider";
import { useRouter } from "next/navigation";

interface Props {
  data: PanelProductSlugTitle[];
}

const AdminPage = ({ data }: Props) => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main_section additional_padding min-h-[600px]">
      <div className="flex flex-row justify-between  mb-12">
        <h5>Admin</h5>
        <p
          onClick={handleLogout}
          className="text-black font-medium cursor-pointer"
        >
          Odhlásiť sa
        </p>
      </div>
      <Link href={"/admin/novy-panel"} className="text-black mb-8">
        Pridať nový panel
      </Link>
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
    </div>
  );
};

export default AdminPage;
