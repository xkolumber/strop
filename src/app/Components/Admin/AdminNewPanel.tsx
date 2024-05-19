"use client";
import { useAuth } from "@/app/auth/Provider";
import { auth } from "@/app/firebase/config";
import { PanelProductLoad } from "@/app/firebase/interface";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const AdminNewPanel = () => {
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

  const sizes = ["M", "L", "XL"];
  console.log(actualizeData);

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

  const handleSaveProduct = async () => {
    try {
      setIsLoading(true);
      let url_foto = null;
      if (actualizeData.foto !== null) {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          `panely/${actualizeData.nazov}/${actualizeData.foto.name}`
        );
        await uploadBytes(storageRef, actualizeData.foto);

        url_foto = await getDownloadURL(storageRef);
      }

      const db = getFirestore(auth.app);
      await addDoc(collection(db, "panely"), {
        foto: url_foto,
        nazov: actualizeData.nazov,
        otvory1: actualizeData.otvory1,
        otvory2: actualizeData.otvory2,
        predbezny_vypocet: actualizeData.predbezny_vypocet,
        podrobny_vypocet: actualizeData.podrobny_vypocet,
        poziarna_odolnost: actualizeData.poziarna_odolnost,
        popis1: actualizeData.popis1,
        popis2: actualizeData.popis2,
        rezy1: actualizeData.rezy1,
        rezy2: actualizeData.rezy2,
        slug: createSlug(actualizeData.nazov),
        download_file: null,
      });

      console.log("Product added successfully with ID: ");
      toast.success("Produkt bol úspešne pridaný");
      window.location.reload();
    } catch (error) {
      toast.success("Produkt bol úspešne pridaný");
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function createSlug(title: string): string {
    const slug = title
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");

    return slug;
  }

  const handleCheckboxChangeSizes = (size: string) => {
    setSelectedSizes((prevSelected) => {
      const updatedSelected = prevSelected.includes(size)
        ? prevSelected.filter((nazov) => nazov !== size)
        : [...prevSelected, size];

      setActualizeData((prevData) => ({
        ...prevData,
        velkost: updatedSelected,
      }));

      return updatedSelected;
    });
  };

  return (
    <>
      {user && (
        <>
          <Toaster />

          <div className=" products_admin main_section additional_padding">
            <Link href={"/admin"}>
              <p className="hover:underline ease-in">Späť</p>
            </Link>
            <h4>Nový produkt</h4>

            <div className="product_admin_row">
              <p>Názov produktu:</p>
              <input type="text" name="nazov" onChange={handleChange} />
            </div>

            <div className="product_admin_row">
              <p>Titulná fotka produktu:</p>

              <input
                type="file"
                onChange={(event) => handlePhotoChange(event, "foto")}
              />
            </div>

            <div className="product_admin_row">
              <p>Popis produktu1:</p>
              <input
                type="text"
                name="popis1"
                value={actualizeData.popis1}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Popis produktu2:</p>
              <input
                type="text"
                name="popis2"
                value={actualizeData.popis2}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Rezy 1 :</p>
              <input
                type="text"
                name="rezy1"
                value={actualizeData.rezy1}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Rezy 2 :</p>
              <input
                type="text"
                name="rezy2"
                value={actualizeData.rezy2}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Otvor 1:</p>
              <input
                type="text"
                name="otvory1"
                value={actualizeData.otvory1}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Otvor 2:</p>
              <input
                type="text"
                name="otvory2"
                value={actualizeData.otvory2}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Predbežný výpočet:</p>
              <input
                type="text"
                name="predbezny_vypocet"
                value={actualizeData.predbezny_vypocet}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Podrobný výpočet:</p>
              <input
                type="text"
                name="podrobny_vypocet"
                value={actualizeData.podrobny_vypocet}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>
            <div className="product_admin_row">
              <p>Požiarna odolnosť :</p>
              <input
                type="text"
                name="poziarna_odolnost"
                value={actualizeData.poziarna_odolnost}
                onChange={handleChange}
                className="!w-[450px]"
              />
            </div>

            <button
              className="btn btn--primary"
              onClick={handleSaveProduct}
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
          </div>
        </>
      )}
    </>
  );
};

export default AdminNewPanel;
