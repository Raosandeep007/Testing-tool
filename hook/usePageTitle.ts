import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  const formattedTitle = title ? `${title} | by Rao Sandeep` : "by Rao Sandeep";
  useEffect(() => {
    document.title = formattedTitle;
  }, [formattedTitle]);

  return formattedTitle;
};
