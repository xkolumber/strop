"use client";
import { auth } from "@/app/firebase/config";
import { PhotoCityDescription } from "@/app/firebase/interface";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import StepBack from "../StepBack";

export interface IsLoadingMap {
  [key: string]: boolean;
}

interface Props {
  data: PhotoCityDescription[];
}

const AdminPhotoDescription = ({ data }: Props) => {
  const [newPhotoDescription, setNewPhotoDescription] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const [newDescription, setNewDescription] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newFilePdf, setNewFilePdf] = useState<File | null>(null);
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});
  const [filePhoto, setFilePhoto] = useState<File | null>(null);
  const [updatedData, setUpdatedData] = useState<PhotoCityDescription[]>(data);
  const [originalData] = useState<PhotoCityDescription[]>(
    JSON.parse(JSON.stringify(data))
  );

  const handleAddNewPdfObject = async () => {
    try {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        ["new_pdf_object"]: true,
      }));
      let url_foto = "";
      if (newFilePdf === null) {
        toast.error("Nenačítaný pdf súbor");
        return;
      } else {
        const storage = getStorage();
        const storageRef = ref(storage, `foto_stavieb/${newFilePdf.name}`);
        await uploadBytes(storageRef, newFilePdf);

        url_foto = await getDownloadURL(storageRef);
      }

      const db = getFirestore(auth.app);

      await addDoc(collection(db, "stavby_popisy"), {
        foto: url_foto,
        mesto: newCity,
        popis: newDescription,
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

  const handleLoadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;

    setFilePhoto(file);
  };

  const handleChangePdfTitle = (
    index: number,
    newValue: string,
    object: string
  ) => {
    const updatedFiles = [...updatedData];
    if (object === "mesto") {
      updatedFiles[index].mesto = newValue;
    }
    if (object === "popis") {
      updatedFiles[index].popis = newValue;
    }
    setUpdatedData(updatedFiles);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setNewPhotoDescription(false);
      }
    };

    if (newPhotoDescription) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [newPhotoDescription]);

  const handleActualizeObject = async (mesto: string, index: number) => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize-${index}`]: true,
    }));
    try {
      console.log("mesto", mesto);
      const db = getFirestore(auth.app);

      const querySnapshot = await getDocs(
        query(collection(db, "stavby_popisy"), where("mesto", "==", mesto))
      );

      let url_pdf = "";
      if (filePhoto !== null) {
        const storage = getStorage();
        const storageRef = ref(storage, `foto_stavieb/${filePhoto.name}`);
        await uploadBytes(storageRef, filePhoto);
        url_pdf = await getDownloadURL(storageRef);
      }

      const productDoc = querySnapshot.docs[0];

      const new_object = {
        mesto: updatedData[index].mesto,
        foto: url_pdf === "" ? updatedData[index].foto : url_pdf,
        popis: updatedData[index].popis,
      };

      await updateDoc(productDoc.ref, new_object);

      console.log("Supported products updated successfully.");
      window.location.reload();
    } catch (error) {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`actualize-${index}`]: false,
      }));
      console.error("Error updating product:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        [`actualize-${index}`]: false,
      }));
    }
  };

  const handleDeleteObject = async (mesto: string, index: number) => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`delete-${index}`]: true,
    }));
    try {
      const db = getFirestore(auth.app);

      const querySnapshot = await getDocs(
        query(collection(db, "stavby_popisy"), where("mesto", "==", mesto))
      );

      const productDoc = querySnapshot.docs[0];

      await deleteDoc(productDoc.ref);

      console.log("Supported products deleted successfully.");
      window.location.reload();
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

  return (
    <div>
      <div className="mt-16 main_section additional_padding products_admin">
        <StepBack />
        <h2 className="mb-4">Popisy ku stavbám</h2>

        {updatedData.map((object, index) => (
          <div className="product_admin_row" key={index}>
            <div className="flex flex-col gap-4">
              {" "}
              <div className="flex flex-row gap-4 items-center">
                <p>Mesto:</p>
                <input
                  type="text"
                  name={`mesto-${index}`}
                  value={object.mesto}
                  onChange={(e) =>
                    handleChangePdfTitle(index, e.target.value, "mesto")
                  }
                  className="md:!w-[300px]"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <p>Popis:</p>
                <textarea
                  name={`popis-${index}`}
                  value={object.popis}
                  onChange={(e) =>
                    handleChangePdfTitle(index, e.target.value, "popis")
                  }
                  className="w-full h-[10rem] text-black"
                />
              </div>
            </div>

            <Image
              src={object.foto}
              alt="titulna fotka"
              width={400}
              height={400}
              className="w-40 h-40 object-contain"
            />

            <input type="file" onChange={(event) => handleLoadPhoto(event)} />
            <button
              className="btn btn--primary"
              onClick={() =>
                handleActualizeObject(originalData[index].mesto, index)
              }
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
              onClick={() =>
                handleDeleteObject(originalData[index].mesto, index)
              }
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
          onClick={() => setNewPhotoDescription(true)}
        >
          Pridať novú fotku a popis
        </h6>
      </div>
      {newPhotoDescription && (
        <>
          <div className="behind_card_background"></div>
          <div className="popup_message " ref={popupRef}>
            <form className="flex flex-col justify-center items-center products_admin">
              <h4 className="text-center text-white mb-8">Nová stavba</h4>

              <input
                type="text"
                id="nazov_dokument"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                placeholder="*Názov mesta"
                required
                className="!w-full"
              />

              <input
                type="text"
                id="popis"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="*Popis"
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
                onClick={handleAddNewPdfObject}
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
  );
};

export default AdminPhotoDescription;
