import { Metadata } from "next";
import AboutUsFirstElement from "../Components/AboutUsComponents/AboutUsFirstElement";
import AboutUsModernSociety from "../Components/AboutUsComponents/AboutUsModernSociety";
import AboutUsTeamProfesional from "../Components/AboutUsComponents/AboutUsTeamProfesional";
import HomePageBlogSection from "../Components/HomePageComponents/HomePageBlogSection";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

export const metadata: Metadata = {
  title: "O nás",

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
    title: "O nás",
    description:
      "Špecializujeme sa na dodávanie predpätých stropných systémov pre stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny prístup ku každému klientovi.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_stavieb_new%2FDSC_7097.webp?alt=media&token=557576a5-8674-4e5c-88d1-b47ed4b7e495",
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
      <AboutUsModernSociety />

      <AboutUsFirstElement />
      <AboutUsTeamProfesional />

      <HomePageBlogSection colorGray={false} />
      <HomePageInfo />
    </div>
  );
};

export default page;
