import { useBattery } from "@/hook/useBattery";

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
