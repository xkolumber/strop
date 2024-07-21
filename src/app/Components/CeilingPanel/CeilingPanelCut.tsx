import React from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import Image from "next/image";

const CeilingPanelCut = () => {
  return (
    <div className="bg-secondary">
      <div className="main_section ">
        <div className="flex flex-col md:flex-row md:gap-6">
          <div
            className="w-full md:w-1/2
"
          >
            <p>[Možnosti úprav]</p>
            <h2>Rezy</h2>
            <p>
              Panely sa dajú rezať na požadované šírky. Šírky  rezaných dielcov
              sa volia podľa umiestnenia dutín v paneloch, a to vždy tak, aby
              rez optimálne prechádzal osou dutiny. Panely sa dajú taktiež
              upraviť šikmými rezmi  pod požadovaným uhlom, výrezy, výhraby
              alebo vývrty napríklad pre vedenie VZT, ZTI. Dĺžka panelov je
              ľubovoľná, dielce sa režú podľa potreby na požadovanú dĺžku so
              zaokrúhľovaním na celé centimetre.
            </p>
            <h2 className="mt-4">Otvory</h2>
            <p>
              Otvory v paneloch sa robia už pri výrobe, môžu sa ale dodatočne
              vyvŕtať až na stavbe. Pri paneloch so štyrmi výstužnými lanami
              musia prestupy prechádzať výhradne dutinami, pri paneloch s viac
              než štyrmi výstužnými lanami sa dajú urobiť otvory väčšie ako sú
              dutiny, ale každý taký zásah musí posúdiť statik. Pri vŕtaní
              otvorov je dovolené používať príklepovú vŕtačku, použitie
              vibračného kladiva je zakázané.
            </p>
            <p className="mt-4">
              Otvor v paneloch sa dá vyriešiť taktiež za pomoci oceľovej výmeny.
              Výmena sa vloží medzi dva panely alebo medzi panel a stenu a uloží
              sa na ??u skrátený dielec vymedzujúci požadovaný otvor. Pri návrhu
              konštrukcie stropu sa pri tom vychádza z predpokladu, že oceľová
              výmena v montážnom stave prenáša zaťaženie dielcov, o ktoré sa
              opiera. Po zálievke špár medzi dielcami uloženými na oceľovú
              výmenu sa prenáša zaťaženie do susedných dielcov cez špáru medzi
              dielcami. Panel osadený na oceľovú výmenu je možné upraviť
              vybraním do spodného líca prvku, čím sa docieli zarovnanie
              spodného líca výmeny a dielca. Taký postup je výhodný , keď
              zákazník počíta ako s konečnou úpravou stropu nanesenie stierky.
            </p>
            <ButtonElement text="Zistiť viac" />
          </div>
          <Image
            src={"/panel.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="w-full md:w-1/2 object-cover rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CeilingPanelCut;
