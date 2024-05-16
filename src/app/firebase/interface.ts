export interface PanelProduct {
  popis1: string;
  popis2: string;
  rezy1: string;
  rezy2: string;
  otvory1: string;
  otvory2: string;
  predbezny_vypocet: string;
  podrobny_vypocet: string;
  poziarna_odolnost: string;
  slug: string;
  download_file: DownloadPdf[];
}

export interface DownloadPdf {
  title: string;
  pdf_link: string;
}
