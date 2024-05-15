import Image from "next/image";
import React from "react";
import ButtonElement from "../ButtonElement";

const HomePageBestSolution = () => {
  return (
    <div className="main_section additional_padding">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="md:w-[60%]">Najlepšie riešenie pre Vašu stavbu</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Špecializujeme sa na dodávanie predpätých stropných systémov pre
            stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše
            referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo
            rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny
            prístup ku každému klientovi.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <ButtonElement text="Produkty" />
            <ButtonElement text="Kontaktujte nás" />
          </div>
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

export default HomePageBestSolution;
