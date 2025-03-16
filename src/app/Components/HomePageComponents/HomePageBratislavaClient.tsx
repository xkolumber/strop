"use client";
import { PhotoCityDescription } from "@/app/firebase/interface";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonElementProject from "../ButtonElements/ButtonElementProject";

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../NextImage";

interface Props {
  data: PhotoCityDescription[] | [];
}

const HomePageBratislavaClient = ({ data }: Props) => {
  const [choosenObject, setChoosenObject] = useState<PhotoCityDescription>(
    data[0]
  );

  const handleNewChoosenObject = (object: PhotoCityDescription) => {
    setChoosenObject(object);
  };

  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const handleOpenGallery = (object: PhotoCityDescription, index: number) => {
    const transformedAlbum = object.fotky.map((url) => ({ src: url }));

    const first_photo = {
      src: object.foto,
    };
    const all_photos = [first_photo, ...transformedAlbum];
    setChoosenAlbum(all_photos);
    setOpen(true);
    setInitialSlide(index + 1);
  };

  return (
    <div className="bg-primary">
      <div className="main_section flex flex-col md:flex-row  md:gap-6 xl:gap-8 2xl:gap-12">
        <div className="flex flex-col md:w-1/2">
          <p>[ Naše projekty ]</p>
          <h2>{choosenObject.mesto}</h2>
          <p className="pt-4">{choosenObject.popis}</p>
          <div className="scroll-container mt-4 !mb-4 md:hidden">
            {data &&
              data.map((object, index) => (
                <div
                  className={`${object.mesto === choosenObject.mesto && ""}`}
                  key={index}
                  onClick={() => handleNewChoosenObject(object)}
                >
                  <ButtonElementProject
                    text={object.mesto}
                    choosenCity={choosenObject.mesto}
                  />
                </div>
              ))}
          </div>

          <div className="flex-wrap gap-8 mt-8 mb-8 hidden md:flex">
            {data &&
              data.map((object, index) => (
                <div
                  className=""
                  key={index}
                  onClick={() => handleNewChoosenObject(object)}
                >
                  <ButtonElementProject
                    text={object.mesto}
                    choosenCity={choosenObject.mesto}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 mt-4 md:mt-0">
          <div className="relative ">
            {choosenObject.foto && (
              <Image
                src={choosenObject.foto}
                alt="panel"
                width={1000}
                height={1000}
                quality={100}
                priority={true}
                onClick={() => handleOpenGallery(choosenObject, -1)}
                className="w-full cursor-pointer rounded-[8px] object-cover absolute top-0 z-10 h-[250px] md:h-[350px] 2xl:h-[400px] 3xl:h-[520px] "
              />
            )}

            <Skeleton
              borderRadius={8}
              baseColor="#c4c4c4"
              className="absolute top-0  h-[248px] md:h-[344px] 2xl:h-[398px] 3xl:h-[518px]"
            />
          </div>
          <div className="grid grid-cols-3 mt-8 gap-4 ">
            {choosenObject &&
              choosenObject.fotky.map((object, index) => (
                <Image
                  src={object}
                  alt="panel"
                  width={500}
                  height={400}
                  className="rounded-[8px] object-cover h-[160px] cursor-pointer"
                  onClick={() => handleOpenGallery(choosenObject, index)}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
          index={initialSlide}
        />
      )}
    </div>
  );
};

export default HomePageBratislavaClient;
