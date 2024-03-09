import { useGeolocation } from "use-custom-hook-react";

export const UseGeolocationHook = () => {
  const state = useGeolocation();
  return <div>UseGeolocationHook{state}</div>;
};
