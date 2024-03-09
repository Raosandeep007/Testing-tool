import { useDevice } from "use-custom-hook-react";

export const UseDeviceHook = () => {
  const device = useDevice();
  return <div>Current device: {device}</div>;
};
