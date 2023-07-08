import { useCustomState } from "@/hook/useCustomState";

export const UseStateHook = () => {
  const [state, setState] = useCustomState(0);
  return (
    <div className="t-flex t-flex-col t-items-center t-justify-center">
      UseStateHook
    </div>
  );
};
