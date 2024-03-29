"use client";

import { debounce } from "@/utils/debouncing";
import { useState } from "react";
import { useLocalStorage } from "use-custom-hook-react";

const LocalStorageHook = () => {
  const [data, setData, removeData] = useLocalStorage("test", null);
  const [value, setValue] = useState("");

  const handleChange = debounce((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value || "");
  });

  return (
    <div className="t-flex t-gap-2 t-items-center t-justify-center t-flex-col">
      <textarea onChange={handleChange} rows={5} cols={20} autoFocus />
      <button onClick={() => setData(value)}>Set Local Storage</button>
      <button onClick={removeData}>Remove Local Storage</button>
      <div>{data}</div>
    </div>
  );
};

export default LocalStorageHook;
