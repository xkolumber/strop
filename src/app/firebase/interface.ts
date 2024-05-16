export interface PanelProduct {
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
