"use client";

import { useLocalStorage } from "@/hook/useLocalStorage";
import { debounce } from "@/utils/debouncing";
import { useState } from "react";

const LocalStorageHook = () => {
  const [data, setData, removeData] = useLocalStorage("test", null);
  const [value, setValue] = useState("");

  const handleChange = debounce((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setValue(value || "");
  });

  return (
    <div className="t-flex t-justify-center t-items-center t-flex-col">
      <h3>useLocalStorage</h3>
      <div className="t-flex t-gap-2 t-items-center t-justify-center t-flex-col">
        <textarea onChange={handleChange} rows={5} cols={20} autoFocus />
        <button onClick={() => setData(value)}>Set Local Storage</button>
        <button onClick={removeData}>Remove Local Storage</button>
        <div>{data}</div>
      </div>
    </div>
  );
};

export default LocalStorageHook;
