"use client";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";
import IconHamburger from "./Icons/IconHamburger";
import { useEffect, useRef, useState } from "react";

import IconCloseButton from "./Icons/IconCloseButton";
import ButtonElement from "./ButtonElements/ButtonElement";
import ButtonElementNavbar from "./ButtonElements/ButtonElementNavbar";

const Navbar = () => {
  const [openWindow, setOpenWindow] = useState(false);

  const router = useRouter();
  const popupRef = useRef<HTMLDivElement>(null);
  const [closeClicked, setCloseClicked] = useState(false);

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

  const handleLoginMobile = () => {
    setOpenWindow(true);
    clickedButtonClose();
  };

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
        <div className="hidden xl:flex flex-row gap-12 items-center">
          <Link href={"/"}>Domov</Link>
          <Link href={"/o-nas"}>O nás</Link>
          <Link href={"/stropne-panely"}>Stropné panely</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link className="" href={"/kontakt"}>
            Kontakt
          </Link>
        </div>

        <div className="navbar_second_group2   ">
          <Link className="hidden xl:flex" href={"/kontakt"}>
            <ButtonElementNavbar text="Kontaktujte nás" />
          </Link>
          <div
            className={`xl:hidden cursor-pointer ${closeClicked && "hidden"} `}
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

          <Link
            href={"/o-nas"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            O nás
          </Link>
          <Link
            href={"/stropne-panely"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Stropné panely
          </Link>
          <Link
            href={"/blog"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Blog
          </Link>
          <Link
            href={"/kontakt"}
            className="nav__item"
            onClick={() => clickedButtonClose()}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
