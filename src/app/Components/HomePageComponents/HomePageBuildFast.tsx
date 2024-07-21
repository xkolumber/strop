import Image from "next/image";
import Link from "next/link";
import ButtonElementBlack from "../ButtonElements/ButtonElementBlack";
import IconBuilding from "../Icons/IconBuilding";
import IconStar from "../Icons/IconStar";
import IconUser from "../Icons/IconUser";

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
        <div className="flex flex-col  md:flex-row gap-4  mt-8">
          <div className="md:w-[30%] flex flex-col justify-between">
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
            <h2 className="mt-16">Cenová ponuka</h2>
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
          <div className="flex flex-col md:flex-row md:w-[70%] gap-8 ">
            <Image
              src={"/build_fast.jpg"}
              alt="Intro"
              width={1000}
              height={400}
              quality={100}
              priority={true}
              className="xl:!w-1/2 max-h-[400px] object-cover rounded-[8px]"
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
              className=" object-cover  max-h-[400px] xl:w-1/2   rounded-[8px]"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg4NK0z2wPL+/k17BmYFBxnjhrZlFRuqSqKQMDu8ab//8fvftU1jUbANs+DosgoxQqAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBuildFast;
