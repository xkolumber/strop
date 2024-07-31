import React from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import Image from "next/image";
import Link from "next/link";

const AboutUsTeamProfesional = () => {
  return (
    <div className="bg-primary">
      <div className="main_section ">
        <div className="flex flex-col xl:flex-row  xl:gap-8 3xl:gap-12">
          <div
            className="w-full xl:w-1/2
"
          >
            <p>[Profesionáli]</p>
            <h2>Tím profesionálov</h2>
            <p className="pt-4">
              Od roku 2004 sa náš tím STROP SK, s.r.o. vyvíjal a rástol.
              Neustále sme prinášali inovatívne riešenia pre slovenský stavebný
              priemysel. Naša cesta začala s víziou priniesť modernú technológiu
              predpätých stropných systémov. Spolupracovali sme s renomovanými
              výrobcami z Francúzska, Španielska a Maďarska, čo nám umožnilo
              získať bohaté skúsenosti a dobrý rozbeh.{" "}
            </p>
            <p className="mt-4">
              {" "}
              Vďaka inovatívnym riešeniam komplikovaných stavebných projektov
              sme sa stali stabilným partnerom stavebných spoločností na území
              celej Slovenskej Republiky. Naši odborníci stoja po boku klienta
              od prvého kontaktu až po úspešnú realizáciu stavby.
            </p>
            <p className="mt-4">
              Každý náš produkt je starostlivo navrhnutý a vyrobený s dôrazom na
              detail, aby spĺňal najvyššie normy kvality stanovené Európskou
              úniou. Označením &ldquo;slovenský výrobok&ldquo; zdôrazňujeme
              dôveryhodnosť a hodnotu každého nášho produktu. Sme hrdí na to, že
              naše produkty a realizácie presahujú očakávania.
            </p>
            <p className="mt-4 mb-4">
              {" "}
              Ak máte záujem o vlastné riešenie dopravy, nahláste vopred druh
              vozidla a evidenčné číslo ťahača a návesu. Uveďte takisto čas
              príchodu na miesto nakládky a presnú adresu miesta vykládky. Na
              želanie zákazníka môžeme zabezpečiť vozidlá s hydraulickými
              výsuvnými ramenami. Túto požiadavku je potrebné uviesť vopred.
              Garantujeme efektívny prístup a komplexný servis vo váš prospech.
              Naším cieľom je vaša spokojnosť.
            </p>
            <div className="mb-4">
              <Link href={"/kontakt"}>
                <ButtonElement text="Kontaktovať" />
              </Link>
            </div>
          </div>
          <Image
            src={"/team.png"}
            alt="panel"
            width={500}
            height={500}
            priority={true}
            className="w-full xl:w-1/2 h-full rounded-[8px] object-cover  mt-6 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsTeamProfesional;
