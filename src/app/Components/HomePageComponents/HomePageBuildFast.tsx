import React from "react";
import Image from "next/image";
import ButtonElement from "../ButtonElement";
import IconStar from "../Icons/IconStar";
import IconUser from "../Icons/IconUser";
import IconBuilding from "../Icons/IconBuilding";
import Link from "next/link";

const HomePageBuildFast = () => {
  const data = [
    {
      icon: <IconStar />,
      text: "20 rokov na slovenskom trhu",
    },
    {
      icon: <IconUser />,
      text: "9 772 spokojných zákazníkov",
    },
    {
      icon: <IconBuilding />,
      text: "254 miest na Slovensku",
    },
    {
      icon: <IconStar />,
      text: "27 838 m² ročne",
    },
  ];

  return (
    <div className="bg-secondary">
      <div className="main_section ">
        <p>[ O nás ]</p>
        <h2>
          Stavajte rýchlejšie a efektívnejšie vďaka novým predpätým stropným
          panelom. Prinášame nové riešenia do sveta stavieb!
        </h2>
        <div className="flex flex-col  md:flex-row gap-4">
          <div className="md:w-[30%] flex flex-col justify-between">
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
            <Link className="mt-4" href={"/kontakt"}>
              <ButtonElement text="Cenová ponuka" />
            </Link>
            <div className="flex flex-col gap-4 mt-8 mb-8">
              {data.map((one_data, index) => (
                <div className="flex flex-row gap-4 items-center" key={index}>
                  <div className="w-10">{one_data.icon}</div>
                  <p className="font-light">{one_data.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-[70%] gap-8">
            <Image
              src={"/build_faster11.jpg"}
              alt="Intro"
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              className=" w-fit h-[200px] object-contain md:h-fit rounded-[8px]"
            />
            <Image
              src={"/build_faster2.jpg"}
              alt="Intro"
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              className="object-contain w-fit h-[200px] md:h-fit rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBuildFast;
