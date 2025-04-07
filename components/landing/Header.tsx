"use client";
import Image from "next/image";
import { Icon } from "@/constant/icons";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import Cta from "@/constant/Cta";

const navItems = [
  { title: "Home", path: "/" },
  { title: "Features", path: "#" },
  { title: "Insights", path: "#" },
  { title: "Engagements", path: "#" },
  { title: "Mechanics", path: "#" },
  { title: "Sign Up", path: "/auth/signup" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center max-w-2xl rounded-2xl my-4 border mx-auto justify-between gap-4 md:gap-10 shadow-xl bg-[#E9F5FF] px-4 md:px-6 py-2 w-full">
      <div className="flex w-full md:w-auto justify-between items-center">
        <div className="w-10 h-10">
          <Image
            src={Icon.logo}
            alt="logo"
            width={24}
            height={24}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } md:flex  w-full md:w-auto`}
      >
        <ul className="flex  flex-col md:flex-row items-center gap-6 w-full md:w-auto">
          {navItems.map(({ path, ...rest }, idx) => (
            <li key={idx} className="text-sm w-full md:w-auto text-center">
              {rest.title === "Sign Up" ? (
                <Link href={path} className="block w-full md:w-auto">
                  <Cta
                    children={rest.title}
                    className="bg-baseColor rounded-2xl w-full md:w-auto text-sm"
                  />
                </Link>
              ) : (
                <Link href={path} className="block py-2 md:py-0">
                  {rest.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
