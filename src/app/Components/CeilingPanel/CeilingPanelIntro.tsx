"use client";
import { DownloadPdf, PanelProduct } from "@/app/firebase/interface";
import { AdminAddNewEmail, sendEmailtoCustomer } from "@/app/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonElement from "../ButtonElements/ButtonElement";
import ButtonElementNavbar from "../ButtonElements/ButtonElementNavbar";
import ButtonElementPanel from "../ButtonElements/ButtonElementPanel";
import IconCheck from "../Icons/IconCheck";
import IconDownload from "../Icons/IconDownload";

interface Props {
  data: PanelProduct[];
}

const CeilingPanelIntro = ({ data }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [choosenType, setChoosenType] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);
  const [finalEmail, setFinalEmail] = useState("");
  const [choosenLinks, setChoosenLinks] = useState<DownloadPdf[]>([]);
  const [popUpTrue, setPopUpTrue] = useState(false);
  const [checkData, setCheckData] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const [choosenPanel, setChoosenPanel] = useState<PanelProduct>();
  const [hoveredItem, setHoveredItem] = useState(-1);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const search = searchParams.get("typ");

    if (search != null) {
      setChoosenType(search.toLowerCase());
      const panel = data.find((panel) => panel.slug === search);
      if (panel) {
        setChoosenPanel(panel);
      } else {
        const defaultPanel = data.find((panel) => panel.slug === "200");
        const url = new URL(window.location.href);
        url.searchParams.set("typ", "200");
        window.history.replaceState({}, "", url.toString());
        setChoosenPanel(defaultPanel);
      }
    } else {
      const defaultPanel = data.find((panel) => panel.slug === "200");
      setChoosenPanel(defaultPanel);
      const url = new URL(window.location.href);
      url.searchParams.set("typ", "200");
      window.history.replaceState({}, "", url.toString());
    }
    const hash = window.location.hash;
    if (hash && hash === "#na_stiahnutie") {
      const element = document.getElementById("na_stiahnutie");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router, data]);

  const handleClick = (typ: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("typ", typ);
    window.history.replaceState({}, "", url.toString());

    setChoosenType(typ);
    const panel = data.find((panel) => panel.slug === typ);
    if (panel) {
      setChoosenPanel(panel);
    }
  };

  const handleClickedObject = (link: string, nazov: string) => {
    const find_link = choosenLinks.find((object) => object.pdf_link === link);
    if (find_link) {
      setChoosenLinks(
        choosenLinks.filter((object) => object.pdf_link !== link)
      );
    } else {
      setChoosenLinks([...choosenLinks, { nazov, pdf_link: link }]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopUpTrue(false);
      }
    };

    if (popUpTrue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpTrue]);

  const { reset } = useForm<FormData>();

  const handleSendEmail = async () => {
    if (!checkData) {
      toast.error("Zaškrtnite súhlas.");
      return;
    }

    if (!finalEmail.includes("@")) {
      toast.error("Email nemá správny tvar");
      return;
    }
    if (finalEmail.length < 5) {
      toast.error("Email nemá správny tvar");
      return;
    }

    try {
      setIsLoading(true);

      const response = await sendEmailtoCustomer(finalEmail, choosenLinks);

      if (response.data?.id) {
        await AdminAddNewEmail(finalEmail, choosenLinks);

        reset();
        console.log("Email sent successfully!");
        setIsLoading(false);
        setFinalEmail("");
        setPopUpTrue(false);
        setCheckData(false);
        setFinalMessage(true);
        setChoosenLinks([]);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-primary">
        <div className="main_section" id="na_stiahnutie">
          <Toaster />
          <p>[Na stiahnutie]</p>
          <h2>Na stiahnutie</h2>
          <p className="max-w-[600px]">
            Tieto dokumenty obsahujú podrobné údaje o našich výrobkoch, ich
            parametre, vlastnosti a iné technické podrobnosti, ktoré môžu byť
            pre vás dôležité pri projektoch. Stačí vyplniť e-mail a my vám
            zašleme vybrané dokumenty.
          </p>
          <div className="scroll-container mt-2">
            {data.map((button, index) => (
              <div
                className=""
                onClick={() => handleClick(button.slug)}
                key={index}
              >
                <ButtonElementPanel
                  text={`${button.nazov}`}
                  isChoosen={button.slug === choosenType}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <p>Počet vybraných pdf dokumentov: </p>
              <p className="ml-2">{choosenLinks.length}</p>
            </div>

            <button
              className={`btn btn--fourthtiary ${
                choosenLinks.length === 0 && "disabledPrimaryBtn"
              }`}
              disabled={choosenLinks.length === 0}
              onClick={() => setPopUpTrue(true)}
            >
              Odoslať na email
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8  gap-4">
            {choosenPanel?.download_file.map((one_object, index) => (
              <div
                className="border-black border rounded-[8px] p-4 2xl:p-7 flex flex-row justify-between items-center cursor-pointer"
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(-1)}
                onClick={() =>
                  handleClickedObject(one_object.pdf_link, one_object.nazov)
                }
              >
                <p
                  className={`${
                    hoveredItem === index &&
                    "font-semibold  transition-transform ease-in duration-75"
                  } ${
                    choosenLinks.find(
                      (object) => object.pdf_link === one_object.pdf_link
                    ) && "font-semibold"
                  } `}
                >
                  {one_object.nazov}
                </p>
                <div className="">
                  {" "}
                  <IconDownload
                    isHovered={hoveredItem === index}
                    isChosen={choosenLinks.some(
                      (object) => object.pdf_link === one_object.pdf_link
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          {popUpTrue && (
            <>
              <div className="behind_card_background"></div>
              <div className="popup_message" ref={popupRef}>
                <form className="send_email">
                  <h4 className="text-center text-white mb-8">
                    Zadajte e-mail
                  </h4>

                  <input
                    type="email"
                    id="email"
                    value={finalEmail}
                    onChange={(e) => setFinalEmail(e.target.value)}
                    placeholder="*Email"
                    required
                    className="w-full"
                  />
                  <div className="flex flex-row gap-8 items-center pt-4">
                    <div className="">
                      <div
                        className="square cursor-pointer"
                        onClick={() => setCheckData((prevState) => !prevState)}
                      >
                        {" "}
                        <IconCheck deliveryAdress={checkData} />
                      </div>
                    </div>
                    <p className="text-white">Súhlasím so spracovaním údajov</p>
                  </div>
                  <div className="flex flex-row gap-4 mt-4 w-full justify-center items-center">
                    <button
                      className=" flex justify-center "
                      onClick={() => handleSendEmail()}
                      disabled={isLoading}
                    >
                      <ButtonElementNavbar
                        text="Odoslať"
                        isLoading={isLoading}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}

          {finalMessage && (
            <>
              <div className="behind_card_background"></div>
              <div className="popup_message" ref={popupRef}>
                <form className="send_email">
                  <h4 className="text-center text-white mb-8">
                    Ďakujeme, PDF nájdete vo svojom inboxe :)
                  </h4>

                  <div className="flex flex-row gap-4 mt-4 w-full justify-center items-center">
                    <div
                      className=" flex justify-center "
                      onClick={() => setFinalMessage(false)}
                    >
                      <ButtonElementNavbar text="Naspäť" />
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-secondary">
        <div className="main_section ">
          <div className="flex flex-col lg:flex-row md:gap-6 xl:gap-8 2xl:gap-12">
            <div
              className="w-full lg:w-1/2
"
            >
              <p>[Možnosti úprav]</p>
              <h2>Rezy</h2>
              <p className="mt-4">{choosenPanel?.rezy1}</p>
              <p className="mt-4"> {choosenPanel?.rezy2}</p>
              <h2 className="mt-4">Otvory</h2>
              <p className="mt-4">{choosenPanel?.otvory1}</p>
              <p className="mt-4">{choosenPanel?.otvory2}</p>
              <div className="mt-4 mb-8">
                <Link href={"/kontakt"}>
                  <ButtonElement text="Zistiť viac" />
                </Link>
              </div>
            </div>
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fpanel.jpg?alt=media&token=4fa05e2e-1228-4aa1-9bae-d8d0eea595d6"
              }
              alt="panel"
              width={500}
              height={500}
              className="w-full lg:w-1/2 md:max-h-[500px] lg:max-h-none  object-cover rounded-[8px]"
            />
          </div>
        </div>
      </div>

      <div className="main_section ">
        <h2>Predbežný výpočet konštrukčnej hrúbky a výstuže</h2>
        <p>{choosenPanel?.predbezny_vypocet}</p>

        <h2 className="mt-16">
          Podrobný výpočet konštrukčnej hrúbky a výstuže
        </h2>
        <p>{choosenPanel?.podrobny_vypocet}</p>

        <h2 className="mt-16">Požiarna odolnosť panelov</h2>
        <p>{choosenPanel?.poziarna_odolnost}</p>

        <div className="mt-16">
          <Link href={"/kontakt"}>
            <ButtonElement text="Kontaktujte nás" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CeilingPanelIntro;
