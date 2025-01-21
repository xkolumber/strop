import Link from "next/link";
import React from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import Image from "next/image";

const CeilingFirstElement = () => (
  <div className="main_section additional_padding">
    <div className="flex flex-col md:flex-row justify-between mb-8">
      <h2 className="md:w-[60%]">Stropné panely</h2>

      <div className="flex flex-col md:w-[40%]">
        <p className="">
          Naše stropné panely 200, 265, 320, 400, 500 sú určené predovšetkým pre
          stropné a strešné konštrukcie. Vďaka ich kvalite sú zaručene
          spoľahlivou investíciou do vašej stavby.
        </p>
        <Link className="flex flex-row gap-4 mt-4" href={"/kontakt"}>
          <ButtonElement text="Kontaktujte nás" />
        </Link>
      </div>
    </div>
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fstrop_min.png?alt=media&token=fd5cb309-6229-4798-93e1-c7807d089ada"
      alt="panel"
      width={1920}
      height={1080}
      className="w-full  rounded-[8px] h-[220px] md:h-[auto] object-cover"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNwdbJesWC2v58/AxMDw///r89f2b9z99yM3AQAitAMJTwYjEYAAAAASUVORK5CYII="
    />

    <h2 className="mt-16">Stropné panely</h2>
    <p className="pt-4 xl:max-w-[70%]">
      Panely sú navrhnuté najmä pre stropné a strešné konštrukcie. Ich
      všestrannosť spočíva v tom, že môžu byť uložené ako nosník, ale dajú sa
      použiť aj pre konzolové uloženie. Technológia prepínacích lán umožňuje
      dosihnuť nadvýšenie panelov (max. l/300), ktoré sa stanovuje v závislosti
      od viacerých faktorov.
    </p>
    <p className="pt-8 xl:max-w-[70%]">
      Pre optimálne výsledky je vhodné voliť vyššie prierezy, ktoré sú viac
      vystužené. Vzhľadom k nadvýšeniu dielcov je potrebné zvoliť hrúbku skladby
      podlahy minimálne 75 milimetrov, čím sa zabezpečí nielen stabilita, ale aj
      dlhodoba spoľahlivosť konštrukcie.
    </p>
  </div>
);

export default CeilingFirstElement;
