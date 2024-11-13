"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

export default function Navigation() {
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState<string>("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);

      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      style={{ left: "12%" }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full bg-black flex justify-between items-center border border-white py-7 px-4 "
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link href={nav.link} key={nav.name} className="mb-16 pl-3 min-w-[20%]">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}
