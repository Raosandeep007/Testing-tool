import { useBrowser } from "use-custom-hook-react";

export const USeBrowserHook = () => {
  const browser = useBrowser();
  return <div>Current browser: {browser}</div>;
};
