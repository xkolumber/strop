"use client";
import Image from "next/image";
import ButtonElement from "../ButtonElements/ButtonElement";
import { usePathname } from "next/navigation";

const HomePageInfo = () => {
  const pathname = usePathname();
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
            src={"/doprava.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="w-full lg:w-1/2 h-[inherit] object-cover rounded-[8px] mt-6 md:mt-0 md:max-h-[500px] lg:max-h-none"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ANfLye7Ir8C2sWNtdgD/7+yceWkQAAhcWmsAjYOLVj42gGxr69rbACQAB4FhXuvT0rWUgM+fGe8o1ol2AAAAAElFTkSuQmCC"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageInfo;
