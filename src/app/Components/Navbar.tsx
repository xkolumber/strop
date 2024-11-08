"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import IconHamburger from "./Icons/IconHamburger";
import { useEffect, useRef, useState } from "react";

import IconCloseButton from "./Icons/IconCloseButton";
import ButtonElement from "./ButtonElements/ButtonElement";
import ButtonElementNavbar from "./ButtonElements/ButtonElementNavbar";
import { navbar_data } from "../lib/data";

const Navbar = () => {
  const [openWindow, setOpenWindow] = useState(false);

  const router = useRouter();
  const popupRef = useRef<HTMLDivElement>(null);
  const [closeClicked, setCloseClicked] = useState(false);
  const pathname = usePathname();

  const clickedButtonClose = () => {
    setCloseClicked(!closeClicked);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setOpenWindow(false);
      }
    };

    if (openWindow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openWindow]);
  console.log(pathname);

  return (
    <nav className={`navbar `}>
      <div className="main_section flex flex-row justify-between !pt-0 !pb-0 items-center">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={330}
            height={50}
            className="w-[50px] h-[30px]   object-contain"
          />
        </Link>
        <div className="hidden lg:flex flex-row gap-12 items-center">
          {navbar_data.map((object, index) => (
            <Link
              href={`${object.link === "/domov" ? "/" : `${object.link} `}`}
              className={`${pathname.startsWith(object.link) && "text-secondary"} ${pathname === "/" && object.link === "/domov" && "text-secondary"}`}
              key={index}
            >
              {object.nazov}
            </Link>
          ))}
        </div>

        <div className="navbar_second_group2   ">
          <Link className="hidden lg:flex" href={"/kontakt"}>
            <ButtonElementNavbar text="Kontaktujte nás" />
          </Link>
          <div
            className={`lg:hidden cursor-pointer ${closeClicked && "hidden"} `}
            onClick={() => clickedButtonClose()}
          >
            <IconHamburger />
          </div>
        </div>

        {closeClicked && <div className="behind_card_background"></div>}
        <div
          className={`collapsible--expanded ${
            closeClicked ? "collapsible--collapsed" : ""
          }  `}
        >
          <span className="nav__item">
            <div
              className={`icon icon--white nav__close-button `}
              onClick={() => clickedButtonClose()}
            >
              <IconCloseButton />
            </div>
          </span>

          <div className="flex flex-col justify-end items-end">
            {navbar_data.map((object, index) => (
              <Link
                href={`${object.link === "/domov" ? "/" : `${object.link} `}`}
                className={`nav__item ${pathname.startsWith(object.link) && "text-secondary"} ${pathname === "/" && object.link === "/domov" && "text-secondary"} `}
                key={index}
                onClick={() => clickedButtonClose()}
              >
                {object.nazov}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
