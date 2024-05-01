import Image from "next/image";
import React from "react";
import IconFooterFacebook from "./Icons/IconFooterFacebook";
import IconFooterLinkedIn from "./Icons/IconFooterLinkedIn";
import IconFooterInstagram from "./Icons/IconFooterInstagram";

const Footer = () => {
  return (
    <footer className=" bg-black  w-full">
      <div className="main_section">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className=" flex flex-col md:flex-row gap-4 md:gap-24 xl:gap-52 md:mt-0">
            <div className="flex flex-col ">
              <p className="text-white">
                OC Avion, Ivánska cesta 16, 821 04 Bratislava
              </p>
              <p className="text-white">Pon - Pia 9:00 - 17:00</p>
              <p className="text-white">Všeobecné obchodné podmienky</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white">Domov</p>
              <p className="text-white">Služby</p>
              <p className="text-white">O nás</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white">Pre profesionálov</p>
              <p className="text-white">Blog</p>
              <p className="text-white">Kontakt</p>
            </div>
            <div className="flex flex-col">
              <p className="text-white">ferrobeton@strop.sk</p>
              <p className="text-white">0905 033 030, 0948 207 776</p>
              <div className="flex flex-row gap-4 mt-2">
                <IconFooterFacebook />
                <IconFooterLinkedIn />
                <IconFooterInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={"/strop_pismo.svg"}
          alt="strop pismo"
          width={5000}
          height={5000}
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
