"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDevice, useKeyPress } from "use-custom-hook-react";

export const UseKeyPressHook = () => {
  const device = useDevice();
  const [pressedKey, setPressedKey] = useState("");

  const handleKeyPress = (event: KeyboardEvent) => {
    event.preventDefault();
    setPressedKey(event.key);
  };

  useKeyPress(handleKeyPress);

  return (
    <div className="t-flex t-justify-center t-w-full t-flex-col t-items-center">
      {device === "PHONE" ||
        (device === "IOS PHONE" && (
          <input placeholder="Press any key" autoFocus />
        ))}
      <>
        <motion.h1
          key={pressedKey}
          transition={{ ease: "easeInOut", duration: 0.1 }}
          layout
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="t-text-white t-border t-border-solid t-rounded-lg t-text-center t-w-max t-h-max t-px-4 t-py-2"
        >
          {pressedKey}{" "}
        </motion.h1>{" "}
      </>
      key pressed
    </div>
  );
};
