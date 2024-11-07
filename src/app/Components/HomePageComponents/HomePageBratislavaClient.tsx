"use client";
import { PhotoCityDescription } from "@/app/firebase/interface";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonElement from "../ButtonElements/ButtonElement";
import ButtonElementProject from "../ButtonElements/ButtonElementProject";

interface Props {
  zakazky: PhotoCityDescription[] | [];
}

const HomePageBratislavaClient = ({ zakazky }: Props) => {
  const [choosenCity, setChoosenCity] = useState(zakazky[0].mesto);
  const [choosenDescription, setChoosenDescription] = useState(
    zakazky[0].popis
  );
  const [choosenPhoto, setChoosenPhoto] = useState(zakazky[0].foto);

  const handleNewChoosenObject = (object: PhotoCityDescription) => {
    setChoosenCity(object.mesto);
    setChoosenDescription(object.popis);
    setChoosenPhoto(object.foto);
  };

  return (
    <div className="bg-primary">
      <div className="main_section flex flex-col md:flex-row  md:gap-6 xl:gap-8 2xl:gap-12">
        <div className="flex flex-col md:w-1/2">
          <p>[ Naše projekty ]</p>
          <h2>{choosenCity}</h2>
          <p className="pt-4">{choosenDescription}</p>
          <div className="scroll-container mt-4 !mb-4 md:hidden">
            {zakazky.map((object, index) => (
              <div
                className={`${object.mesto === choosenCity && ""}`}
                key={index}
                onClick={() => handleNewChoosenObject(object)}
              >
                <ButtonElementProject
                  text={object.mesto}
                  choosenCity={choosenCity}
                />
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
                <ButtonElementProject
                  text={object.mesto}
                  choosenCity={choosenCity}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:w-1/2">
          <div className="relative ">
            {choosenPhoto && (
              <Image
                src={choosenPhoto}
                alt="panel"
                width={1000}
                height={1000}
                quality={100}
                priority={true}
                className="w-full  rounded-[8px] object-cover absolute top-0 z-10 h-[250px] md:h-[350px] 2xl:h-[400px] 3xl:h-[520px] "
              />
            )}

            <Skeleton
              borderRadius={8}
              baseColor="#c4c4c4"
              className="absolute top-0  h-[248px] md:h-[344px] 2xl:h-[398px] 3xl:h-[518px]"
            />
          </div>
          <div className="grid grid-cols-3 mt-8 gap-4 ">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava1.jpg?alt=media&token=abec8713-73bf-4f79-97a3-87da24c97f35"
              }
              alt="panel"
              width={500}
              height={400}
              className="rounded-[8px] object-cover"
            />{" "}
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava2.jpg?alt=media&token=86196a5a-240a-4e44-8a27-f0fe569db6e1"
              }
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava3.jpg?alt=media&token=8eb62a52-32ec-4b22-a70f-d978d35f3ccf"
              }
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava4.jpg?alt=media&token=90ee8565-4f45-4295-91db-644a110e4fea"
              }
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava5.jpg?alt=media&token=0e4bbcae-a98d-4114-863e-33a1da76c949"
              }
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />{" "}
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fbratislava6.jpg?alt=media&token=0216f2ef-5bb8-466d-8730-8a0b2dd99f64"
              }
              alt="panel"
              width={500}
              height={500}
              className="rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBratislavaClient;
