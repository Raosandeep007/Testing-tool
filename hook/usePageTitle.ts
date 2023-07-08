import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  const formattedTitle = title ? `${title} | Custom Hook` : "Custom Hook";
  useEffect(() => {
    document.title = formattedTitle;
  }, [formattedTitle]);

  return formattedTitle;
};
