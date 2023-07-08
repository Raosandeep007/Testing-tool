import { useBrowser } from "@/hook/useBrowser";

export const USeBrowserHook = () => {
  const browser = useBrowser();
  return <div>Current browser: {browser}</div>;
};
