"use client";

import { useSearchParams } from "next/navigation";

export function useQueryParam(key: string) {
  const searchParams = useSearchParams();
  return searchParams.get(key);
}
