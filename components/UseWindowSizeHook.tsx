import React from "react";
import { useWindowSize } from "use-custom-hook-react";

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
