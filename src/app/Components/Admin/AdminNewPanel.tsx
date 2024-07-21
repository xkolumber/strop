"use client";
import { useAuth } from "@/app/auth/Provider";
import { PanelProductLoad } from "@/app/firebase/interface";

import { AdminAddNewPanel } from "@/app/lib/actions";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const AdminNewPanel = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const [actualizeData, setActualizeData] = useState<PanelProductLoad>({
    foto: null,
    nazov: "",
    otvory1: "",
    otvory2: "",
    predbezny_vypocet: "",
    podrobny_vypocet: "",
    poziarna_odolnost: "",
    popis1: "",
    popis2: "",
    rezy1: "",
    rezy2: "",
    slug: "",
    download_file: [],
  });

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    photo_description: string
  ) => {
    const file = event.target.files?.[0] || null;

    if (photo_description === "foto") {
      setActualizeData((prevData) => ({
        ...prevData,
        foto: file,
      }));
    }
  };

  const handleSaveProduct = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let url_foto = "";
      if (actualizeData.foto !== null) {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          `panely/${actualizeData.nazov}/${actualizeData.foto.name}`
        );
        await uploadBytes(storageRef, actualizeData.foto);

        url_foto = await getDownloadURL(storageRef);
      }

      const response = await AdminAddNewPanel(
        url_foto,
        actualizeData.nazov,
        actualizeData.otvory1,
        actualizeData.otvory2,
        actualizeData.predbezny_vypocet,
        actualizeData.podrobny_vypocet,
        actualizeData.poziarna_odolnost,
        actualizeData.popis1,
        actualizeData.popis2,
        actualizeData.rezy1,
        actualizeData.rezy2
      );
      if (response === "success") {
        toast.success("Produkt bol úspešne pridaný");

        router.push("/admin");
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      toast.success("Produkt bol úspešne pridaný");
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {user && (
        <>
          <Toaster />

          <form
            className=" products_admin main_section additional_padding"
            onSubmit={handleSaveProduct}
          >
            <Link href={"/admin"}>
              <p className="hover:underline ease-in">Späť</p>
            </Link>
            <h4>Nový produkt</h4>

            <div className="product_admin_row">
              <p>Názov produktu:</p>
              <input
                type="text"
                name="nazov"
                onChange={handleChange}
                required
              />
            </div>

            <div className="product_admin_row">
              <p>Titulná fotka produktu:</p>

              <input
                type="file"
                onChange={(event) => handlePhotoChange(event, "foto")}
                required
              />
            </div>

            <div className="product_admin_row">
              <p>Popis produktu1:</p>
              <input
                type="text"
                name="popis1"
                value={actualizeData.popis1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Popis produktu2:</p>
              <input
                type="text"
                name="popis2"
                value={actualizeData.popis2}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Rezy 1 :</p>
              <input
                type="text"
                name="rezy1"
                value={actualizeData.rezy1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Rezy 2 :</p>
              <input
                type="text"
                name="rezy2"
                value={actualizeData.rezy2}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Otvor 1:</p>
              <input
                type="text"
                name="otvory1"
                value={actualizeData.otvory1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Otvor 2:</p>
              <input
                type="text"
                name="otvory2"
                value={actualizeData.otvory2}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Predbežný výpočet:</p>
              <input
                type="text"
                name="predbezny_vypocet"
                value={actualizeData.predbezny_vypocet}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Podrobný výpočet:</p>
              <input
                type="text"
                name="podrobny_vypocet"
                value={actualizeData.podrobny_vypocet}
                onChange={handleChange}
                required
              />
            </div>
            <div className="product_admin_row">
              <p>Požiarna odolnosť :</p>
              <input
                type="text"
                name="poziarna_odolnost"
                value={actualizeData.poziarna_odolnost}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="btn btn--primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <ClipLoader
                  size={20}
                  color={"#00000"}
                  loading={true}
                  className="ml-16 mr-16"
                />
              ) : (
                "Nahrať produkt"
              )}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default AdminNewPanel;
