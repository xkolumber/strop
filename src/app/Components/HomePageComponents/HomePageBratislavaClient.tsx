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
                {/* <ButtonElement text={object.mesto} /> */}
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
    </div>
  );
};

export default HomePageBratislavaClient;
