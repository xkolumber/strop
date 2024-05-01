import React from "react";
import ButtonElement from "../ButtonElement";
import Image from "next/image";

const CeilingPanelIntro = () => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="md:w-[60%]">Stropné panely</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Naše stropné panely FF200, FF265, FF320, FF400 sú určené
            predovšetkým pre stropné a strešné konštrukcie. Vďaka ich kvalite sú
            zaručene spoľahlivou investíciou do vašej stavby.
          </p>
          <div className="flex flex-row gap-4">
            <ButtonElement text="Kontaktujte nás" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mb-16">
        <ButtonElement text="Typ 200" />
        <ButtonElement text="Typ 265" />
        <ButtonElement text="Typ 320" />
        <ButtonElement text="Typ 400" />
      </div>
      <Image
        src={"/intro.jpg"}
        alt="Intro"
        sizes="100vw"
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
      <h2 className="mt-16">Popis panelov</h2>
      <p>
        Panely FF200 sú navrhnuté najmä pre stropné a strešné konštrukcie. Ich
        všestrannosť spočíva v tom, že môžu byť uložené ako nosník, ale dajú sa
        použiť aj pre konzolové uloženie. Technológia prepínacích lán umožňuje
        dosihnuť nadvýšenie panelov (max. l/300), ktoré sa stanovuje v
        závislosti od viacerých faktorov.
      </p>
      <p className="mt-8">
        Pre optimálne výsledky je vhodné voliť vyššie prierezy, ktoré sú viac
        vystužené. Vzhľadom k nadvýšeniu dielcov je potrebné zvoliť hrúbku
        skladby podlahy minimálne 75 milimetrov, čím sa zabezpečí nielen
        stabilita, ale aj dlhodoba spoľahlivosť konštrukcie.
      </p>
    </div>
  );
};

export default CeilingPanelIntro;
