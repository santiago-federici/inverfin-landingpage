"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./button";
import MenuIcon from "../icons/menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // disable scrolling when menu is open
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [open]);

  return (
    <header className="wrapper flex items-center justify-between py-4">
      <picture className="aspect-auto w-36 md:w-40">
        <img
          src="/logo-inverfin.webp"
          alt="Logo de Inverfin"
          className="object-cover"
        />
      </picture>
      <nav className="hidden items-center gap-4 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            className="text-nowrap duration-200 hover:text-primary"
          >
            {link.title}
          </a>
        ))}
        <Button className="ml-2">
          <a
            href="http://virtualbroker-inverfinsa.aunesa.com"
            target="_blank"
            rel="noreferrer"
          >
            Clientes
          </a>
        </Button>
      </nav>

      <div onClick={toggleMenu}>
        <MenuIcon className="flex cursor-pointer lg:hidden" />
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }}
              initial="initial"
              animate="animate"
              className="fixed inset-0 z-40 bg-black/50"
            ></motion.div>

            <motion.aside
              variants={{
                initial: {
                  x: "500px",
                },
                animate: {
                  x: "0",
                },
              }}
              initial="initial"
              animate="animate"
              className="fixed right-0 top-0 z-50 flex h-full w-80 flex-col gap-4 border-l bg-background p-10 pt-7 shadow-lg lg:hidden"
            >
              <div onClick={toggleMenu} className="ml-auto">
                <MenuIcon className="cursor-pointer" />
              </div>{" "}
              <nav className="mt-8 flex w-60 flex-col items-start gap-4 lg:hidden">
                {NAV_LINKS.map((link) => (
                  <a
                    href={link.href}
                    className="duration-200 hover:text-primary"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
              <Button>Clientes</Button>
              <picture className="mx-auto mt-auto aspect-auto w-3/4">
                <img
                  src="/logo-inverfin.webp"
                  alt="Logo de Inverfin"
                  className="object-cover"
                />
              </picture>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
