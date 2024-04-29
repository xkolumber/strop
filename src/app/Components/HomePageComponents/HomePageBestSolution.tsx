import Image from "next/image";
import React from "react";

const HomePageBestSolution = () => {
  return (
    <div className="main_section additional_padding">
      <div
        className="flex flex-col md:flex-row justify-between
      "
      >
        <h2 className="md:w-[60%]">Najlepšie riešenie pre Vašu stavbu</h2>

        <div className="flex flex-col md:w-[40%]">
          <p className="">
            Špecializujeme sa na dodávanie predpätých stropných systémov pre
            stavby na celom území Slovenska, Česka a Rakúska. Sme hrdí na naše
            referencie. STROP SK je dynamická spoločnosť, ktorá sa rýchlo
            rozvíja. Sme presvedčení, že kľúčom k úspechu je individuálny
            prístup ku každému klientovi.
          </p>
          <div className="flex flex-row gap-4">
            <button
              className="btn btn--tertiary
          "
            >
              Produkty
            </button>
            <button className="btn btn--tertiary">Kontaktujte nás</button>
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
