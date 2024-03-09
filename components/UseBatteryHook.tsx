import { useBattery } from "use-custom-hook-react";

export const UseBatteryHook = () => {
  const { level, charging, chargingTime, dischargingTime } = useBattery();
  return (
    <div>
      charging: {charging.toString()}
      <br />
      level: {level}
      <br />
      Charging Time: {chargingTime}
      <br />
      Discharging Time: {dischargingTime}
    </div>
  );
};
