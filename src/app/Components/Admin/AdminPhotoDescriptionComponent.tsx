"use client";
import { PhotoCityDescription } from "@/app/firebase/interface";
import {
  AdminActualizeStavbyPopisy,
  AdminAddNewStavbyPopisy,
  AdminDeleteCertainStavbyPopisy,
} from "@/app/lib/actions";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import StepBack from "../StepBack";
import { useQueryClient } from "@tanstack/react-query";

export interface IsLoadingMap {
  [key: string]: boolean;
}

interface Props {
  data: PhotoCityDescription[];
}

const AdminPhotoDescriptionComponent = ({ data }: Props) => {
  const queryClient = useQueryClient();

  const [newPhotoDescription, setNewPhotoDescription] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const [newDescription, setNewDescription] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newFilePdf, setNewFilePdf] = useState<File | null>(null);
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});
  const [filePhoto, setFilePhoto] = useState<File | null>(null);
  const [updatedData, setUpdatedData] = useState<PhotoCityDescription[]>(data);

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const handleAddNewPdfObject = async (e: any) => {
    e.preventDefault();
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

      const response = await AdminAddNewStavbyPopisy(
        url_foto,
        newCity,
        newDescription
      );
      if (response === "success") {
        toast.success("Projekt bol pridaný");

        await queryClient.refetchQueries({
          queryKey: ["admin_buildings"],
        });

        setNewPhotoDescription(false);
      } else {
        toast.error("Niekde nastala chyba");
      }
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

  const handleActualizeObject = async (id: string, index: number) => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`actualize-${index}`]: true,
    }));

    try {
      let url_pdf = "";
      if (filePhoto !== null) {
        const storage = getStorage();
        const storageRef = ref(storage, `foto_stavieb/${filePhoto.name}`);
        await uploadBytes(storageRef, filePhoto);
        url_pdf = await getDownloadURL(storageRef);
      }

      const response = await AdminActualizeStavbyPopisy(
        id,
        updatedData[index].mesto,
        url_pdf === "" ? updatedData[index].foto : url_pdf,
        updatedData[index].popis
      );
      if (response === "success") {
        toast.success("Projekt bol aktualizovaný");
        await queryClient.refetchQueries({
          queryKey: ["admin_buildings"],
        });
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

  const handleDeleteObject = async (id: string, index: number) => {
    setIsLoadingMap((prevState) => ({
      ...prevState,
      [`delete-${index}`]: true,
    }));
    try {
      const response = await AdminDeleteCertainStavbyPopisy(id);
      console.log(response);
      if (response === "success") {
        await queryClient.refetchQueries({
          queryKey: ["admin_buildings"],
        });
        toast.success("Projekt bol odstránený");
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
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
      <div className="products_admin">
        <Toaster />
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
              onClick={() => handleActualizeObject(object.id, index)}
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
              onClick={() => handleDeleteObject(object.id, index)}
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
            <form
              className="flex flex-col justify-center items-center products_admin"
              onSubmit={handleAddNewPdfObject}
            >
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
                className="!w-full mt-4 text-white"
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
  );
};

export default AdminPhotoDescriptionComponent;
