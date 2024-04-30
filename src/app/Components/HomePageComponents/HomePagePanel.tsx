import Image from "next/image";
import React from "react";
import ButtonElement from "../ButtonElement";

const HomePagePanel = () => {
  return (
    <div className="main_section">
      <div className="flex flex-col md:flex-row md:gap-6">
        <Image
          src={"/panel.jpg"}
          alt="panel"
          width={500}
          height={500}
          className="w-full md:w-1/2"
        />
        <div
          className="
        "
        >
          <p>[Produkty]</p>
          <h2>Stropný panel</h2>
          <p>
            Vďaka nízkej váhe a špeciálnemu spôsobu výroby sú dutinové panely
            vhodné aj pre tie najnáročnejšie projekty. Veľkou výhodou našich
            panelov je aj variabilita možností uloženia. Priestupy a otvory
            podľa individuálnych požiadaviek môžeme pripraviť už pri výrobe,
            vrátane otvorov pre schodiská a priestupy väčších rozmerov. Detaily
            a technické riešenia sú pripravuje naše oddelenie projekcie, takže
            náš zákazník vopred vie, ako bude jeho riešenie vyzerať. Dutinové
            panely s hrúbkou 200 mm sa vyrábajú v troch rôznych pevnostných
            kategóriách: základný model (200/1) zosilnený model (200/2) a
            najpevnejší panel (200/3).
          </p>
          <ButtonElement text="Zistiť viac" />
          <p>Stropný panel</p>
          <p>Stropný panel</p>
          <p>Stropný panel</p>
        </div>
      </div>
    </div>
  );
};

export default HomePagePanel;
