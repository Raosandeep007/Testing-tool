"use client";

import { useUpdateQuery } from "@/hook/useQuery";
import { useSearchParams } from "next/navigation";
import LocalStorageHook from "./LocalStorageHook";
import UpdateQueryHook from "./QueryHook";

const HookRender = () => {
  const searchParams = useSearchParams();
  const selectedHook = searchParams.get("hook") || "";

  switch (selectedHook) {
    case "useLocalStorage":
      return <LocalStorageHook />;
    case "useUpdateQuery":
      return <UpdateQueryHook />;
    default:
      return <p>Please select a hook</p>;
  }
};

export const HookTesting = () => {
  const { update } = useUpdateQuery();
  const searchParams = useSearchParams();
  const selectedHook = searchParams.get("hook") || "";
  const hooks = ["useLocalStorage", "useUpdateQuery"];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === "-") {
      update({ query: "hook" });
    } else {
      update({ query: "hook", value });
    }
  };

  return (
    <div className="t-flex t-justify-center t-items-center t-flex-col">
      <select onChange={handleChange} defaultValue={selectedHook}>
        <option value="-">Select hook</option>
        {hooks.map((el) => {
          return (
            <option value={el} key={el}>
              {el}
            </option>
          );
        })}
      </select>
      <HookRender />
    </div>
  );
};
