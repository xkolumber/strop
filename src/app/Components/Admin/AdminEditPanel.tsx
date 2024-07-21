"use client";
import { useAuth } from "@/app/auth/Provider";
import {
  DownloadPdf,
  PanelProduct,
  PanelProductLoad,
} from "@/app/firebase/interface";
import {
  AdminActualizePanel,
  AdminActualizePdf,
  AdminAddDeletePDf,
  AdminAddPdf,
} from "@/app/lib/actions";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  data: PanelProduct | null;
}

export interface IsLoadingMap {
  [key: string]: boolean;
}

const EditMainProduct = ({ data }: Props) => {
  const { user } = useAuth();
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});

  const [success, setSuccess] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const [filePdf, setFilePdf] = useState<File | null>(null);
  const [downloadFiles, setDownloadFiles] = useState<DownloadPdf[]>([]);

  const [newPdf, setNewPdf] = useState(false);
  const [newPdfTitle, setNewPdfTitle] = useState("");
  const [newFilePdf, setNewFilePdf] = useState<File | null>(null);

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

  useEffect(() => {
    if (data) {
      setActualizeData((prevData) => ({
        ...prevData,
        nazov: data.nazov,
        otvory1: data.otvory1,
        otvory2: data.otvory2,
        predbezny_vypocet: data.predbezny_vypocet,
        podrobny_vypocet: data.podrobny_vypocet,
        poziarna_odolnost: data.poziarna_odolnost,
        popis1: data.popis1,
        popis2: data.popis2,
        rezy1: data.rezy1,
        rezy2: data.rezy2,
        slug: data.slug,
      }));
    }
  }, []);

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
    if (photo_description === "pdf_change") {
      setActualizeData((prevData) => ({
        ...prevData,
        foto: file,
      }));
    }
  };

  const handleLoadPdf = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    setFilePdf(file);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const handleActualizePanel = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoadingMap((prevState) => ({ ...prevState, ["actualize"]: true }));

      let url_foto = data?.foto ? data.foto : "";
      if (actualizeData.foto !== null) {
        const storage = getStorage();
        const storageRef = ref(
          storage,
          `panely/${actualizeData.nazov}/${actualizeData.foto.name}`
        );
        await uploadBytes(storageRef, actualizeData.foto);

        url_foto = await getDownloadURL(storageRef);
      }

      const response = await AdminActualizePanel(
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
        actualizeData.rezy2,
        actualizeData.slug
      );
      if (response === "success") {
        toast.success("Panel bol aktualizovaný");
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      toast.error("Chyba");
      console.error("Error adding product:", error);
    } finally {
      setIsLoadingMap((prevState) => ({ ...prevState, ["actualize"]: false }));
    }
  };

  const handleDeletePdf = async (
    slug: string,
    nazov: string,
    index: number
  ) => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`delete-${index}`]: true,
    }));
    try {
      const response = await AdminAddDeletePDf(nazov, index, data!.slug);
      if (response === "success") {
        toast.success("PDF element bol odstránený");
        setNewPdf(false);
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete-${index}`]: false,
      }));
      console.error("Error deleting promo code(s):", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`delete-${index}`]: false,
      }));
    }
  };

  const handleActualizePdf = async (slug: string, index: number) => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize-${index}`]: true,
    }));
    try {
      let url_pdf = "";
      if (filePdf !== null) {
        const storage = getStorage();
        const storageRef = ref(storage, `pdf/${filePdf.name}`);
        await uploadBytes(storageRef, filePdf);
        url_pdf = await getDownloadURL(storageRef);
      }

      const response = await AdminActualizePdf(
        downloadFiles,
        url_pdf,
        slug,
        index
      );
      if (response === "success") {
        toast.success("PDF element bol aktualizovaný");
        setFilePdf(null);
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`actualize-${index}`]: false,
      }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setNewPdf(false);
      }
    };

    if (newPdf) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [newPdf]);

  useEffect(() => {
    if (data?.download_file) {
      setDownloadFiles(data.download_file);
    }
  }, [data?.download_file]);

  const handleChangePdfTitle = (index: number, newValue: string) => {
    const updatedFiles = [...downloadFiles];
    updatedFiles[index].nazov = newValue;
    setDownloadFiles(updatedFiles);
  };

  const handleAddNewPdfObject = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        ["new_pdf_object"]: true,
      }));
      let url_pdf = "";
      if (newFilePdf === null) {
        toast.error("Nenačítaný pdf súbor");
        return;
      } else {
        const storage = getStorage();
        const storageRef = ref(storage, `pdf/${newFilePdf.name}`);
        await uploadBytes(storageRef, newFilePdf);

        url_pdf = await getDownloadURL(storageRef);
      }

      const response = await AdminAddPdf(newPdfTitle, url_pdf, data!.slug);
      if (response === "success") {
        toast.success("PDF element bol pridaný");
        setNewPdf(false);
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        ["new_pdf_object"]: false,
      }));
    }
  };

  return (
    <>
      <Toaster />
      <div className="main_section additional_padding products_admin">
        <Link href={"/admin"}>
          <p className="hover:underline ease-in">Späť</p>
        </Link>
        <form className="form" onSubmit={handleActualizePanel}>
          <h4>Produkt {data?.nazov}</h4>
          <div className="product_admin_row">
            <p>Titulná fotka produktu:</p>

            {data?.foto && (
              <Image
                src={data?.foto}
                alt="titulna fotka"
                width={400}
                height={400}
                className="w-40 h-40 object-contain"
              />
            )}

            <input
              type="file"
              onChange={(event) => handlePhotoChange(event, "foto")}
            />
          </div>

          <div className="product_admin_row">
            <p>Popis produktu1:</p>
            <textarea
              name="popis1"
              value={actualizeData.popis1}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>
          <div className="product_admin_row">
            <p>Popis produktu2:</p>
            <textarea
              name="popis2"
              value={actualizeData.popis2}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Rezy 1 :</p>
            <textarea
              name="rezy1"
              value={actualizeData.rezy1}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Rezy 2 :</p>
            <textarea
              name="rezy2"
              value={actualizeData.rezy2}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Otvor 1:</p>
            <textarea
              name="otvory1"
              value={actualizeData.otvory1}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Otvor 2:</p>
            <textarea
              name="otvory2"
              value={actualizeData.otvory2}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Predbežný výpočet:</p>
            <textarea
              name="predbezny_vypocet"
              value={actualizeData.predbezny_vypocet}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Podrobný výpočet:</p>
            <textarea
              name="podrobny_vypocet"
              value={actualizeData.podrobny_vypocet}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <div className="product_admin_row">
            <p>Požiarna odolnosť :</p>
            <textarea
              name="poziarna_odolnost"
              value={actualizeData.poziarna_odolnost}
              onChange={handleChange}
              className="!w-[75%] h-[10rem] text-black"
            />
          </div>

          <button
            className="btn btn--primary"
            // onClick={handleActualizePanel}
            type="submit"
            disabled={isLoadingMap["actualize"]}
          >
            {isLoadingMap["actualize"] ? (
              <ClipLoader
                size={20}
                color={"#00000"}
                loading={true}
                className="ml-16 mr-16"
              />
            ) : (
              "Aktualizovať produkt"
            )}
          </button>
        </form>

        <div className="mt-16">
          <h5>Pdf dokumenty</h5>

          {data?.download_file.map((pdf, index) => (
            <div className="product_admin_row" key={index}>
              <input
                type="text"
                name={`pdf-nazov-${index}`}
                value={pdf.nazov}
                onChange={(e) => handleChangePdfTitle(index, e.target.value)}
                className="!w-1/3"
              />
              <Link href={`${pdf.pdf_link}`} className="underline text-black">
                Link pdf
              </Link>
              <input type="file" onChange={(event) => handleLoadPdf(event)} />
              <button
                className="btn btn--primary"
                onClick={() => handleActualizePdf(data.slug, index)}
                disabled={isLoadingMap[`actualize-${index}`]}
              >
                {isLoadingMap[`actualize-${index}`] ? (
                  <ClipLoader
                    size={20}
                    color={"#00000"}
                    loading={true}
                    className="ml-10 mr-10"
                  />
                ) : (
                  "Aktualizovať"
                )}
              </button>
              <button
                className="btn btn--secondary"
                onClick={() => handleDeletePdf(data.slug, pdf.nazov, index)}
                disabled={isLoadingMap[`delete-${index}`]}
              >
                {isLoadingMap[`delete-${index}`] ? (
                  <ClipLoader
                    size={20}
                    color={"#00000"}
                    loading={true}
                    className="ml-8 mr-8"
                  />
                ) : (
                  "Odstrániť"
                )}
              </button>
            </div>
          ))}

          <h6
            className="underline mt-16 cursor-pointer"
            onClick={() => setNewPdf(true)}
          >
            Pridať nový PDF dokument
          </h6>

          {newPdf && (
            <>
              <div className="behind_card_background"></div>
              <div className="popup_message " ref={popupRef}>
                <form
                  className="flex flex-col justify-center items-center products_admin"
                  onSubmit={handleAddNewPdfObject}
                >
                  <h4 className="text-center text-white mb-8">
                    Nový pdf dokument
                  </h4>

                  <input
                    type="text"
                    id="nazov_dokument"
                    value={newPdfTitle}
                    onChange={(e) => setNewPdfTitle(e.target.value)}
                    placeholder="*Názov dokumentu"
                    required
                    className="!w-full"
                  />

                  <input
                    type="file"
                    onChange={(event) =>
                      setNewFilePdf(event.target.files?.[0] || null)
                    }
                    className="!w-full mt-4"
                    required
                  />
                  <button
                    className="btn btn--primary"
                    type="submit"
                    disabled={isLoadingMap["new_pdf_object"]}
                  >
                    {isLoadingMap["new_pdf_object"] ? (
                      <ClipLoader
                        size={20}
                        color={"#00000"}
                        loading={true}
                        className="ml-4 mr-4"
                      />
                    ) : (
                      "Pridať"
                    )}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EditMainProduct;
