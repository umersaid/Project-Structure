import { useCallback, useState } from "react";

export function useBooleanState(initial = false) {
  const [value, setValue] = useState(initial);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((previous) => !previous), []);

  return { value, setTrue, setFalse, toggle, setValue };
}
