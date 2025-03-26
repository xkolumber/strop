import { Metadata } from "next";
import BlogsPage from "../Components/BlogSectionComponents/BlogsPage";

export const metadata: Metadata = {
  title: "Blogy",
  description:
    "Objavte naše odborné články a novinky zo sveta predpätých stropných systémov. Prinášame aktuálne informácie, technické riešenia a praktické rady pre staviteľov, architektov a investorov.",
  keywords: [
    "blog",
    "stavebníctvo",
    "stropné systémy",
    "predpäté stropy",
    "konštrukcia",
    "architektúra",
    "spirol",
  ],
  openGraph: {
    title: "Blogy",
    description:
      "Prečítajte si naše blogy o predpätých stropných systémoch, technických riešeniach a stavebných inováciách. Sledujte najnovšie trendy a získajte užitočné rady od odborníkov.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fblogy_foto.webp?alt=media&token=92256f77-c0df-40cd-b776-4228e19c742d",
        alt: "Blogy o stavebníctve",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <BlogsPage />
    </>
  );
}
