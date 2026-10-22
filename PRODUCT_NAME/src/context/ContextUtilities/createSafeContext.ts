import { createContext, useContext } from "react";

export function createSafeContext<T>(name: string) {
  const Context = createContext<T | null>(null);

  function useSafeContext() {
    const value = useContext(Context);
    if (!value) {
      throw new Error(`${name} must be used within its provider.`);
    }
    return value;
  }

  return [Context, useSafeContext] as const;
}
