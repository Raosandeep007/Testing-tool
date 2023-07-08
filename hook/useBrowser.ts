import {
  CHROMIUM,
  EDGE_CHROMIUM,
  EDGE_LEGACY,
  FIREFOX,
  OPERA,
  SAFARI,
  SAMSUNG_INTERNET,
} from "@/constants/hook";
import { useMemo } from "react";

export const useBrowser = () => {
  const userAgent = navigator?.userAgent;
  const browser = useMemo(() => {
    switch (true) {
      case /Firefox/.test(userAgent):
        return FIREFOX;
      case /SamsungBrowser/.test(userAgent):
        return SAMSUNG_INTERNET;
      case /Opera|OPR/.test(userAgent):
        return OPERA;
      case /Edge/.test(userAgent):
        return EDGE_LEGACY;
      case /Edg/.test(userAgent):
        return EDGE_CHROMIUM;
      case /Chrome/.test(userAgent):
        return CHROMIUM;
      case /Safari/.test(userAgent):
        return SAFARI;
      default:
        return "unknown";
    }
  }, [userAgent]);
  return browser;
};
