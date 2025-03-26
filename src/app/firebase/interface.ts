import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity-setting/sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface PanelProduct {
  id: string;
  foto: string;
  nazov: string;
  otvory1: string;
  otvory2: string;
  predbezny_vypocet: string;
  podrobny_vypocet: string;
  poziarna_odolnost: string;
  popis1: string;
  popis2: string;
  rezy1: string;
  rezy2: string;
  slug: string;
  download_file: DownloadPdf[];
}

export interface PanelProductHomePage {
  id: string;
  foto: string;
  nazov: string;
  popis1: string;
  popis2: string;
  slug: string;
}

export interface PanelProductSlugTitle {
  slug: string;
  nazov: string;
}

export interface PanelProductLoad {
  foto: File | null;
  nazov: string;
  otvory1: string;
  otvory2: string;
  predbezny_vypocet: string;
  podrobny_vypocet: string;
  poziarna_odolnost: string;
  popis1: string;
  popis2: string;
  rezy1: string;
  rezy2: string;
  slug: string;
  download_file: DownloadPdfLoad[];
}

export interface DownloadPdf {
  nazov: string;
  pdf_link: string;
}

export interface DownloadPdfLoad {
  nazov: string;
  pdf_link: File | null;
}

export interface Blog {
  title: string;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  photo: string;
  photo_thumbnail: string;
  content: any;
  photo2: string;
  photo3: string;
  content2: any;
  photo4: string;
  content3: any;
  photo5: string;
}

export interface PhotoCityDescription {
  foto: string;
  mesto: string;
  popis: string;
  id: string;
  fotky: string[];
}

export interface PhotoCityDescriptionBasic {
  foto: string;
  mesto: string;
  popis: string;
  id: string;
}

export interface Email {
  email: string;
  linky: DownloadPdf[];
  datum: string;
}
