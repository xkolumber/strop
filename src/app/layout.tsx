import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { AuthContextProvider } from "./auth/Provider";
import CookieComponent from "./Components/CookieComponent";
import Provider from "./util/Provider";
import GoogleAnalyticsScript from "./Components/GoogleAnalyticsScript";

export const metadata: Metadata = {
  title: "Strop",

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
    title: "Strop",
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

const own_font = localFont({
  src: [
    {
      path: "/own_font/HelveticaNeueThin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/own_font/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/own_font/HelveticaNeueMedium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/own_font/HelveticaNeueRoman.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/own_font/HelveticaNeueBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <GoogleAnalyticsScript />
      <body className={own_font.className}>
        <Provider>
          <AuthContextProvider>
            <Navbar />

            {children}
            <Footer />
            <CookieComponent />
          </AuthContextProvider>
        </Provider>
      </body>
    </html>
  );
}
