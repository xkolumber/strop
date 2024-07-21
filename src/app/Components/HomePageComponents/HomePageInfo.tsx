"use client";
import Image from "next/image";
import ButtonElement from "../ButtonElements/ButtonElement";
import { usePathname } from "next/navigation";

const HomePageInfo = () => {
  const pathname = usePathname();
  return (
    <div className="bg-secondary">
      <div className="main_section   md:max-h-[900px]">
        <div className="flex flex-col md:flex-row md:gap-6 ">
          <div
            className="w-full md:w-1/2 justify-center flex flex-col
    "
          >
            <p>[Logistika]</p>
            <h2>Informácie o doprave</h2>
            <p>
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
            <div className="mt-4 mb-4">
              <ButtonElement text="Zistiť viac" />
            </div>
          </div>

          {pathname === "/o-nas" ? (
            <Image
              src={"/car.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="w-full md:w-1/2 h-[inherit] object-cover rounded-[8px]"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGM4++DJp///OxeurmpKYCjMip/d3ByWnOydE81gw8DgxcCgwsDAq6LFUFJQEBkQVFFeNrGtGQBs5RQPZO5OaAAAAABJRU5ErkJggg=="
            />
          ) : (
            <Image
              src={"/doprava.jpg"}
              alt="panel"
              width={500}
              height={500}
              className="w-full md:w-1/2 h-[inherit] object-cover rounded-[8px]"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/ANfLye7Ir8C2sWNtdgD/7+yceWkQAAhcWmsAjYOLVj42gGxr69rbACQAB4FhXuvT0rWUgM+fGe8o1ol2AAAAAElFTkSuQmCC"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePageInfo;
