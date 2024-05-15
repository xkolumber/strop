import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";

const zakazky = [
  { title: "Senec - Shell" },
  { title: "Miloslav" },
  { title: "Šamorín" },
  { title: "Čavoj" },
  { title: "Nová Ves" },
  { title: "Trnava" },
  { title: "Púchov" },
  { title: "Senica" },
  { title: "Nitrianske Pravno" },
  { title: "Veľký Biel" },
  { title: "Piešťany" },
  { title: "Cabaj Čápor" },
  { title: "Nemšová" },
  { title: "Lubina" },
];

const HomePageBratislava = () => {
  return (
    <div className="main_section flex flex-col md:flex-row bg-primary gap-6">
      <div className="flex flex-col md:w-1/2">
        <p>[ Naše projekty ]</p>
        <h2>Bratislava - Ružinov</h2>
        <p>
          Máme za sebou mnoho komplikovaných stavebných projektov, vďaka ktorým
          sme sa stali stabilným partnerom stavebných spoločností na území
          celého Slovenska.
        </p>

        <div className="flex flex-wrap gap-8 mt-8 mb-8">
          {zakazky.map((object, index) => (
            <ButtonElement text={object.title} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:w-1/2">
        <Image
          src={"/bratislava1.jpg"}
          alt="panel"
          width={500}
          height={500}
          className="w-full  h-full rounded-[8px]"
        />{" "}
        <div className="grid grid-cols-3 mt-8 gap-4 ">
          <Image
            src={"/bratislava1.jpg"}
            alt="panel"
            width={500}
            height={400}
            className="rounded-[8px] object-cover"
          />{" "}
          <Image
            src={"/bratislava2.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava3.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava4.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava5.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />{" "}
          <Image
            src={"/bratislava6.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageBratislava;
