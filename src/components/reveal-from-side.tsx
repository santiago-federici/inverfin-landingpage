"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function RevealFromSide({
  side,
  children,
  className,
  delay,
}: {
  side: "left" | "right";
  children: JSX.Element;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  const sideValue = side === "left" ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      variants={{
        initial: {
          opacity: 0,
          x: sideValue,
        },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            delay: delay || 0,
            duration: 0.3,
          },
        },
      }}
      initial="initial"
      animate={mainControls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
