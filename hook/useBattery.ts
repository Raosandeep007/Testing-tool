import { useEffect, useState } from "react";

export const useBattery = () => {
  const [state, setState] = useState({
    supported: true,
    loading: true,
    level: 0,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
  });

  useEffect(() => {
    //@ts-ignore
    if (!navigator.getBattery) {
      setState((s) => ({
        ...s,
        supported: false,
        loading: false,
      }));
      return;
    }

    let battery: any = null;

    const handleChange = () => {
      setState({
        supported: true,
        loading: false,
        level: battery.level * 100,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    //@ts-ignore
    navigator.getBattery().then((b) => {
      battery = b;

      handleChange();

      b.addEventListener("levelchange", handleChange);
      b.addEventListener("chargingchange", handleChange);
      b.addEventListener("chargingtimechange", handleChange);
      b.addEventListener("dischargingtimechange", handleChange);
    });

    return () => {
      if (Boolean(battery)) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
        battery.removeEventListener("chargingtimechange", handleChange);
        battery.removeEventListener("dischargingtimechange;", handleChange);
      }
    };
  }, []);

  return state;
};
