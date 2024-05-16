import { PanelProduct, PanelProductSlugTitle } from "@/app/firebase/interface";
import React from "react";
import ButtonElement from "../ButtonElement";
import Link from "next/link";

interface Props {
  data: PanelProductSlugTitle[];
}

const AdminPage = ({ data }: Props) => {
  console.log(data);
  return (
    <div className="main_section additional_padding">
      <h4>Admin</h4>
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
