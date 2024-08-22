"use client";

import { useEffect } from "react";

import { NAV_LINKS } from "../lib/constants";
import { cn } from "../lib/utils";

import { AnimatePresence, motion, useCycle, MotionConfig } from "framer-motion";

import Button from "./button";

export default function Navbar() {
  const [menu, toggleMenu] = useCycle(false, true);

  // disable scrolling when menu is open
  useEffect(() => {
    if (menu) {
      setTimeout(() => (document.body.style.overflow = "hidden"), 500);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <header className="wrapper flex items-center justify-between py-4">
      <picture className="aspect-auto w-36 md:w-40">
        <img
          src="/logos/inverfin.webp"
          alt="Logo de Inverfin"
          className="object-cover"
          width="200"
          height="60"
        />
      </picture>
      <nav className="hidden items-center gap-4 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.ariaLabel}
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

      <motion.button
        animate={menu ? "open" : "close"}
        className={cn("z-50 flex flex-col gap-y-1 px-1 py-1.5 lg:hidden", {
          "right-6 top-6 max-md:fixed": menu,
        })}
        onClick={() => toggleMenu()}
      >
        <motion.span
          variants={{
            open: {
              rotate: 45,
              y: 6,
            },
            close: {
              rotate: 0,
              y: 0,
            },
          }}
          className="h-0.5 w-5 bg-black"
        ></motion.span>
        <motion.span
          variants={{
            open: {
              rotate: 45,
              opacity: 0,
            },
            close: {
              rotate: 0,
              opacity: 1,
            },
          }}
          className="h-0.5 w-5 bg-black"
        ></motion.span>
        <motion.span
          variants={{
            open: {
              rotate: -45,
              y: -6,
            },
            close: {
              rotate: 0,
              y: 0,
            },
          }}
          className="h-0.5 w-5 bg-black"
        ></motion.span>
      </motion.button>

      <AnimatePresence>
        {menu && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0,
            }}
          >
            <motion.aside
              variants={{
                initial: {
                  x: "100%",
                },
                animate: {
                  x: "0",
                },
              }}
              initial="initial"
              animate="animate"
              exit="initial"
              className="fixed inset-0 z-40 flex flex-col gap-4 bg-background px-6 py-7 shadow-lg md:px-16 lg:hidden"
            >
              <nav className="mt-8 flex flex-col items-start gap-6 lg:hidden">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="text-2xl duration-200 hover:text-primary"
                    onClick={() => toggleMenu()}
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
              <Button size="large" className="mt-6">
                <a
                  href="http://virtualbroker-inverfinsa.aunesa.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Clientes
                </a>
              </Button>
              <picture className="mx-auto mt-auto aspect-auto w-1/2 md:w-1/3">
                <img
                  src="/logos/inverfin.webp"
                  alt="Logo de Inverfin"
                  className="object-cover"
                  width="200"
                  height="60"
                />
              </picture>
            </motion.aside>
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
}
