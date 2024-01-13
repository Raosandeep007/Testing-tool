"use client";

import LocalStorageHook from "@/components/LocalStorageHook";
import UpdateQueryHook from "@/components/QueryHook";
import { UseBatteryHook } from "@/components/UseBatteryHook";
import { USeBrowserHook } from "@/components/UseBrowserHook";
import { UseDeviceHook } from "@/components/UseDeviceHook";
import { UseGeolocationHook } from "@/components/UseGeolocationHook";
import { UseStateHook } from "@/components/UseStateHook";
import UseWindowSizeHook from "@/components/UseWindowSizeHook";
import { usePageTitle } from "@/hook/usePageTitle";
import { useUpdateQuery } from "@/hook/useQuery";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const HookRender = () => {
  const searchParams = useSearchParams();
  const selectedHook = searchParams.get("hook") || "";

  switch (selectedHook) {
    case "useLocalStorage":
      return <LocalStorageHook />;
    case "useUpdateQuery":
      return <UpdateQueryHook />;
    case "useState":
      return <UseStateHook />;
    case "useDevice":
      return <UseDeviceHook />;
    case "useBrowser":
      return <USeBrowserHook />;
    case "useBattery":
      return <UseBatteryHook />;
    case "useWindowSize":
      return <UseWindowSizeHook />;
    case "useGeolocation":
      return <UseGeolocationHook />;
    default:
      return <p>Please select a hook</p>;
  }
};

const HookTesting = () => {
  const { update } = useUpdateQuery();
  const searchParams = useSearchParams();
  const selectedHook = searchParams.get("hook") || "";
  usePageTitle(selectedHook || "Custom hooks");
  const hooks = [
    "useLocalStorage",
    "useUpdateQuery",
    "useDevice",
    "useBrowser",
    "useBattery",
    "useWindowSize",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === "-") {
      update({ query: "hook" });
    } else {
      update({ query: "hook", value });
    }
  };

  const View = () => {
    return (
      <motion.div
        className="t-flex t-justify-center t-items-center t-flex-col"
        transition={{
          type: "spring",
          mass: 1,
          damping: 30,
          stiffness: 200,
        }}
      >
        <h3>{selectedHook}</h3>
        <HookRender />
      </motion.div>
    );
  };

  return (
    <motion.div className="t-flex t-justify-center t-items-center t-flex-col t-w-full t-h-screen">
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
      <View />
    </motion.div>
  );
};

export default HookTesting;
