import React from "react";
import IconNotAuthorized from "../Icons/IconNotAuthorized";
import Link from "next/link";

const AdminFinalNotAuthorized = () => {
  return (
    <div className="min-h-[400px] justify-center items-center flex  flex-col main_section additional_padding">
      <IconNotAuthorized />
      <h2 className="text-center">Na túto sekciu nemáte oprávnenie.</h2>
      <p className="text-center">
        Zdá sa, že na túto stránku nemáte oprávnenie.
      </p>
      <Link className="btn btn--primary" href={"/login"}>
        Login
      </Link>
    </div>
  );
};

export default AdminFinalNotAuthorized;
