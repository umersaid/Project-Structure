import { useMemo } from "react";
import { useAtomValue } from "jotai";
import { entityAtom } from "@/atoms";

export function useEntityFilters() {
  const state = useAtomValue(entityAtom);

  return useMemo(
    () => ({
      query: state.query,
      status: state.status,
      // TODO: extend with sorting and pagination filters.
    }),
    [state.query, state.status]
  );
}
