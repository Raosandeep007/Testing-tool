import { useEffect, useRef } from "react";

type KeyboardEventHandler = (event: KeyboardEvent) => void;

export const useKeyPress = (callback: KeyboardEventHandler) => {
  const savedCallback = useRef<KeyboardEventHandler | null>(null);

  useEffect(() => {
    const handleEvent = (event: KeyboardEvent) => {
      if (savedCallback.current) {
        savedCallback.current(event);
      }
    };

    window.addEventListener("keydown", handleEvent);

    return () => window.removeEventListener("keydown", handleEvent);
  }, [callback]);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
};
