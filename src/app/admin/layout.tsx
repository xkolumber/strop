"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "../auth/Provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { logout, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-row">
      <div className="bg-primary w-[350px]">
        <div className="flex flex-col min-h-screen justify-between items-center  sticky top-0">
          <div className="flex flex-col items-center">
            <Link href={"/"}>
              <h2 className="text-black mt-8">Strop</h2>
            </Link>

            <Link href={"/admin"}>
              <h5 className="text-black mt-8">Admin</h5>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href={"/admin"}>
              <h5
                className={`text-black ${
                  pathname === "/admin" && "!font-bold underline"
                }`}
              >
                Panely
              </h5>
            </Link>
            <Link href="/admin/pridanie-foto-popis">
              <h5
                className={`text-black ${
                  pathname.startsWith("/admin/pridanie-foto-popis") &&
                  "!font-bold underline"
                }`}
              >
                Popisy ku stavbám
              </h5>
            </Link>
            <Link href={"/admin/databaza-kontaktov"}>
              <h5
                className={`text-black ${
                  pathname.startsWith("/admin/databaza-kontaktov") &&
                  "!font-bold underline"
                }`}
              >
                Databáza kontaktov
              </h5>
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="text-black !font-semibold cursor-pointer btn btn--primary no-print"
          >
            Odhlásiť sa
          </button>
        </div>
      </div>

      <div className=" w-full">
        <div className="main_section">{children}</div>
      </div>
    </div>
  );
}
