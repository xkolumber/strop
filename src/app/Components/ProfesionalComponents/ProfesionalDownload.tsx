"use client";
import { FieldValues, useForm } from "react-hook-form";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ButtonElement from "../ButtonElement";
import IconDownload from "../Icons/IconDownload";
import ButtonElementNavbar from "../ButtonElementNavbar";
import IconCheck from "../Icons/IconCheck";
import { ClipLoader } from "react-spinners";

const downloads = [
  {
    title: "Predpätý stropný panel typu FF",
    link: "",
  },
  {
    title: "Stropný panel FF 200 A",
    link: "",
  },
  {
    title: "Stropný panel FF 200 B",
    link: "",
  },
  {
    title: "Stropný panel FF 200 C",
    link: "",
  },
  {
    title: "Stropný panel FF 200 D",
    link: "",
  },
  {
    title: "Jednostranná výmena k panelom FF200 / 900",
    link: "",
  },
  {
    title: "Obojstranná výmena k panelom FF200 / 900",
    link: "",
  },
  {
    title: "Jednostranná výmena k panelom FF200 / 1200",
    link: "",
  },
  {
    title: "Obojstranná výmena k panelom FF200 / 1200",
    link: "",
  },
  {
    title: "Výmena k panelom FF – materiál k výrobe",
    link: "",
  },
  {
    title: "STROP.SK certifikaty 1",
    link: "",
  },
  {
    title: "  STROP.SK certifikaty 2",
    link: "",
  },
];

const ProfesionalDownload = () => {
  const [hoveredItem, setHoveredItem] = useState(-1);
  const [clickedObject, setClickedObject] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [finalEmail, setFinalEmail] = useState("");
  const popupRef = useRef<HTMLDivElement>(null);
  const [choosenIndex, setChoosenIndex] = useState(-1);
  const [popUpTrue, setPopUpTrue] = useState(false);
  const [checkData, setCheckData] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);

  const handleClickedObject = (index: number) => {
    setChoosenIndex(index);
    setPopUpTrue(true);
  };

  const link =
    "https://firebasestorage.googleapis.com/v0/b/game-ready-cf008.appspot.com/o/hlavne_produkty%2FDu%C3%A1lna%20hadica%2FGame-Ready-Wrap-UM-Ankle-EN-704576B.pdf?alt=media&token=1b949d29-dae2-47c1-a0d4-62d7eeb79b99";

  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleSendEmail = async () => {
    console.log("zaciatok");

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
          link: link,
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
      } else {
        console.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
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

  return (
    <div className="main_section bg-primary">
      <Toaster />
      <p>[Na stiahnutie]</p>
      <h2>Na stiahnutie</h2>
      <p>
        Tieto dokumenty obsahujú podrobné údaje o našich výrobkoch, ich
        parametre, vlastnosti a iné technické podrobnosti, ktoré môžu byť pre
        vás dôležité pri projektoch. Stačí vyplniť e-mail a my vám zašleme
        vybrané dokumenty.
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        <ButtonElement text="Typ FF20" />
        <ButtonElement text="Typ FF20" />
        <ButtonElement text="Typ FF20" />
        <ButtonElement text="Typ FF20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8  gap-4">
        {downloads.map((one_object, index) => (
          <div
            className="border-black border rounded-[8px] p-4 2xl:p-7 flex flex-row justify-between items-center cursor-pointer"
            key={index}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(-1)}
            onClick={() => handleClickedObject(index)}
          >
            <p
              className={`${
                hoveredItem === index &&
                "font-semibold  transition-transform ease-in duration-75"
              }`}
            >
              {one_object.title}
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
              <h4 className="text-center text-white mb-8">Zadajte e-mail</h4>

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
                  <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
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
  );
};

export default ProfesionalDownload;
