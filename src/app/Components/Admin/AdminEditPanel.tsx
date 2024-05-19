"use client";
import { useAuth } from "@/app/auth/Provider";
import { auth } from "@/app/firebase/config";
import {
  DownloadPdf,
  PanelProduct,
  PanelProductLoad,
} from "@/app/firebase/interface";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

interface Props {
  slug: string;
}

export interface IsLoadingMap {
  [key: string]: boolean;
}

const EditMainProduct = ({ slug }: Props) => {
  const { user } = useAuth();
  const [product, setProduct] = useState<PanelProduct | null>(null);
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});

  const [success, setSuccess] = useState(false);
  const [isLoadingAll, setIsLoadingAll] = useState(false);
  const [changeSerialNumber, setChangeSerialNumber] = useState(false);
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
    const fetchCertainProduct = async () => {
      try {
        const db = getFirestore();
        const q = query(collection(db, "panely"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.error("No product found with the specified slug.");
          return;
        }
        querySnapshot.forEach((doc) => {
          const data = doc.data() as PanelProduct;
          setProduct(data);
        });
        setSuccess(true);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (user) {
      fetchCertainProduct();
    }
  }, [slug, user]);

  useEffect(() => {
    if (product) {
      setActualizeData((prevData) => ({
        ...prevData,
        nazov: product.nazov,
        otvory1: product.otvory1,
        otvory2: product.otvory2,
        predbezny_vypocet: product.predbezny_vypocet,
        podrobny_vypocet: product.podrobny_vypocet,
        popis1: product.popis1,
        popis2: product.popis2,
        rezy1: product.rezy1,
        rezy2: product.rezy2,
        slug: product.slug,
      }));
    }
  }, [success]);

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
  ) => {
    const { name, value } = e.target;
    setActualizeData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      return updatedData;
    });
  };

  const handleActualizePanel = async () => {
    try {
      setIsLoadingMap((prevState) => ({ ...prevState, ["actualize"]: true }));

      let url_foto = product?.foto || null;
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
      const productQuery = query(
        collection(db, "panely"),
        where("slug", "==", actualizeData.slug)
      );

      const productQuerySnapshot = await getDocs(productQuery);

      const productDocRef = productQuerySnapshot.docs[0].ref;

      console.log(productDocRef);
      await updateDoc(productDocRef, {
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
      });

      console.log("Product actualized");
      toast.success("Produkt bol úspešne aktualizovaný");
      window.location.reload();
    } catch (error) {
      toast.error("Chyba");
      console.error("Error adding product:", error);
    } finally {
      setIsLoadingMap((prevState) => ({ ...prevState, ["actualize"]: false }));
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

  const handleDeletePdf = async (slug: string, nazov: string) => {
    setIsLoadingMap((prevState) => ({ ...prevState, ["delete"]: true }));
    try {
      const db = getFirestore(auth.app);

      const querySnapshot = await getDocs(
        query(collection(db, "panely"), where("slug", "==", slug))
      );

      const productDoc = querySnapshot.docs[0];
      const productData = productDoc.data();

      const updatedDownloadFile = productData.download_file.filter(
        (file: DownloadPdf) => file.nazov !== nazov
      );

      await updateDoc(productDoc.ref, { download_file: updatedDownloadFile });

      console.log("Supported products deleted successfully.");
      window.location.reload();
    } catch (error) {
      setIsLoadingMap((prevState) => ({ ...prevState, ["delete"]: false }));
      console.error("Error deleting promo code(s):", error);
    } finally {
      setIsLoadingMap((prevState) => ({ ...prevState, ["delete"]: false }));
    }
  };

  const handleActualizePdf = async (
    slug: string,
    nazov: string,
    index: number
  ) => {
    setIsLoadingMap((prevState) => ({ ...prevState, ["delete"]: true }));
    try {
      const db = getFirestore(auth.app);

      const querySnapshot = await getDocs(
        query(collection(db, "panely"), where("slug", "==", slug))
      );

      let url_pdf = "";
      if (filePdf !== null) {
        const storage = getStorage();
        const storageRef = ref(storage, `pdf/${filePdf.name}`);
        await uploadBytes(storageRef, filePdf);
        url_pdf = await getDownloadURL(storageRef);
      }

      const productDoc = querySnapshot.docs[0];
      const productData = productDoc.data();

      // Update the specific item in the array
      const updatedDownloadFile = productData.download_file.map(
        (file: DownloadPdf, i: number) => {
          if (i === index) {
            return {
              nazov: downloadFiles[index].nazov,
              pdf_link:
                url_pdf === "" ? downloadFiles[index].pdf_link : url_pdf,
            };
          }
          return file;
        }
      );

      await updateDoc(productDoc.ref, { download_file: updatedDownloadFile });

      console.log("Supported products updated successfully.");
      window.location.reload();
    } catch (error) {
      setIsLoadingMap((prevState) => ({ ...prevState, ["delete"]: false }));
      console.error("Error updating product:", error);
    } finally {
      setIsLoadingMap((prevState) => ({ ...prevState, ["delete"]: false }));
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
    if (product && product.download_file) {
      setDownloadFiles(product.download_file);
    }
  }, [product?.download_file]);

  const handleChangePdfTitle = (index: number, newValue: string) => {
    const updatedFiles = [...downloadFiles];
    updatedFiles[index].nazov = newValue;
    setDownloadFiles(updatedFiles);
  };

  const handleAddNewPdfObject = async () => {
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

      const db = getFirestore(auth.app);

      const querySnapshot = await getDocs(
        query(collection(db, "panely"), where("slug", "==", product!.slug))
      );

      const productDoc = querySnapshot.docs[0];
      const productData = productDoc.data();

      const new_object_pdf = {
        nazov: newPdfTitle,
        pdf_link: url_pdf,
      };

      const all_pdf_objects = [
        ...(productData.download_file || []),
        new_object_pdf,
      ];

      await updateDoc(productDoc.ref, {
        download_file: all_pdf_objects,
      });

      console.log("Product added successfully with ID: ");
      toast.success("PDF súbor bol úspešne pridaný");
      window.location.reload();
    } catch (error) {
      // toast.success("Produkt bol úspešne pridaný");
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
      {user && (
        <>
          <Toaster />
          <div className="main_section additional_padding products_admin">
            <Link href={"/admin"}>
              <p className="hover:underline ease-in">Späť</p>
            </Link>

            {product && (
              <>
                <h4>Produkt {product.nazov}</h4>
                <div className="product_admin_row">
                  <p>Titulná fotka produktu:</p>

                  <Image
                    src={product.foto}
                    alt="titulna fotka"
                    width={400}
                    height={400}
                    className="w-40 h-40 object-contain"
                  />

                  <input
                    type="file"
                    onChange={(event) =>
                      handlePhotoChange(event, "titulna_foto")
                    }
                  />
                </div>

                <div className="product_admin_row">
                  <p>Popis produktu1:</p>
                  <input
                    type="text"
                    name="popis1"
                    value={actualizeData.popis1}
                    onChange={handleChange}
                    className=""
                  />
                </div>
                <div className="product_admin_row">
                  <p>Popis produktu2:</p>
                  <input
                    type="text"
                    name="popis2"
                    value={actualizeData.popis2}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Rezy 1 :</p>
                  <input
                    type="text"
                    name="rezy1"
                    value={actualizeData.rezy1}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Rezy 2 :</p>
                  <input
                    type="text"
                    name="rezy2"
                    value={actualizeData.rezy2}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Otvor 1:</p>
                  <input
                    type="text"
                    name="otvory1"
                    value={actualizeData.otvory1}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Otvor 2:</p>
                  <input
                    type="text"
                    name="otvory2"
                    value={actualizeData.otvory2}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Predbežný výpočet:</p>
                  <input
                    type="text"
                    name="predbezny_vypocet"
                    value={actualizeData.predbezny_vypocet}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Podrobný výpočet:</p>
                  <input
                    type="text"
                    name="podrobny_vypocet"
                    value={actualizeData.podrobny_vypocet}
                    onChange={handleChange}
                  />
                </div>

                <div className="product_admin_row">
                  <p>Požiarna odolnosť :</p>
                  <input
                    type="text"
                    name="poziarna_odolnost"
                    value={actualizeData.poziarna_odolnost}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="btn btn--primary"
                  onClick={handleActualizePanel}
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

                <div className="mt-16">
                  <h5>Pdf dokumenty</h5>

                  {product.download_file.map((pdf, index) => (
                    <div className="product_admin_row" key={index}>
                      <input
                        type="text"
                        name={`pdf-nazov-${index}`}
                        value={pdf.nazov}
                        onChange={(e) =>
                          handleChangePdfTitle(index, e.target.value)
                        }
                        className="!w-[200px]"
                      />
                      <Link
                        href={`${pdf.pdf_link}`}
                        className="underline text-black"
                      >
                        Link pdf
                      </Link>
                      <input
                        type="file"
                        onChange={(event) => handleLoadPdf(event)}
                      />
                      <button
                        className="btn btn--primary"
                        onClick={() =>
                          handleActualizePdf(product.slug, pdf.nazov, index)
                        }
                        disabled={isLoadingMap["actualize_pdf"]}
                      >
                        {isLoadingMap["actualize_pdf"] ? (
                          <ClipLoader
                            size={20}
                            color={"#00000"}
                            loading={true}
                            className="ml-16 mr-16"
                          />
                        ) : (
                          "Aktualizovať"
                        )}
                      </button>
                      <button
                        className="btn btn--secondary"
                        onClick={() => handleDeletePdf(product.slug, pdf.nazov)}
                        disabled={isLoadingMap["actualize_pdf"]}
                      >
                        {isLoadingMap["actualize_pdf"] ? (
                          <ClipLoader
                            size={20}
                            color={"#00000"}
                            loading={true}
                            className="ml-16 mr-16"
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
                        <form className="flex flex-col justify-center items-center products_admin">
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
                            required
                          />
                          <button
                            className="btn btn--primary"
                            onClick={handleAddNewPdfObject}
                            disabled={isLoadingMap["new_pdf_object"]}
                          >
                            {isLoadingMap["new_pdf_object"] ? (
                              <ClipLoader
                                size={20}
                                color={"#00000"}
                                loading={true}
                                className="ml-16 mr-16"
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
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default EditMainProduct;
