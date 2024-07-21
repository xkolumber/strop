import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElements/ButtonElement";
import Link from "next/link";

const ProfesionalIntro = () => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="md:w-[60%]">Pre profesionálov</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Na tejto stránke dájdete PDF technických špecifikácií súvisiacich s
            našimi produktami, aby sme vám umožnili ľahký prístup k dôležitým
            informáciám.
          </p>
          <Link className="flex flex-row gap-4" href={"/kontakt"}>
            <ButtonElement text="Kontaktujte nás" />
          </Link>
        </div>
      </div>
      <Image
        src={"/intro.jpg"}
        alt="Intro"
        sizes="100vw"
        width={1000}
        height={1000}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ProfesionalIntro;
