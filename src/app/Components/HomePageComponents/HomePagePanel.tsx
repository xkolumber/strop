"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonElement from "../ButtonElement";
import IconPlus from "../Icons/IconPlus";
import Link from "next/link";

const panels = [
  {
    nazov: "Stropný panel 200",
    popis1:
      "Vďaka nízkej váhe a špeciálnemu spôsobu výroby sú dutinové panely vhodné aj pre tie najnáročnejšie projekty. Veľkou výhodou našich panelov je aj variabilita možností uloženia. Priestupy a otvory podľa individuálnych požiadaviek môžeme pripraviť už pri výrobe, vrátane otvorov pre schodiská a priestupy väčších rozmerov. Detaily a technické riešenia sú pripravuje naše oddelenie projekcie, takže  náš zákazník vopred vie, ako bude jeho riešenie vyzerať. ",
    popis2:
      "Dutinové panely s hrúbkou 200 mm sa vyrábajú v troch rôznych pevnostných kategóriách: základný model (200/1) zosilnený model (200/2) a najpevnejší panel (200/3).",
  },
  {
    nazov: "Stropný panel 265",
    popis1:
      "Vďaka nízkej váhe 265 a špeciálnemu spôsobu výroby sú dutinové panely vhodné aj pre tie najnáročnejšie projekty. Veľkou výhodou našich panelov je aj variabilita možností uloženia. Priestupy a otvory podľa individuálnych požiadaviek môžeme pripraviť už pri výrobe, vrátane otvorov pre schodiská a priestupy väčších rozmerov. Detaily a technické riešenia sú pripravuje naše oddelenie projekcie, takže  náš zákazník vopred vie, ako bude jeho riešenie vyzerať. ",
    popis2:
      "Dutinové panely s hrúbkou 200 mm sa vyrábajú v troch rôznych pevnostných kategóriách: základný model (200/1) zosilnený model (200/2) a najpevnejší panel (200/3).",
  },
  {
    nazov: "Stropný panel 320",
    popis1:
      "Vďaka nízkej váhe 320 a špeciálnemu spôsobu výroby sú dutinové panely vhodné aj pre tie najnáročnejšie projekty. Veľkou výhodou našich panelov je aj variabilita možností uloženia. Priestupy a otvory podľa individuálnych požiadaviek môžeme pripraviť už pri výrobe, vrátane otvorov pre schodiská a priestupy väčších rozmerov. Detaily a technické riešenia sú pripravuje naše oddelenie projekcie, takže  náš zákazník vopred vie, ako bude jeho riešenie vyzerať. ",
    popis2:
      "Dutinové panely s hrúbkou 200 mm sa vyrábajú v troch rôznych pevnostných kategóriách: základný model (200/1) zosilnený model (200/2) a najpevnejší panel (200/3).",
  },
  {
    nazov: "Stropný panel 400",
    popis1:
      "Vďaka nízkej váhe 400 a špeciálnemu spôsobu výroby sú dutinové panely vhodné aj pre tie najnáročnejšie projekty. Veľkou výhodou našich panelov je aj variabilita možností uloženia. Priestupy a otvory podľa individuálnych požiadaviek môžeme pripraviť už pri výrobe, vrátane otvorov pre schodiská a priestupy väčších rozmerov. Detaily a technické riešenia sú pripravuje naše oddelenie projekcie, takže  náš zákazník vopred vie, ako bude jeho riešenie vyzerať. ",
    popis2:
      "Dutinové panely s hrúbkou 200 mm sa vyrábajú v troch rôznych pevnostných kategóriách: základný model (200/1) zosilnený model (200/2) a najpevnejší panel (200/3).",
  },
];

export function createSlug(title: string): string {
  const slug = title
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

  return slug;
}

const HomePagePanel = () => {
  const [choosenIndex, setChoosenIndex] = useState(0);

  return (
    <div className="main_section ">
      <div className="flex flex-col md:flex-row md:gap-6 ">
        <Image
          src={"/panel.jpg"}
          alt="panel"
          width={500}
          height={500}
          className="w-full md:w-1/2"
        />

        <div className="justify-between flex flex-col">
          <div className="flex flex-col">
            <p>[Produkty]</p>
            <h2>{panels[choosenIndex].nazov}</h2>
            <p>{panels[choosenIndex].popis1}</p>
            <p className="mt-4">{panels[choosenIndex].popis2}</p>
            <Link
              className=""
              href={`stropne-panely?typ=${createSlug(
                panels[choosenIndex].nazov
              )}`}
            >
              <ButtonElement text="Zistiť viac" />
            </Link>
          </div>
          <div className="flex flex-col">
            {panels.map((panel, index) => (
              <div
                className="flex flex-row justify-between"
                onClick={() => setChoosenIndex(index)}
                key={index}
              >
                {index != choosenIndex && (
                  <>
                    <div className="p">{panel.nazov}</div>
                    <IconPlus />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePanel;
