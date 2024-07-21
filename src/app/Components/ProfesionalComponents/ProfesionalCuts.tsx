import React from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import Image from "next/image";

const ProfesionalCuts = () => {
  return (
    <div className="main_section">
      <div className="flex flex-col md:flex-row md:gap-12">
        <div
          className="md:w-1/2
  "
        >
          <p>[Možnosti úprav]</p>
          <h2>Rezy</h2>
          <p>
            Stropné panely sa dajú rezať na požadované šírky v paneloch tak, aby
            rez optimálne prechádzal osou dutiny. Možno vykonať aj šikmé rezy
            (výrezy, výhraby alebo vývrty) pod požadovaným uhlom pre vedenie VZT
            či ZTI. Rezy na požadovanú dĺžku sa zaokrúhľujú na celé centimetre.
          </p>

          <h2 className="mt-12">Otvory</h2>
          <p>
            Pri výrobe a montáži panelov je možné vŕtať otvory použitím
            príklepovej vŕtačky (vibračné kladivo je zakázané). Pri paneloch so
            štyrmi výstužnými lanami musia prestupy prechádzať dutinami. Pri
            paneloch s viac než štyrmi lanami musí odborník posúdiť možnosť
            vŕtania väčších otvorov.  
          </p>
          <p className="mt-4">
            Otvory v paneloch sa dajú tiež vyriešiť pomocou oceľovej výmeny,
            ktorá sa umiestni medzi panely alebo medzi panel a stenu a položí sa
            na ňu skrátený dielec, čo vytvorí požadovaní otvor. Tento postup je
            vhodný, ak počítate s nanesením stierky, ako s poslednou úpravou
            stropu. Pri návrhu konštrukcie stropu sa predpokladá, že oceľová
            výmena v montážnom stave prenáša zaťaženie dielcov, o ktoré sa
            opiera. Po zálievke špár medzi dielcami sa zaťaženie prenáša do
            susedných dielcov. Panel osadený na oceľovú výmenu sa môže
            jednoducho upraviť vybraním do spodného líca prvku, čím sa dosiahne
            zarovnanie spodného líca a celého dielca.
          </p>
        </div>
        <Image
          src={"/rezy_otvory.jpg"}
          alt="panel"
          width={500}
          height={500}
          className="w-full md:w-1/2 rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default ProfesionalCuts;
