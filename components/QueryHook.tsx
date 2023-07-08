"use client";

import { useUpdateQuery } from "@/hook/useQuery";
import { debounce } from "@/utils/debouncing";

const UpdateQueryHook = () => {
  const { update } = useUpdateQuery();
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) {
      update({ query: "search" });
    } else {
      update({ query: "search", value });
    }
  });

  return (
    <div className="t-flex t-gap-2 t-items-center t-justify-center t-flex-col">
      <input onChange={handleChange} autoFocus className="t-p-3" />
    </div>
  );
};

export default UpdateQueryHook;
