import { useWindowSize } from "@/hook/useWindowSize";
import React from "react";

const UseWindowSizeHook = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      Width: {width}
      <br />
      Height: {height}
      <br />
    </div>
  );
};

export default UseWindowSizeHook;
