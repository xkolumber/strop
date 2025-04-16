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
import IconCloseButton from "../Icons/IconCloseButton";
import { AdminaDeleteMoodPhoto } from "@/app/lib/functionsServer";
import { CompressImage } from "@/app/lib/functionsClient";

export interface IsLoadingMap {
  [key: string]: boolean;
}

interface Props {
  data: PhotoCityDescription[];
}

const AdminPhotoDescriptionComponent = ({ data }: Props) => {
  const queryClient = useQueryClient();
  const [dataLoading, setDataLoading] = useState(false);

  const [newPhotoDescription, setNewPhotoDescription] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const [newDescription, setNewDescription] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newFilePdf, setNewFilePdf] = useState<File | null>(null);
  const [isLoadingMap, setIsLoadingMap] = useState<IsLoadingMap>({});
  const [filePhoto, setFilePhoto] = useState<File | null>(null);
  const [updatedData, setUpdatedData] = useState<PhotoCityDescription[]>(data);
  const [clickedMoodPhoto, setClickedMoodPhoto] = useState("");
  const [openWindowMoodPhoto, setopenWindowMoodPhoto] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

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
        setNewCity("");
        setNewDescription("");
        setNewFilePdf(null);

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
        updatedData[index].popis,
        uploadedPhotos,
        updatedData[index].fotky
      );
      if (response === "success") {
        toast.success("Projekt bol aktualizovaný");
        await queryClient.refetchQueries({
          queryKey: ["admin_buildings"],
        });
        setUploadedPhotos([]);
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

  const handleClickedMoodPhoto = (url: string, id: string) => {
    setSelectedId(id);
    setClickedMoodPhoto(url);
    setopenWindowMoodPhoto(true);
  };

  const handleDeleteMoodPhoto = async () => {
    try {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        ["delete_mood_photo"]: true,
      }));
      const response = await AdminaDeleteMoodPhoto(
        selectedId,
        clickedMoodPhoto
      );
      if (response === "success") {
        setopenWindowMoodPhoto(false);
        toast.success("Fotka bola odstránená");

        await queryClient.refetchQueries({
          queryKey: ["admin_buildings"],
        });
      } else {
        toast.error("Niekde nastala chyba");
      }
    } catch (error) {
      console.error("Error deleting photo:", error);
    } finally {
      setIsLoadingMap((prevState) => ({
        ...prevState,
        ["delete_mood_photo"]: false,
      }));
    }
  };

  const handleUploadPhotos = async (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const files = e.target.files;
    if (!files) return;

    setSelectedId(id);

    const validFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );

    if (validFiles.length === 0) {
      toast.error("Iba obrázky sú povolené");
      return;
    }

    setDataLoading(true);

    try {
      const storage = getStorage();
      const uploadedUrls = await Promise.all(
        validFiles.map(async (file) => {
          const compressedFile = (await CompressImage(file)) || file;

          const fileName = compressedFile.name.replace(/\s+/g, "_");
          const uniqueFileName = `${Date.now()}_${fileName}`;
          const storageRef = ref(storage, `foto_stavieb/${uniqueFileName}`);

          await uploadBytes(storageRef, compressedFile);

          return await getDownloadURL(storageRef);
        })
      );

      setUploadedPhotos((prevData) => [...prevData, ...uploadedUrls]);

      toast.success(
        "Fotky boli úspešne nahrané!, aktualizujte projekt pre uloženie zmien",
        { duration: 5000 }
      );
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Failed to upload one or more photos. Please try again.");
    } finally {
      setDataLoading(false);
      e.target.value = "";
    }
  };

  return (
    <div>
      <div className="products_admin">
        <Toaster />
        <StepBack />
        <h2 className="mb-4">Popisy ku stavbám</h2>

        {updatedData.map((object, index) => (
          <div className="product_admin_row " key={index}>
            <div className="flex flex-col gap-4 w-full mb-24">
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
              <div className="flex flex-row gap-4 items-center w-full justify-between">
                <p>Titulná fotka:</p>
                <Image
                  src={object.foto}
                  alt="titulna fotka"
                  width={400}
                  height={400}
                  className="w-40 h-40 object-contain"
                />

                <input
                  type="file"
                  onChange={(event) => handleLoadPhoto(event)}
                />
              </div>
              <div className="product_admin_row">
                <p>Fotky:</p>
                <div className="flex flex-wrap gap-4">
                  {object.fotky &&
                    object.fotky.map((foto, index) => (
                      <Image
                        src={foto}
                        alt="titulna fotka"
                        width={400}
                        height={400}
                        className="w-40 h-40 object-contain cursor-pointer"
                        onClick={() => handleClickedMoodPhoto(foto, object.id)}
                        quality={25}
                        key={index}
                      />
                    ))}
                  {uploadedPhotos.length > 0 &&
                    selectedId === object.id &&
                    uploadedPhotos.map((foto, index) => (
                      <Image
                        src={foto}
                        alt="titulna fotka"
                        width={400}
                        height={400}
                        className="w-40 h-40 object-contain cursor-pointer"
                        quality={25}
                        key={index}
                      />
                    ))}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadPhotos(e, object.id)}
                  className="mt-6"
                  multiple
                />
              </div>
              <div className="flex flex-row justify-between items-center">
                <button
                  className={`btn btn--primary min-w-[180px] !bg-red-600 ${isLoadingMap[`actualize-${index}`] && "disabledPrimaryBtn"}`}
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
                  className={`btn btn--secondary !text-red-600 ${isLoadingMap[`delete-${index}`] && "disabledPrimaryBtn"} `}
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
            </div>
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
              className="flex flex-col justify-center products_admin gap-4"
              onSubmit={handleAddNewPdfObject}
            >
              <h4 className="text-center text-white mb-8">Nová stavba</h4>

              <div className="flex flex-row gap-4 items-center">
                <h6 className=" text-left text-white">Názov mesta</h6>

                <input
                  type="text"
                  id="nazov_dokument"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  required
                  className="!w-full"
                />
              </div>

              <div className="flex flex-row gap-4 items-center">
                <h6 className=" text-left text-white">Popis stavby</h6>

                <input
                  type="text"
                  id="popis"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="*Popis"
                  required
                  className="!w-full"
                />
              </div>

              <div className="flex flex-row itesm-center gap-4">
                <h6 className="text-white mb-8">Titulná foto</h6>

                <input
                  type="file"
                  onChange={(event) =>
                    setNewFilePdf(event.target.files?.[0] || null)
                  }
                  className="!w-full mt-4 text-white"
                  required
                />
              </div>

              <p className="!text-white">
                Fotky stavby je možné pridať po vytvorení daného objektu.
              </p>

              <button
                className={`btn btn--primary !max-w-none w-full ${isLoadingMap["new_pdf_object"] && "disabledPrimaryBtn"}`}
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

      {openWindowMoodPhoto && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message">
            <div
              className="absolute right-0 top-0 m-4"
              onClick={() => setopenWindowMoodPhoto(false)}
            >
              <IconCloseButton />
            </div>{" "}
            <Image
              src={clickedMoodPhoto}
              alt="titulna fotka"
              width={400}
              height={400}
              className="w-full h-full object-contain "
            />
            <button
              className={`btn btn--primary !mb-0 min-w-[180px] ${isLoadingMap["delete_mood_photo"] && "disabledPrimaryBtn"}  `}
              disabled={isLoadingMap["delete_mood_photo"]}
              onClick={() => handleDeleteMoodPhoto()}
            >
              {isLoadingMap["delete_mood_photo"] ? (
                <ClipLoader
                  size={20}
                  color={"#ffffff"}
                  loading={isLoadingMap["delete_mood_photo"]}
                />
              ) : (
                "Odstrániť"
              )}
            </button>
          </div>
        </>
      )}

      {dataLoading && (
        <>
          {" "}
          <div className="behind_card_background"></div>
          <div className="popup_message !bg-white">
            <h5 className="text-center">Objekty sa nahrávajú do cloudu...</h5>
            <ClipLoader
              size={20}
              color={"#00000"}
              loading={true}
              className="ml-16 mr-16"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPhotoDescriptionComponent;
