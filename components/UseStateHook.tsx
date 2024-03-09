import { useCustomState } from "use-custom-hook-react";

export const UseStateHook = () => {
  const [state, setState] = useCustomState(0);
  return (
    <div className="t-flex t-flex-col t-items-center t-justify-center">
      UseStateHook
    </div>
  );
};
