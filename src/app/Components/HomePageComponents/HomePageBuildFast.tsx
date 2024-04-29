import React from "react";
import Image from "next/image";

const HomePageBuildFast = () => {
  return (
    <div className="bg-secondary">
      <div className="main_section ">
        <h2>
          Stavajte rýchlejšie a efektívnejšie vďaka novým predpätým stropným
          panelom. Prinášame nové riešenia do sveta stavieb!
        </h2>
        <div className="flex flex-col  md:flex-row">
          <div className="md:w-[30%]">
            <p>
              Pomôžeme vám urýchliť proces stavby a ušetriť finančné
              prostriedky. Inšpirujte sa novými možnosťami stavebného priemyslu,
              porovnajte si všetky výhody predpätých stropných dutinových
              panelov. Požiadajte o nezáväznú cenovú ponuku ešte dnes.
            </p>
            <p>
              Vizualizácie a cenové kalkulácie vykonávame individuálne pre každú
              stavbu na základe projektovej dokumentácie. Cenovú ponuku vám
              zašleme najneskôr do 48 hodín od dodania podkladov. Naši odborníci
              sú tu pre vás od projekcie až po technickú kontrolu správnosti
              zabudovania našich produktov.
            </p>
            <button className="btn btn--tertiary">Cenová ponuka</button>
          </div>
          <div className="flex flex-row md:w-[70%]">
            <Image
              src={"/build_faster1.jpg"}
              alt="Intro"
              width={100}
              height={100}
              quality={100}
              className="object-contain w-full h-full"
            />
            <Image
              src={"/build_faster2.jpg"}
              alt="Intro"
              width={100}
              height={1000}
              quality={100}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBuildFast;
