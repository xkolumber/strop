import { Metadata } from "next";
import CeilingFirstElement from "../Components/CeilingPanel/CeilingFirstElement";
import CeilingPanelIntroData from "../Components/CeilingPanel/CeilingPanelIntroData";
import HomePageBratislava from "../Components/HomePageComponents/HomePageBratislava";
import HomePageInfo from "../Components/HomePageComponents/HomePageInfo";

export const metadata: Metadata = {
  title: "Stropné panely",

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
        url: "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fstrop_min.png?alt=media&token=fd5cb309-6229-4798-93e1-c7807d089ada",
        alt: "Strop",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <CeilingFirstElement />
      <CeilingPanelIntroData />

      <HomePageBratislava />
      <HomePageInfo />
    </>
  );
}
