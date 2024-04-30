"use client";
import React, { useState } from "react";
import ButtonElement from "../ButtonElement";
import IconDownload from "../Icons/IconDownload";

const downloads = [
  {
    title: "Predpätý stropný panel typu FF",
    link: "",
  },
  {
    title: "Stropný panel FF 200 A",
    link: "",
  },
  {
    title: "Stropný panel FF 200 B",
    link: "",
  },
  {
    title: "Stropný panel FF 200 C",
    link: "",
  },
  {
    title: "Stropný panel FF 200 D",
    link: "",
  },
  {
    title: "Jednostranná výmena k panelom FF200 / 900",
    link: "",
  },
  {
    title: "Obojstranná výmena k panelom FF200 / 900",
    link: "",
  },
  {
    title: "Jednostranná výmena k panelom FF200 / 1200",
    link: "",
  },
  {
    title: "Obojstranná výmena k panelom FF200 / 1200",
    link: "",
  },
  {
    title: "Výmena k panelom FF – materiál k výrobe",
    link: "",
  },
  {
    title: "STROP.SK certifikaty 1",
    link: "",
  },
  {
    title: "  STROP.SK certifikaty 2",
    link: "",
  },
];

const ProfesionalDownload = () => {
  const [hoveredItem, setHoveredItem] = useState(-1);
  return (
    <div className="main_section bg-primary">
      <p>[Na stiahnutie]</p>
      <h2>Na stiahnutie</h2>
      <p>
        Tieto dokumenty obsahujú podrobné údaje o našich výrobkoch, ich
        parametre, vlastnosti a iné technické podrobnosti, ktoré môžu byť pre
        vás dôležité pri projektoch. Stačí vyplniť e-mail a my vám zašleme
        vybrané dokumenty.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <ButtonElement text="Typ FF20" />
        <ButtonElement text="Typ FF20" />
        <ButtonElement text="Typ FF20" />
        <ButtonElement text="Typ FF20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8  gap-4">
        {downloads.map((one_object, index) => (
          <div
            className="border-black border rounded-[8px] p-4 2xl:p-7 flex flex-row justify-between items-center cursor-pointer"
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(-1)}
          >
            <p
              className={`${
                hoveredItem === index &&
                "font-semibold  transition-transform ease-in duration-75"
              }`}
            >
              {one_object.title}
            </p>
            <IconDownload isHovered={hoveredItem === index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfesionalDownload;
