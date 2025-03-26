import React from "react";
import ContactForm from "../Components/ContactForm";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",

  description:
    "Špecializujeme sa na dodávanie predpätých stropných systémov pre stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny prístup ku každému klientovi.",
  keywords: [
    "Strop",
    "stropný systém",
    "panel",
    "stropný panel",
    "predpätý strop",
    "spirol",
  ],
  openGraph: {
    title: "Stropné panely",
    description:
      "Špecializujeme sa na dodávanie predpätých stropných systémov pre stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny prístup ku každému klientovi.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fcontact_photo.png?alt=media&token=48202c42-ac40-4d50-9820-6a7c924d823f",
        alt: "Strop",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  return (
    <div className="">
      <ContactForm />
      <HomePageInfo />
    </div>
  );
};

export default page;
