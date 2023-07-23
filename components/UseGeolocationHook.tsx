import { useGeolocation } from "@/hook/useLoaction";

export const UseGeolocationHook = () => {
  const state = useGeolocation();
  return <div>UseGeolocationHook{state}</div>;
};
