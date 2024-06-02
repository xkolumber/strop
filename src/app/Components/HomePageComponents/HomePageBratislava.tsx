"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";
import { PhotoCityDescription } from "@/app/firebase/interface";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/app/firebase/config";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomePageBratislava = () => {
  const [zakazky, setZakazky] = useState<PhotoCityDescription[]>([]);

  const [choosenCity, setChoosenCity] = useState("");
  const [choosenDescription, setChoosenDescription] = useState("");
  const [choosenPhoto, setChoosenPhoto] = useState("");

  useEffect(() => {
    const fetchZakazky = async () => {
      const db = getFirestore(app);

      try {
        const panelyCollectionRef = collection(db, "stavby_popisy");
        const querySnapshot = await getDocs(panelyCollectionRef);

        const panelyProducts: PhotoCityDescription[] = querySnapshot.docs.map(
          (doc) => ({
            foto: doc.data().foto,
            mesto: doc.data().mesto,
            popis: doc.data().popis,
          })
        );

        setZakazky(panelyProducts);
        setChoosenCity(panelyProducts[0].mesto);
        setChoosenDescription(panelyProducts[0].popis);
        setChoosenPhoto(panelyProducts[0].foto);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchZakazky();
  }, []);

  const handleNewChoosenObject = (object: PhotoCityDescription) => {
    setChoosenCity(object.mesto);
    setChoosenDescription(object.popis);
    setChoosenPhoto(object.foto);
  };
  return (
    <div className="main_section flex flex-col md:flex-row bg-primary gap-6">
      <div className="flex flex-col md:w-1/2">
        <p>[ Naše projekty ]</p>
        <h2>{choosenCity}</h2>
        <p>{choosenDescription}</p>

        {/* <div className="flex flex-wrap gap-8 mt-8 mb-8"> */}
        <div className="scroll-container mt-4 !mb-2 md:hidden">
          {zakazky.map((object, index) => (
            <div
              className=""
              key={index}
              onClick={() => handleNewChoosenObject(object)}
            >
              <ButtonElement text={object.mesto} />
            </div>
          ))}
        </div>

        <div className="flex-wrap gap-8 mt-8 mb-8 hidden md:flex">
          {zakazky.map((object, index) => (
            <div
              className=""
              key={index}
              onClick={() => handleNewChoosenObject(object)}
            >
              <ButtonElement text={object.mesto} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:w-1/2">
        {choosenPhoto != "" ? (
          <Image
            src={choosenPhoto}
            alt="panel"
            width={1000}
            height={1000}
            quality={100}
            priority={true}
            className="w-full  rounded-[8px] object-cover h-[250px] md:h-[350px] 2xl:h-[400px] 3xl:h-[520px]"
          />
        ) : (
          <div className="w-full">
            <Skeleton height={476} borderRadius={8} baseColor="#c4c4c4" />
          </div>
        )}
        <div className="grid grid-cols-3 mt-8 gap-4 ">
          <Image
            src={"/bratislava1.jpg"}
            alt="panel"
            width={500}
            height={400}
            className="rounded-[8px] object-cover"
          />{" "}
          <Image
            src={"/bratislava2.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava3.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava4.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava5.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava6.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageBratislava;
