"use client";

import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/navigation";
import IconHamburger from "./Icons/IconHamburger";
import { useEffect, useRef, useState } from "react";

import IconCloseButton from "./Icons/IconCloseButton";

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
      <Link href="/">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={0}
          height={0}
          className="w-[150px] h-[30px]  navbar_left object-contain"
        />
      </Link>
      <div className="hidden xl:flex flex-row gap-12 items-center">
        <Link href={"/produkty"}>Domov</Link>
        <Link href={"/o-nas"}>O nás</Link>
        <Link href={"/kontakt"}>Stroné panely</Link>
        <Link href={"/pre-profesionalov"}>Pre profesionálov</Link>
        <Link href={"/kontakt"}>Blog</Link>
        <Link className="" href={"/kontakt"}>
          Kontakt
        </Link>
      </div>
      <div className="navbar_second_group2 navbar_right">
        <div
          className={` xl:hidden cursor-pointer`}
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
            className="icon icon--white nav__close-button"
            onClick={() => clickedButtonClose()}
          >
            <IconCloseButton />
          </div>
        </span>
        <Link
          href={"/produkty"}
          className="nav__item"
          onClick={() => clickedButtonClose()}
        >
          Produkty
        </Link>
        <Link
          href={"/o-nas"}
          className="nav__item"
          onClick={() => clickedButtonClose()}
        >
          O nás
        </Link>
        <Link href={"/pre-profesionalov"}>Pre profesionálov</Link>
        <Link
          href={"/kontakt"}
          className="nav__item"
          onClick={() => clickedButtonClose()}
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
