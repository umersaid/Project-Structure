"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchParamState(key: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get(key) ?? "";

  const setValue = useCallback(
    (nextValue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!nextValue) {
        params.delete(key);
      } else {
        params.set(key, nextValue);
      }
      router.replace(`${pathname}?${params.toString()}`);
    },
    [key, pathname, router, searchParams]
  );

  return [value, setValue] as const;
}
