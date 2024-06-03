import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";
import Link from "next/link";

const HomePageTechnical = () => {
  return (
    <div className="main_section bg-primary nd:max-h-[600px]">
      <div className="flex flex-col md:flex-row md:gap-6 xl:gap-12">
        <Image
          src={"/panel.jpg"}
          alt="panel"
          width={500}
          height={500}
          className="w-full md:w-1/2 max-h-[400px] object-cover hidden md:block rounded-[8px]"
        />
        <div
          className="w-full md:w-1/2 justify-center  flex flex-col
        "
        >
          <p>[Pre profesionálov]</p>
          <h2>Technické špecifikácie panelov na stiahnutie v PDF</h2>
          <p>
            Získajte úplné informácie a podrobnosti o našich produktoch. Stačí
            vyplniť e-mail a my vám zašleme dokumenty s potrebnými technickými
            špecifikáciami a detailami.
          </p>{" "}
          <Link href={"/stropne-panely"}>
            <div className="mt-4">
              <ButtonElement text="Zistiť viac" />
            </div>
          </Link>
          <Image
            src={"/panel.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="w-full md:w-1/2 h-full object-cover  md:hidden mt-6 rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageTechnical;
