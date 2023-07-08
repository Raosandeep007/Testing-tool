import { useDevice } from "@/hook/useDevice";

export const UseDeviceHook = () => {
  const device = useDevice();
  return <div>Current device: {device}</div>;
};
