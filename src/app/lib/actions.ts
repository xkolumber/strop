"use server";

import { DownloadPdf, PhotoCityDescription } from "../firebase/interface";

import { FieldValues } from "react-hook-form";
import { Resend } from "resend";
import EmailSentPdfToUser from "../../../emails/EmailSentPdfToUser";
import { EmailContactPage } from "../Components/EmailContactPage";
import { firestore } from "../firebase/configServer";
import { createSlug } from "./functions";

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
      fotky: [],
    });
    return "success";
  } catch (error) {
    return "false";
  }
}

export async function AdminActualizeStavbyPopisy(
  id: string,
  mesto: string,
  foto: string,
  popis: string,
  uploadedPhotos: string[],
  previousPhotos: string[]
) {
  const stavbyCollectionRef = firestore.collection("stavby_popisy");

  const final_photos = [...previousPhotos, ...uploadedPhotos];
  try {
    await stavbyCollectionRef.doc(id).update({
      mesto: mesto,
      foto: foto,
      popis: popis,
      fotky: final_photos,
    });
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
    return "success";
  } catch (error) {
    console.error("Error updating document:", error);
    return "false";
  }
}

export async function AdminAddNewPanel(
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
  rezy2: string
) {
  const stavbyCollectionRef = firestore.collection("panely");

  try {
    await stavbyCollectionRef.add({
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
      download_file: [],
    });
    return "success";
  } catch (error) {
    return "false";
  }
}

export async function AdminDeletePanel(id: string) {
  const stavbyCollectionRef = firestore.collection("panely");

  try {
    await stavbyCollectionRef.doc(id).delete();
    return "success";
  } catch (error) {
    console.error("Error updating document:", error);
    return "false";
  }
}

export async function AdminAddNewEmail(email: string, links: DownloadPdf[]) {
  const emailsCollectionRef = firestore.collection("emaily");

  try {
    await emailsCollectionRef.add({
      email: email,
      linky: links,
      datum: new Date().toISOString(),
    });
    return "success";
  } catch (error) {
    return "false";
  }
}

export async function sendEmailtoCustomer(email: string, links: DownloadPdf[]) {
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const attachments = links.map((object: DownloadPdf, index: number) => ({
    filename: `${object.nazov}.pdf`,
    path: object.pdf_link,
  }));

  try {
    const data = await resend.emails.send({
      from: "info@strop.sk",
      to: email,
      subject: links.length === 1 ? `Strop | Pdf súbor` : "Strop | Pdf súbory",
      react: EmailSentPdfToUser(),
      attachments: attachments,
    });
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function sendEmailContactForm(data: FieldValues) {
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const name = data.name;
  const email = data.email;
  const tel_number = data.tel_number;
  const interest = data.interest;
  const place = data.place;
  const date = data.date;
  const message = data.message;

  const emailHtml = EmailContactPage({
    name,
    email,
    tel_number,
    interest,
    place,
    date,
    message,
  });

  try {
    const data = await resend.emails.send({
      from: "info@strop.sk",
      to: "info@strop.sk",
      cc: "projekty@strop.sk",
      subject: "Dotaz od klienta z webstránky | STROP.sk",
      html: emailHtml,
    });
    return data;
  } catch (error) {
    throw new Error();
  }
}
