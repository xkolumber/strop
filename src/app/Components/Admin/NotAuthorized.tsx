import Link from "next/link";
import React from "react";

const NotAuthorized = () => {
  return (
    <div className="main_section additional_padding  min-h-screen justify-center items-center flex flex-col">
      <h2 className="text-center">
        Nemáte právo nahliadnuť do adminskej sekcie.
      </h2>
      <p className="mt-4 xl:text-[20px] text-center max-w-[70%]">
        Pokračujte naspäť na domovskú stránku.
      </p>
      <Link href={"/"}>
        <button className="btn btn--primary">Domov</button>
      </Link>
    </div>
  );
};

export default NotAuthorized;
