"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonElement from "../ButtonElements/ButtonElement";
import IconPlus from "../Icons/IconPlus";
import Link from "next/link";
import { PanelProductHomePage } from "@/app/firebase/interface";

export function createSlug(title: string): string {
  const slug = title
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

  return slug;
}

interface Props {
  panels: PanelProductHomePage[];
}
const HomePagePanel = ({ panels }: Props) => {
  const [choosenIndex, setChoosenIndex] = useState(0);

  return (
    <div className="main_section ">
      <div className="flex flex-col md:flex-row md:gap-6 xl:gap-8 2xl:gap-12 ">
        <Image
          src={"/panel.jpg"}
          alt="panel"
          width={1000}
          height={1000}
          className="w-full md:w-1/2 hidden md:block h-auto  object-cover rounded-[8px]"
        />

        <div className="justify-between flex flex-col md:w-1/2 ">
          <div className="flex flex-col">
            <p>[Produkty]</p>
            <h2>Stropný panel {panels[choosenIndex].nazov}</h2>
            <p className="mt-4">{panels[choosenIndex].popis1}</p>
            <p className="mt-4 line-clamp-5 2xl:line-clamp-[8]">
              {panels[choosenIndex].popis2}
            </p>
            <Link
              className=""
              href={`stropne-panely?typ=${createSlug(
                panels[choosenIndex].nazov
              )}`}
            >
              <div className="mt-4 mb-8">
                <ButtonElement text="Zistiť viac" />
              </div>
            </Link>
          </div>
          <div className="flex flex-col border-t border-black ">
            {panels.map((panel, index) => (
              <div key={index}>
                {index != choosenIndex && (
                  <div
                    className="flex flex-row justify-between border-b border-black p-4 items-center cursor-pointer"
                    onClick={() => setChoosenIndex(index)}
                  >
                    {" "}
                    <>
                      <p className="p font-normal hover:text-secondary duration-100">
                        Stropný panel {panel.nazov}
                      </p>
                      <IconPlus />
                    </>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Image
            src={"/panel.jpg"}
            alt="panel"
            width={500}
            height={500}
            className="w-full md:w-1/2  md:hidden mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePagePanel;
