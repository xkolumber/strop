"use client";
import React, { useEffect, useRef, useState } from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { createSlug } from "../HomePageComponents/HomePagePanel";
import ButtonElementPanel from "../ButtonElements/ButtonElementPanel";
import { DownloadPdf, PanelProduct } from "@/app/firebase/interface";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import ButtonElementNavbar from "../ButtonElements/ButtonElementNavbar";
import IconDownload from "../Icons/IconDownload";
import IconCheck from "../Icons/IconCheck";
import { ClipLoader } from "react-spinners";

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
      }
    }
  }, [router]);

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
      const response = await fetch("/api/send-pdf-to-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: finalEmail,
          links: choosenLinks,
        }),
      });

      if (response.ok) {
        reset();
        console.log("Email sent successfully!");
        setIsLoading(false);
        setFinalEmail("");
        setPopUpTrue(false);
        setCheckData(false);
        setFinalMessage(true);
        setChoosenLinks([]);
      } else {
        console.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="main_section additional_padding">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="md:w-[60%]">Stropné panely</h2>

          <div className="flex flex-col md:w-[40%]">
            <p className="">
              Naše stropné panely FF200, FF265, FF320, FF400 sú určené
              predovšetkým pre stropné a strešné konštrukcie. Vďaka ich kvalite
              sú zaručene spoľahlivou investíciou do vašej stavby.
            </p>
            <div className="flex flex-row gap-4">
              <ButtonElement text="Kontaktujte nás" />
            </div>
          </div>
        </div>
        <div className="scroll-container">
          {data.map((button, index) => (
            <div
              className="button-wrapper"
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
        <Image
          src={"/intro.jpg"}
          alt="Intro"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
        <h2 className="mt-16">Popis panelov</h2>
        <p>
          Panely FF200 sú navrhnuté najmä pre stropné a strešné konštrukcie. Ich
          všestrannosť spočíva v tom, že môžu byť uložené ako nosník, ale dajú
          sa použiť aj pre konzolové uloženie. Technológia prepínacích lán
          umožňuje dosihnuť nadvýšenie panelov (max. l/300), ktoré sa stanovuje
          v závislosti od viacerých faktorov.
        </p>
        <p className="mt-8">
          Pre optimálne výsledky je vhodné voliť vyššie prierezy, ktoré sú viac
          vystužené. Vzhľadom k nadvýšeniu dielcov je potrebné zvoliť hrúbku
          skladby podlahy minimálne 75 milimetrov, čím sa zabezpečí nielen
          stabilita, ale aj dlhodoba spoľahlivosť konštrukcie.
        </p>
      </div>

      <div className="bg-primary">
        <div className="main_section ">
          <Toaster />
          <p>[Na stiahnutie]</p>
          <h2>Na stiahnutie</h2>
          <p className="max-w-[600px]">
            Tieto dokumenty obsahujú podrobné údaje o našich výrobkoch, ich
            parametre, vlastnosti a iné technické podrobnosti, ktoré môžu byť
            pre vás dôležité pri projektoch. Stačí vyplniť e-mail a my vám
            zašleme vybrané dokumenty.
          </p>
          <div className="scroll-container">
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
                <IconDownload isHovered={hoveredItem === index} />
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
                    <div
                      className=" flex justify-center "
                      onClick={() => handleSendEmail()}
                    >
                      <ButtonElementNavbar text="Odoslať" />
                    </div>
                    {isLoading && (
                      <ClipLoader
                        size={20}
                        color={"#ffffff"}
                        loading={isLoading}
                      />
                    )}
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
    </>
  );
};

export default CeilingPanelIntro;
