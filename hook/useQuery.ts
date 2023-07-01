"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parse, stringify } from "qs";

export const useUpdateQuery = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let newQuery = parse(searchParams.toString(), {
    ignoreQueryPrefix: true,
  });

  return {
    update: ({ query, value }: { query: string; value?: string }) => {
      newQuery[query] = value;
      const newSearch = stringify(newQuery, {
        skipNulls: true,
        addQueryPrefix: true,
      });
      push(`${pathname}${newSearch}`);
    },
  };
};
