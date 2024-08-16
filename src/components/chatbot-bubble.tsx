"use client";

import { useState } from "react";

import { cn } from "../lib/utils";

import BotIcon from "../icons/bot";
import ChevronDownIcon from "../icons/chevron-down";

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-4 right-4 cursor-pointer rounded-full bg-black p-2 text-white duration-200 hover:opacity-80"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BotIcon
          className={cn("size-10", {
            hidden: isOpen,
          })}
        />
        <ChevronDownIcon
          className={cn("size-10", {
            hidden: !isOpen,
          })}
        />
      </div>

      <iframe
        width={"400px"}
        src="https://www.chatbase.co/chatbot-iframe/9eP8a_aLwx2B_KKmMkwDi"
        style={{ height: "700px" }}
        className={cn(
          "fixed bottom-20 right-4 max-w-[550px] rounded-lg shadow-lg",
          {
            "hidden text-black": !isOpen,
          },
        )}
      ></iframe>
    </>
  );
}
