"use server";

import { revalidatePath } from "next/cache";
import { DownloadPdf } from "../firebase/interface";

import { firestore } from "../firebase/configServer";
import { createSlug } from "./functions";

export async function doRevalidate(pathname: string) {
  revalidatePath(pathname);
}

export async function AdminActualizePanel(
  foto: string,
  nazov: string,
  otvory1: string,
  otvory2: string,
  predbezny_vypocet: string,
  podrobny_vypocet: string,
  poziarna_odolnost: string,
  popis1: string,
  popis2: string,
  rezy1: string,
  rezy2: string,
  slug: string
) {
  const produktyCollectionRef = firestore.collection("panely");
  const querySnapshot = await produktyCollectionRef
    .where("slug", "==", slug)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");
    return "false";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;

  await produktyCollectionRef.doc(docId).update({
    foto: foto,
    nazov: nazov,
    otvory1: otvory1,
    otvory2: otvory2,
    predbezny_vypocet: predbezny_vypocet,
    podrobny_vypocet: podrobny_vypocet,
    poziarna_odolnost: poziarna_odolnost,
    popis1: popis1,
    popis2: popis2,
    rezy1: rezy1,
    rezy2: rezy2,
    slug: createSlug(nazov),
  });
  revalidatePath(`/admin/produkty/[${slug}]/page`, "page");
  return "success";
}

export async function AdminActualizePdf(
  downloadFiles: DownloadPdf[],
  url_pdf: string,
  slug: string,
  index: number
) {
  const produktyCollectionRef = firestore.collection("panely");
  const querySnapshot = await produktyCollectionRef
    .where("slug", "==", slug)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");
    return "false";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;
  const productData = doc.data();

  const updatedDownloadFile = productData.download_file.map(
    (file: DownloadPdf, i: number) => {
      if (i === index) {
        return {
          nazov: downloadFiles[index].nazov,
          pdf_link: url_pdf === "" ? downloadFiles[index].pdf_link : url_pdf,
        };
      }
      return file;
    }
  );

  await produktyCollectionRef.doc(docId).update({
    download_file: updatedDownloadFile,
  });
  revalidatePath(`/admin/produkty/[${slug}]/page`, "page");
  return "success";
}

export async function AdminAddPdf(
  newPdfTitle: string,
  url_pdf: string,
  slug: string
) {
  const produktyCollectionRef = firestore.collection("panely");
  const querySnapshot = await produktyCollectionRef
    .where("slug", "==", slug)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");
    return "false";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;
  const productData = doc.data();

  const new_object_pdf = {
    nazov: newPdfTitle,
    pdf_link: url_pdf,
  };

  const all_pdf_objects = [
    ...(productData.download_file || []),
    new_object_pdf,
  ];

  await produktyCollectionRef.doc(docId).update({
    download_file: all_pdf_objects,
  });
  revalidatePath(`/admin/produkty/[${slug}]/page`, "page");
  return "success";
}

export async function AdminAddDeletePDf(
  nazov: string,
  index: number,
  slug: string
) {
  const produktyCollectionRef = firestore.collection("panely");
  const querySnapshot = await produktyCollectionRef
    .where("slug", "==", slug)
    .get();

  if (querySnapshot.empty) {
    console.error("Document does not exist for uid:");
    return "false";
  }

  const doc = querySnapshot.docs[0];
  const docId = doc.id;
  const productData = doc.data();

  const updatedDownloadFile = productData.download_file.filter(
    (file: DownloadPdf) => file.nazov !== nazov
  );

  await produktyCollectionRef.doc(docId).update({
    download_file: updatedDownloadFile,
  });
  revalidatePath(`/admin/produkty/[${slug}]/page`, "page");
  return "success";
}

export async function AdminAddNewStavbyPopisy(
  url_foto: string,
  newCity: string,
  newDescription: string
) {
  const stavbyCollectionRef = firestore.collection("stavby_popisy");

  try {
    await stavbyCollectionRef.add({
      foto: url_foto,
      mesto: newCity,
      popis: newDescription,
    });
    revalidatePath("/admin/pridanie-foto-popis");
    return "success";
  } catch (error) {
    return "false";
  }
}

export async function AdminActualizeStavbyPopisy(
  id: string,
  mesto: string,
  foto: string,
  popis: string
) {
  const stavbyCollectionRef = firestore.collection("stavby_popisy");
  try {
    await stavbyCollectionRef.doc(id).update({
      mesto: mesto,
      foto: foto,
      popis: popis,
    });
    revalidatePath("/admin/pridanie-foto-popis");
    return "success";
  } catch (error) {
    console.error("Error updating document:", error);
    return "false";
  }
}

export async function AdminDeleteCertainStavbyPopisy(id: string) {
  const stavbyCollectionRef = firestore.collection("stavby_popisy");

  try {
    await stavbyCollectionRef.doc(id).delete();
    revalidatePath("/admin/pridanie-foto-popis");
    return "success";
  } catch (error) {
    console.error("Error updating document:", error);
    return "false";
  }
}
