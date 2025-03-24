"use client";
import { blur_url } from "@/app/lib/functionsClient";
import Image from "next/image";

const HomePageInfo = () => {
  return (
    <div className="bg-secondary">
      <div className="main_section   lg:max-h-[900px]">
        <div className="flex flex-col lg:flex-row md:gap-6 xl:gap-8 2xl:gap-12 ">
          <div
            className="w-full lg:w-1/2 justify-center flex flex-col
    "
          >
            <p>[Logistika]</p>
            <h2>Informácie o doprave</h2>
            <p className="mt-4">
              Náklady na prepravu sú súčasťou cenovej ponuky, ktorú vám zašleme
              na základe dopytu. Dlhodobo spolupracujeme s overenými
              logistickými spoločnosťami, ktorým dôverujeme. Zabezpečujeme
              presné načasovanie príchodu na miesto stavby (vykládky). Počet
              vozidiel, ktoré používame, je vypočítaný na základe nosnosti
              nákladného vozidla s nosnosťou 24 ton a dĺžkou návesu 13,6 metra.
              Pri plánovaní prepravy zohľadňujeme počet a rozmery prefabrikátov,
              ale aj spôsob ich nakládky.
            </p>
            <p className="mt-4">
              {" "}
              Ak máte záujem o vlastné riešenie dopravy, nahláste vopred druh
              vozidla a evidenčné číslo ťahača a návesu. Uveďte takisto čas
              príchodu na miesto nakládky a presnú adresu miesta vykládky. Na
              želanie zákazníka môžeme zabezpečiť vozidlá s hydraulickými
              výsuvnými ramenami. Túto požiadavku je potrebné uviesť vopred.
              Garantujeme efektívny prístup a komplexný servis vo váš prospech.
              Naším cieľom je Vaša spokojnosť.
            </p>
          </div>

          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fdoprava.jpg?alt=media&token=4c077938-dc46-483d-b343-5946fd4fc8ff"
            }
            alt="panel"
            width={500}
            height={500}
            className="w-full lg:w-1/2 h-[inherit] object-cover rounded-[8px] mt-6 md:mt-0 md:max-h-[500px] xl:max-h-[700px]"
            placeholder="blur"
            blurDataURL={blur_url}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageInfo;
