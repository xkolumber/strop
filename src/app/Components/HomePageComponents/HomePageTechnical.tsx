import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";

const HomePageTechnical = () => {
  return (
    <div className="main_section bg-primary">
      <div className="flex flex-col md:flex-row md:gap-6">
        <Image
          src={"/panel.jpg"}
          alt="panel"
          width={500}
          height={500}
          className="w-full md:w-1/2 h-[300px] object-cover hidden md:block rounded-[8px]"
        />
        <div
          className="w-full md:w-1/2
        "
        >
          <p>[Pre profesionálov]</p>
          <h2>Technické špecifikácie panelov na stiahnutie v PDF</h2>
          <p>
            Získajte úplné informácie a podrobnosti o našich produktoch. Stačí
            vyplniť e-mail a my vám zašleme dokumenty s potrebnými technickými
            špecifikáciami a detailami.
          </p>{" "}
          <div className="mt-4">
            <ButtonElement text="Zistiť viac" />
          </div>
          <Image
            src={"/panel.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="w-full md:w-1/2 h-[300px] object-cover  md:hidden mt-6 rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageTechnical;
