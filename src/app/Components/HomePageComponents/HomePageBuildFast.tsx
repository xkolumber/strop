import Image from "next/image";
import Link from "next/link";
import ButtonElementBlack from "../ButtonElements/ButtonElementBlack";
import IconBuilding from "../Icons/IconBuilding";
import IconStar from "../Icons/IconStar";
import IconUser from "../Icons/IconUser";
import IconLike from "../Icons/IconLike";
import IconTime from "../Icons/IconTime";
import IconWeight from "../Icons/IconWeight";

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

  const info = [
    {
      icon: <IconLike />,
      text: "Šetríme Váš čas",
    },
    {
      icon: <IconTime />,
      text: "Nízka pracnosť",
    },
    {
      icon: <IconWeight />,
      text: "Vysoká unosnosť",
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
        <div className="flex flex-col  xl:flex-row gap-4 xl:gap-12  mt-8">
          <div className="xl:w-[30%] flex flex-col justify-between">
            <p>
              Pomôžeme vám urýchliť proces stavby a ušetriť finančné
              prostriedky. Inšpirujte sa novými možnosťami stavebného priemyslu,
              porovnajte si všetky výhody predpätých stropných dutinových
              panelov. Požiadajte o nezáväznú cenovú ponuku ešte dnes.
            </p>
            <p className="mt-4 xl:mt-8">
              Vizualizácie a cenové kalkulácie vykonávame individuálne pre každú
              stavbu na základe projektovej dokumentácie. Cenovú ponuku vám
              zašleme najneskôr do 48 hodín od dodania podkladov. Naši odborníci
              sú tu pre vás od projekcie až po technickú kontrolu správnosti
              zabudovania našich produktov.
            </p>
            <h2 className="mt-8 md:mt-16">Cenová ponuka</h2>
            <Link href={"/kontakt"} className="mt-4">
              <ButtonElementBlack text="Mám záujem" />
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
          <div className="flex flex-col  md:flex-row xl:w-[70%] gap-8 justify-center items-center">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row gap-8">
                <Image
                  src={"/build_fast.jpg"}
                  alt="Intro"
                  width={1000}
                  height={400}
                  quality={100}
                  priority={true}
                  className="xl:!w-1/2 xl:h-[400px] 2xl:h-[550px] object-cover rounded-[8px]"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/ANDx/+n//83c5NTw/QCnvMhVZGlpdXhhbG0AOUxZGSQpGis1AAUS6S8SqM/juOEAAAAASUVORK5CYII="
                />
                <Image
                  src={"/build_fast2.jpg"}
                  alt="Intro"
                  width={1000}
                  height={400}
                  quality={100}
                  priority={true}
                  className=" object-cover  xl:h-[400px] 2xl:h-[550px]   xl:w-1/2   rounded-[8px]"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg4NK0z2wPL+/k17BmYFBxnjhrZlFRuqSqKQMDu8ab//8fvftU1jUbANs+DosgoxQqAAAAAElFTkSuQmCC"
                />
              </div>
              <div className="flex-col md:flex-row justify-center items-center gap-8 mt-8 xl:mt-24 flex">
                {info.map((object, index) => (
                  <div className="flex flex-row items-center gap-2" key={index}>
                    <div className="w-24 h-24">{object.icon}</div>
                    <p>{object.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBuildFast;
