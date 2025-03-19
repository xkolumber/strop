"use client";
import {
  PhotoCityDescription,
  PhotoCityDescriptionBasic,
} from "@/app/firebase/interface";
import Image from "next/image";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonElementProject from "../ButtonElements/ButtonElementProject";

import { GetProjectById } from "@/app/lib/functionsServer";
import { useQuery } from "@tanstack/react-query";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../NextImage";
import { getCity } from "@/app/lib/functionsClient";

interface Props {
  data: PhotoCityDescriptionBasic[] | [];
  first_project: PhotoCityDescription | null | undefined;
}

const HomePageBratislavaClient = ({ data, first_project }: Props) => {
  const [choosenObject, setChoosenObject] =
    useState<PhotoCityDescription | null>(first_project || null);
  const [selectedId, setSelectedId] = useState<string | null>(
    first_project?.id || null
  );
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const {
    data: project,
    error,
    isLoading,
  } = useQuery<PhotoCityDescription | null>({
    queryKey: ["project", selectedId],
    queryFn: async () => (selectedId ? await GetProjectById(selectedId) : null),
    enabled: !!selectedId,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (project) {
      setChoosenObject(project);
    }
  }, [project]);

  useEffect(() => {
    if (first_project) {
      setChoosenObject(first_project);
      setSelectedId(first_project.id);
    }
  }, [first_project]);

  const handleOpenGallery = (object: PhotoCityDescription, index: number) => {
    if (!object.fotky || object.fotky.length === 0) return;

    const transformedAlbum = object.fotky.map((url) => ({ src: url }));
    const first_photo = { src: object.foto };
    const all_photos = [first_photo, ...transformedAlbum];

    setChoosenAlbum(all_photos);
    setOpen(true);
    setInitialSlide(index + 1);
  };

  const handleNewItem = (id: string) => {
    setSelectedId(id);
    setChoosenObject(null);
  };

  return (
    <div className="bg-primary">
      <div className="main_section flex flex-col md:flex-row md:gap-6 xl:gap-8 2xl:gap-12">
        <div className="flex flex-col md:w-1/2">
          <p>[ Naše projekty ]</p>

          <h2>
            {selectedId === null && (
              <Skeleton width={200} baseColor="#c4c4c4" />
            )}

            {getCity(data, selectedId)}
          </h2>
          <p className="pt-4">
            {isLoading ? (
              <Skeleton count={2} baseColor="#c4c4c4" />
            ) : (
              choosenObject?.popis || <Skeleton count={2} baseColor="#c4c4c4" />
            )}
          </p>

          <div className="scroll-container mt-4 !mb-4 md:hidden">
            {data?.map((object, index) => (
              <div key={index} onClick={() => handleNewItem(object.id)}>
                <ButtonElementProject
                  text={object.mesto}
                  choosenCity={choosenObject?.mesto}
                />
              </div>
            ))}
          </div>

          <div className="flex-wrap gap-8 mt-8 mb-8 hidden md:flex">
            {data?.map((object, index) => (
              <div key={index} onClick={() => handleNewItem(object.id)}>
                <ButtonElementProject
                  text={object.mesto}
                  choosenCity={choosenObject?.mesto}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:w-1/2 mt-4 md:mt-0">
          <div className="relative h-[250px] md:h-[350px] 2xl:h-[400px] 3xl:h-[520px]">
            <div className="absolute inset-0 bg-[#c4c4c4] animate-pulse rounded-[8px] w-full"></div>
            {choosenObject?.foto && (
              <Image
                src={choosenObject?.foto}
                alt="panel"
                width={400}
                height={400}
                quality={75}
                priority
                onClick={() => handleOpenGallery(choosenObject, -1)}
                className="w-full cursor-pointer rounded-[8px] object-cover relative  z-10 h-[250px] md:h-[350px] 2xl:h-[400px] 3xl:h-[520px]"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ER9HZYAAAAASUVORK5CYII="
              />
            )}
          </div>

          <div className="grid grid-cols-3 mt-8 gap-4 relative">
            {choosenObject?.fotky?.length &&
              choosenObject.fotky.map((object, index) => (
                <div key={index} className="relative w-full h-[160px]">
                  <div className="absolute inset-0 bg-[#c4c4c4] animate-pulse rounded-[8px] w-full"></div>
                  <Image
                    key={index}
                    src={object}
                    alt="panel"
                    width={200}
                    height={100}
                    quality={1}
                    className="rounded-[8px] object-cover h-[160px] cursor-pointer z-10 relative"
                    onClick={() => handleOpenGallery(choosenObject, index)}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ER9HZYAAAAASUVORK5CYII="
                  />
                </div>
              ))}
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="inset-0 bg-[#c4c4c4] animate-pulse rounded-[8px] w-full h-[160px] "
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
