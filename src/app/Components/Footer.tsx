"use client";
import Image from "next/image";
import React from "react";
import IconFooterFacebook from "./Icons/IconFooterFacebook";
import IconFooterLinkedIn from "./Icons/IconFooterLinkedIn";
import IconFooterInstagram from "./Icons/IconFooterInstagram";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={`bg-black  w-full ${pathname === "/admin" && "hidden"}`}>
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
              <Link className="text-white hover:text-secondary" href={"/"}>
                Domov
              </Link>
              <Link className="text-white hover:text-secondary" href={"/o-nas"}>
                Služby
              </Link>
              <Link className="text-white hover:text-secondary" href={"/o-nas"}>
                O nás
              </Link>
            </div>
            <div className="flex flex-col">
              <Link className="text-white hover:text-secondary" href={"/blog"}>
                Blog
              </Link>
              <Link
                className="text-white hover:text-secondary"
                href={"/kontakt"}
              >
                Kontakt
              </Link>
            </div>
            <div className="flex flex-col">
              <a
                className="text-white hover:text-secondary"
                href="mailto:ferrobeton@strop.sk?subject=Otázka"
              >
                ferrobeton@strop.sk
              </a>

              <div
                className="flex flex-row gap-4
              "
              >
                <a
                  className="text-white hover:text-secondary"
                  href="tel:+421905033030"
                >
                  0905 033 030,
                </a>

                <a
                  className="text-white hover:text-secondary"
                  href="tel:+421948207776"
                >
                  {" "}
                  0948 207 776
                </a>
              </div>

              <div className="flex flex-row gap-4 mt-2">
                <Link href={"https://www.facebook.com/STROPSK"}>
                  <IconFooterFacebook />
                </Link>
                <Link href={"https://www.x.com"}>
                  <IconFooterLinkedIn />
                </Link>
                <Link href={"https://www.instagram.com/strop.sk/"}>
                  <IconFooterInstagram />
                </Link>
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
