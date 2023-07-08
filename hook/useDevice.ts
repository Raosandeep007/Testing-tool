import {
  DESKTOP,
  IOS_PHONE,
  IOS_TABLET,
  PHONE,
  TABLET,
} from "@/constants/hook";
import { useMemo } from "react";

export const useDevice = () => {
  const userAgent = navigator?.userAgent;
  const device = useMemo(() => {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      if (/iPad/.test(navigator.userAgent)) {
        return IOS_TABLET;
      } else {
        return TABLET;
      }
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        userAgent
      )
    ) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        return IOS_PHONE;
      } else {
        return PHONE;
      }
    }
    return DESKTOP;
  }, [userAgent]);

  return device;
};
