"use client";

import { useState } from "react";
import LocalStorageHook from "./LocalStorageHook";

export const HookTesting = () => {
  const [selectedHook, setSelectedHook] = useState("");
  const hooks = ["useLocalStorage"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedHook(value);
  };

  return (
    <div className="t-flex t-justify-center t-items-center t-flex-col">
      <select onChange={handleChange}>
        <option>Select hook</option>
        {hooks.map((el) => {
          return (
            <option value={el} key={el}>
              {el}
            </option>
          );
        })}
      </select>
      {selectedHook === "useLocalStorage" && <LocalStorageHook />}
    </div>
  );
};
